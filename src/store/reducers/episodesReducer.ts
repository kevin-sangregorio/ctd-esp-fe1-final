import { Reducer } from '@reduxjs/toolkit';
import { EpisodeActions } from '../actions/episodesActions';
import Episode from '../../interfaces/episode';

export interface EpisodeState {
  status: 'IDLE' | 'LOADING' | 'COMPLETED' | 'FAILED';
  episodes: Episode[];
  errorMessage: string | null;
}

const initialState: EpisodeState = {
  status: 'IDLE',
  episodes: [],
  errorMessage: null,
};

const episodeReducer: Reducer<EpisodeState, EpisodeActions> = (
  state = initialState,
  action
): EpisodeState => {
  switch (action.type) {
    case 'FETCH_EPISODES_PENDING':
      return {
        ...state,
        status: 'LOADING',
        episodes: [],
      };
    case 'FETCH_EPISODES_SUCCESS':
      return { ...state, status: 'COMPLETED', episodes: action.episodes };
    case 'FETCH_EPISODES_FAILED':
      return { ...state, status: 'FAILED', errorMessage: action.error };
    default:
      return state;
  }
};

export default episodeReducer;
