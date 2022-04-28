import { Reducer } from '@reduxjs/toolkit';
import { CharacterActions } from '../actions/charactersActions';
import Character from '../../interfaces/character';

export interface CharacterState {
  status: 'IDLE' | 'LOADING' | 'COMPLETED' | 'FAILED';
  characters: Character[];
  errorMessage: string | null;
  favorites: Character[];
  idFavorites: number[];
}

const initialState: CharacterState = {
  status: 'IDLE',
  characters: [],
  errorMessage: null,
  favorites: [],
  idFavorites: [],
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
    default:
      return state;
  }
};

export default characterReducer;
