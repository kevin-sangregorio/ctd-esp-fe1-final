/* Dependencies */
import { FC } from 'react';

/* Styles */
import './tarjeta-episodio.css';

interface Props {
  name: string;
  airDate: string;
  episode: string;
}

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 *
 * @param {string} props.name name of the episode
 * @param {string} props.airDate date of release
 * @param {string} props.episode
 * @returns un JSX element
 */
const TarjetaEpisodio: FC<Props> = ({ name, airDate, episode }: Props) => {
  return (
    <div className="tarjeta-episodio">
      <h4>{name}</h4>
      <div>
        <span>{episode}</span>
        <span>{airDate}</span>
      </div>
    </div>
  );
};

export default TarjetaEpisodio;
