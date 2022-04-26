import { combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, applyMiddleware } from 'redux';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import thunk from 'redux-thunk';
import characterReducer from './reducers/charactersReducer';

const rootReducer = combineReducers({
  characters: characterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
