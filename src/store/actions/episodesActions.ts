import { Action, ActionCreator, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import Episode from '../../interfaces/episode';
import { searchEpisodes } from '../../services/episode.services';

//interfaces
interface FetchEpisodesPendingAction extends Action {
  type: 'FETCH_EPISODES_PENDING';
  ids: string[];
}

interface FetchEpisodesSuccessAction extends Action {
  type: 'FETCH_EPISODES_SUCCESS';
  episodes: Episode[];
}

interface FetchEpisodesFailedAction extends Action {
  type: 'FETCH_EPISODES_FAILED';
  error: string;
}

//action creators
const fetchEpisodesPending: ActionCreator<FetchEpisodesPendingAction> = (
  ids: string[]
) => {
  return {
    type: 'FETCH_EPISODES_PENDING',
    ids,
  };
};

const fetchEpisodesSuccess: ActionCreator<FetchEpisodesSuccessAction> = (
  episodes: Episode[]
) => {
  return {
    type: 'FETCH_EPISODES_SUCCESS',
    episodes,
  };
};

const fetchEpisodesFailed: ActionCreator<FetchEpisodesFailedAction> = (
  error: string
) => {
  return {
    type: 'FETCH_EPISODES_FAILED',
    error: error,
  };
};

export type EpisodeActions =
  | ReturnType<typeof fetchEpisodesPending>
  | ReturnType<typeof fetchEpisodesSuccess>
  | ReturnType<typeof fetchEpisodesFailed>;

interface FetchEpisodesThunkAction
  extends ThunkAction<void, RootState, unknown, EpisodeActions> {}

export const fetchEpisodesThunk = (
  episodes: string[]
): FetchEpisodesThunkAction => {
  return async (dispatch) => {
    const idsArray = episodes.map((episode: string) =>
      episode.split('/').pop()
    );
    const idsString = idsArray.join(',');
    dispatch(fetchEpisodesPending(idsArray));
    try {
      const respuesta = await searchEpisodes(idsString);
      dispatch(fetchEpisodesSuccess(respuesta));
    } catch (error) {
      dispatch(fetchEpisodesFailed(error))
    }
  };
};
