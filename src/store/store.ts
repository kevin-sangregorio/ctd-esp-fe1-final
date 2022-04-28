/* Dependencies */
import { combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, applyMiddleware } from 'redux';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import thunk from 'redux-thunk';

/* Others */
import characterReducer from './reducers/charactersReducer';
import episodeReducer from './reducers/episodesReducer';

const rootReducer = combineReducers({
  characters: characterReducer,
  episodes: episodeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
