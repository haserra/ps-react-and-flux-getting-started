import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

//store its private storage
let _courses = [];
/**
 * Let's create the store as a class
 *
 * A store needs to emit an event each time a change occurs, each time an action has been dispatched
 *
 *
 */

/**
 * Our class will have access to all the methods of the EventEmitter class
 * Check it out at : https://nodejs.org/api/events.html#events_class_eventemitter
 *
 * 1. emitter.on - it adds a listener to the array of listeners
 * 2. emitter.removeListener -
 * 3. emitter.emit - it calls each registered listener (each store)
 */
class CourseStore extends EventEmitter {
  //_courses = [];

  /**
   * By convention, there are 3 methods in every Flux store
   *
   * 1. addChangeListener() // wraps  the on  method)
   * 2. removeChangeListener() // wraps removeListener method )
   * 3. enitChange() // wraps emit method)
   */
  constructor(props) {
    super(props);
  }
  // when a change occurs in our store, we will call the callback provided
  // React components will ask: Hey I'd like to know when the store changes
  // it allows React components to subscribe to the store
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  // the following method will allow React components to unsubscribe from the store
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    //return this._courses;
    return _courses;
  }

  getCourseBySlug(slug) {
    //return this._courses.find((course) => course.slug === slug); // Handy functions that return data from the Flux store
    return _courses.find((course) => course.slug === slug); // Handy functions that return data from the Flux store
  }

  // how to tell Flux to load course data via de courese API?
  // first we need to add a new action in actionTypes.js
}

const store = new CourseStore();

// we haven't yet register to the Dispatcher, so the Store will emit when actions occur, and therefore
// React components will listen to those signals

// Whenever actions occur, we need to register the store with the dispatcher

// Dispatcher registration is typically defined below the store, since it's not part of the store's public API

// This function (which is passed as a parameter to the register method of the Dispatcher class) is going to get called anytime an action is dispatched
// Every store is notified of every action

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.DELETE_COURSE:
      _courses = _courses.filter(
        (course) => course.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;

    case actionTypes.CREATE_COURSE:
      //store._courses.push(action.course);
      _courses.push(action.course);
      store.emitChange();
      break;

    case actionTypes.UPDATE_COURSE:
      _courses = _courses.map((course) =>
        course.id === action.course.id ? action.course : course
      );
      store.emitChange();
      break;

    case actionTypes.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange();
      break;

    // now we have a choice to make: when should we load the courses?
    // 1. when we needed - if we choose this option we can also learn lazy loading
    // 2. When app loads

    default:
    // nothing to do here
  }
});

// because it's the only thing to be exported, let's exported as the default.
export default store;
