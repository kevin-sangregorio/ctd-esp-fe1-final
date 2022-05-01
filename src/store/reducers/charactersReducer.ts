/* Dependencies */
import { Reducer } from '@reduxjs/toolkit';

/* Others */
import { CharacterActions } from '../actions/charactersActions';
import Character from '../../interfaces/character';
import CharacterDetail from '../../interfaces/characterDetail';

export interface CharacterState {
  status: 'IDLE' | 'LOADING' | 'COMPLETED' | 'FAILED';
  characters: Character[];
  errorMessage: string | null;
  favorites: Character[];
  idFavorites: number[];
  characterDetail: CharacterDetail | null;
}

const initialState: CharacterState = {
  status: 'IDLE',
  characters: [],
  errorMessage: null,
  favorites: [],
  idFavorites: [],
  characterDetail: null,
};

const characterReducer: Reducer<CharacterState, CharacterActions> = (
  state = initialState,
  action
): CharacterState => {
  switch (action.type) {
    case 'FETCH_CHARACTERS_PENDING':
      return {
        ...state,
        status: 'LOADING',
        characters: [],
        errorMessage: null,
      };
    case 'FETCH_CHARACTERS_SUCCESS':
      return { ...state, status: 'COMPLETED', characters: action.characters };
    case 'FETCH_CHARACTERS_FAILED':
      return { ...state, status: 'FAILED', errorMessage: action.error };
    case 'ADD_FAVORITE':
      return {
        ...state,
        characters: [...state.characters],
        favorites: [
          ...state.favorites.filter(
            (character) => character.id !== action.character.id
          ),
          action.character,
        ],
        idFavorites: [
          ...state.idFavorites.filter((id) => id !== action.character.id),
          action.character.id,
        ],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        characters: [...state.characters],
        favorites: [
          ...state.favorites.filter(
            (character) => character.id !== action.character.id
          ),
        ],
        idFavorites: [
          ...state.idFavorites.filter((id) => id !== action.character.id),
        ],
      };
    case 'CLEAN_FAVORITES':
      return { ...state, characters: [], favorites: [], idFavorites: [] };
    case 'SEARCH_CHARACTER_BY_ID_PENDING':
      return { ...state, status: 'LOADING' };
    case 'SEARCH_CHARACTER_BY_ID_SUCCESS':
      return {
        ...state,
        status: 'COMPLETED',
        characterDetail: action.characterDetail,
      };
    case 'SEARCH_CHARACTER_BY_ID_FAILED':
      return {
        ...state,
        status: 'FAILED',
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

export default characterReducer;
