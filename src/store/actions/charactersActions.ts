import { Action, ActionCreator, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import Character from '../../interfaces/character';
import { searchCharacter } from '../../services/character.services';

//interfaces
interface FetchCharactersPendingAction extends Action {
  type: 'FETCH_CHARACTERS_PENDING';
  query: string;
}

interface FetchCharactersSuccessAction extends Action {
  type: 'FETCH_CHARACTERS_SUCCESS';
  characters: Character[];
}

interface FetchCharactersFailedAction extends Action {
  type: 'FETCH_CHARACTERS_FAILED';
  error: string;
}

interface AddFavoriteCharacterAction extends Action {
  type: 'ADD_FAVORITE';
  character: Character;
}

interface RemoveFavoriteCharacterAction extends Action {
  type: 'REMOVE_FAVORITE';
  character: Character;
}

interface CleanFavoriteCharactersAction extends Action {
  type: 'CLEAN_FAVORITES';
}

//action creators
const fetchCharactersPending: ActionCreator<FetchCharactersPendingAction> = (
  query: string
) => {
  return {
    type: 'FETCH_CHARACTERS_PENDING',
    query: query,
  };
};

const fetchCharactersSuccess: ActionCreator<FetchCharactersSuccessAction> = (
  characters: Character[]
) => {
  return {
    type: 'FETCH_CHARACTERS_SUCCESS',
    characters: characters,
  };
};

const fetchCharactersFailed: ActionCreator<FetchCharactersFailedAction> = (
  error: string
) => {
  return {
    type: 'FETCH_CHARACTERS_FAILED',
    error: error,
  };
};

export const addFavorite: ActionCreator<AddFavoriteCharacterAction> = (
  character: Character
) => {
  return {
    type: 'ADD_FAVORITE',
    character: character,
  };
};

export const removeFavorite: ActionCreator<RemoveFavoriteCharacterAction> = (
  character: Character
) => {
  return {
    type: 'REMOVE_FAVORITE',
    character: character,
  };
};

export const cleanFavorites: ActionCreator<CleanFavoriteCharactersAction> = () => {
  return {
    type: 'CLEAN_FAVORITES',
  };
};

export type CharacterActions =
  | ReturnType<typeof fetchCharactersPending>
  | ReturnType<typeof fetchCharactersSuccess>
  | ReturnType<typeof fetchCharactersFailed>
  | ReturnType<typeof addFavorite>
  | ReturnType<typeof removeFavorite>
  | ReturnType<typeof cleanFavorites>;

interface FetchCharactersThunkAction
  extends ThunkAction<void, RootState, unknown, CharacterActions> {}

export const fetchCharactersThunk = (
  query: string
): FetchCharactersThunkAction => {
  return async (dispatch) => {
    dispatch(fetchCharactersPending(query));
    try {
      const personajes: Character[] = await searchCharacter(query);
      dispatch(fetchCharactersSuccess(personajes));
    } catch (e) {
      dispatch(fetchCharactersFailed(e));
    }
  };
};