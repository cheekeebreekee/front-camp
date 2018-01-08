export const createStore = (reducer) => {
    let state;
    let eventListeners = [];
  
    const getState = () => state;

    const subscribe = (listener) => {
      eventListeners.push(listener);
      return () => {
        eventListeners = eventListeners.filter(l => l !== listener);
      };
    };
  
    const dispatch = (action) => {
      state = reducer(state, action);
      eventListeners.length > 0 && eventListeners.forEach(listener => listener(state));
    };
  
    dispatch({});
  
    return { getState, dispatch, subscribe };
}