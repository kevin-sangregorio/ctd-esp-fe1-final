import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useSelector } from '../../store/store';
import Character from '../../interfaces/character';

interface Props {
  characters: Character[];
  status: string;
}

/**
 * Grilla de personajes para la pagina de inicio. Toma los characters del estado y los renderiza
 * @param {Character[]} characters personajes obtenidos de la API segun el input ingresado
 * @param {string} status status de la petición a la API
 * @returns {JSX.Element}
 */
const GrillaPersonajes = ({characters, status}: Props) => {
  if (status === 'LOADING') return <p>Cargando...</p>;
  if (status === 'FAILED') return <p>Hubo un error</p>;

  return (
    <div className="grilla-personajes">
      {characters.map((character) => (
        <TarjetaPersonaje key={character.id} character={character} />
      ))}
    </div>
  );
};

export default GrillaPersonajes;
