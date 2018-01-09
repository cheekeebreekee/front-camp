export const reduxThunk = () => {
    return ({ dispatch, getState }) => next => action => {
        return action(dispatch, getState);
      return next(action);
    };
}

  const thunk = reduxThunk();

export default thunk;