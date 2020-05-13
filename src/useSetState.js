import { useReducer } from "react";

const reducer = (prevState, updatedState) => {
  return {...prevState, ...updatedState}
}

const useSetState = (initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const setState = updatedState => dispatch(updatedState);

  return [state, setState];
}

export default useSetState;