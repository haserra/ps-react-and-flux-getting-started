import { Dispatcher } from "flux";
/**
 * dispatcher is a Singleton, i.e., there's only ONE dispatcher per application
 * O Expedidor/ expediente
 *
 * This Dispatcher will hold a list of callbacks, and all actions triggered by the App
 * will be dispatched via this dispatcher
 *
 * The store(s) will register with this Dispatcher (kind of subscribing to it), to say
 * that they would like to be informed when actions occur.
 *
 */
const dispatcher = new Dispatcher();
export default dispatcher;
