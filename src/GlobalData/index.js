import React, { createContext, useReducer } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme, { themeReducer } from './theme';

//CREAMOS EL STORE
export const StoreContext = createContext();

//IMPORTAMOS ESTADOS Y LOS COMBINAMOS
const initialState = {
  theme: 'light',
  user: { id: 0, token: '' },
};

//IMPORTAMOS REDUCERS Y LOS COMBINAMOS
const combineReducers = {
  ...themeReducer,
};

//EJECUTAMOS LOS REDUCERS
const storeReducer = (state, action) => {
  return combineReducers[action.type](state, action.data);
};

const GlobalData = ({ children }) => {
  const [state, dispatchState] = useReducer(storeReducer, initialState);

  const setGlobalState = (action, data) => {
    dispatchState({ type: action, data: data });
  };

  console.log('NEW STATE->', state);
  return (
    <StoreContext.Provider value={{ state, setGlobalState }}>
      <ThemeProvider theme={theme[state.theme]}>{children}</ThemeProvider>
    </StoreContext.Provider>
  );
};

export default GlobalData;
