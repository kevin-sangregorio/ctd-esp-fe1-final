import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../store/store';
import Character from '../../interfaces/character';
import {
  addFavorite,
  removeFavorite,
} from '../../store/actions/charactersActions';

interface Props {
  character: Character;
}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * @param {character} Character personaje
 * @returns {JSX.Element}
 */
const TarjetaPersonaje: FC<Props> = ({ character }: Props) => {
  const { idFavorites } = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  const isFavorite = idFavorites.includes(character.id);

  const handleFavorite = () => {
    isFavorite
      ? dispatch(removeFavorite(character))
      : dispatch(addFavorite(character));
  };

  return (
    <div className="tarjeta-personaje">
      <img src={character.image} alt={character.name} />
      <div className="tarjeta-personaje-body">
        <span>{character.name}</span>
        <BotonFavorito esFavorito={isFavorite} onClick={handleFavorite} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
