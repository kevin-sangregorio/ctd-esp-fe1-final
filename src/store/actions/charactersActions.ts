/* Dependencies */
import { Action, ActionCreator, ThunkAction } from '@reduxjs/toolkit';

/* Others */
import { RootState } from '../store';
import Character from '../../interfaces/character';
import CharacterDetail from '../../interfaces/characterDetail';
import {
  searchCharacter,
  searchCharacterById,
} from '../../services/character.services';

//interfaces
//Fetch characters
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

//Favorites
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

//Fetch character by id
interface FetchCharacterByIdPendingAction extends Action {
  type: 'SEARCH_CHARACTER_BY_ID_PENDING';
  id: number;
}

interface FetchCharacterByIdSuccessAction extends Action {
  type: 'SEARCH_CHARACTER_BY_ID_SUCCESS';
  characterDetail: CharacterDetail;
}
interface FetchCharacterByIdFailedAction extends Action {
  type: 'SEARCH_CHARACTER_BY_ID_FAILED';
  error: string;
}

//action creators
//Fetch characters
const fetchCharactersPending: ActionCreator<FetchCharactersPendingAction> = (
  query: string
) => {
  return {
    type: 'FETCH_CHARACTERS_PENDING',
    query,
  };
};

const fetchCharactersSuccess: ActionCreator<FetchCharactersSuccessAction> = (
  characters: Character[]
) => {
  return {
    type: 'FETCH_CHARACTERS_SUCCESS',
    characters,
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

//Favorites
export const addFavorite: ActionCreator<AddFavoriteCharacterAction> = (
  character: Character
) => {
  return {
    type: 'ADD_FAVORITE',
    character,
  };
};

export const removeFavorite: ActionCreator<RemoveFavoriteCharacterAction> = (
  character: Character
) => {
  return {
    type: 'REMOVE_FAVORITE',
    character,
  };
};

export const cleanFavorites: ActionCreator<
  CleanFavoriteCharactersAction
> = () => {
  return {
    type: 'CLEAN_FAVORITES',
  };
};

//Fetch character by id
export const fetchCharacterByIdPending: ActionCreator<
  FetchCharacterByIdPendingAction
> = (id: number) => {
  return {
    type: 'SEARCH_CHARACTER_BY_ID_PENDING',
    id,
  };
};

export const fetchCharacterByIdSuccess: ActionCreator<
  FetchCharacterByIdSuccessAction
> = (characterDetail: CharacterDetail) => {
  return {
    type: 'SEARCH_CHARACTER_BY_ID_SUCCESS',
    characterDetail,
  };
};

export const fetchCharacterByIdFailed: ActionCreator<
  FetchCharacterByIdFailedAction
> = (error: string) => {
  return {
    type: 'SEARCH_CHARACTER_BY_ID_FAILED',
    error,
  };
};

export type CharacterActions =
  | ReturnType<typeof fetchCharactersPending>
  | ReturnType<typeof fetchCharactersSuccess>
  | ReturnType<typeof fetchCharactersFailed>
  | ReturnType<typeof addFavorite>
  | ReturnType<typeof removeFavorite>
  | ReturnType<typeof cleanFavorites>
  | ReturnType<typeof fetchCharacterByIdPending>
  | ReturnType<typeof fetchCharacterByIdSuccess>
  | ReturnType<typeof fetchCharacterByIdFailed>;

interface FetchCharactersThunkAction
  extends ThunkAction<void, RootState, unknown, CharacterActions> {}

export const fetchCharactersThunk = (
  query: string
): FetchCharactersThunkAction => {
  return async (dispatch) => {
    dispatch(fetchCharactersPending(query));
    try {
      const character: Character[] = await searchCharacter(query);
      dispatch(fetchCharactersSuccess(character));
    } catch (e) {
      dispatch(fetchCharactersFailed(e));
    }
  };
};

export const fetchCharacterByIdThunk = (
  id: number
): FetchCharactersThunkAction => {
  return async (dispatch) => {
    dispatch(fetchCharacterByIdPending(id));
    try {
      const characterDetail: CharacterDetail = await searchCharacterById(id);
      dispatch(fetchCharacterByIdSuccess(characterDetail));
    } catch (e) {
      dispatch(fetchCharacterByIdFailed(e));
    }
  };
};
