/* Dependencies */
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/* Components */
import BotonFavorito from '../botones/boton-favorito.componente';

/* Styles */
import './tarjeta-personaje.css';

/* Others */
import { useSelector } from '../../store/store';
import Character from '../../interfaces/character';
import {
  addFavorite,
  fetchCharacterByIdThunk,
  removeFavorite,
} from '../../store/actions/charactersActions';
import { fetchEpisodesThunk } from '../../store/actions/episodesActions';

interface Props {
  character: Character;
}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * @param {Character} character personaje
 * @returns {JSX.Element}
 */
const TarjetaPersonaje: FC<Props> = ({ character }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { idFavorites } = useSelector((state) => state.characters);
  const isFavorite = idFavorites.includes(character.id);
  const episodes: string[] = character.episode;

  const handleFavorite = () => {
    isFavorite
      ? dispatch(removeFavorite(character))
      : dispatch(addFavorite(character));
  };

  const handleClickImage = () => {
    dispatch(fetchEpisodesThunk(episodes))
    dispatch(fetchCharacterByIdThunk(character.id))
    navigate(`/detalle/${character.id}`)
  };

  return (
    <div className="tarjeta-personaje">
      <img
        src={character.image}
        alt={character.name}
        onClick={handleClickImage}
      />
      <div className="tarjeta-personaje-body">
        <span>{character.name}</span>
        <BotonFavorito esFavorito={isFavorite} onClick={handleFavorite} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
