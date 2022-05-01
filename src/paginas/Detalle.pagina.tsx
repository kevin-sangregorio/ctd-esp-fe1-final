/* Dependencies */
import { useDispatch } from 'react-redux';

/* Components */
import BotonFavorito from '../componentes/botones/boton-favorito.componente';
import TarjetaEpisodio from '../componentes/episodios/tarjeta-episodio.componente';

/* Styles */
import './Detalle.css';

/* Others */
import { useSelector } from '../store/store';
import {
  addFavorite,
  removeFavorite,
} from '../store/actions/charactersActions';

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 *
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalle /> ```
 *
 * @returns {JSX.Element}
 */
const PaginaDetalle = () => {
  const dispatch = useDispatch();
  const { status, episodes, errorMessage } = useSelector(
    (state) => state.episodes
  );
  const { characterDetail, idFavorites } = useSelector(
    (state) => state.characters
  );

  const isFavorite = characterDetail && idFavorites.includes(characterDetail.id) ? true : false;

  const handleFavorite = () => {
    isFavorite
      ? dispatch(removeFavorite(characterDetail))
      : dispatch(addFavorite(characterDetail));
  };

  if (errorMessage)
    return <p>Hubo un error buscando los episodios del personaje</p>;

  if (status === 'LOADING')
    return <p>Hubo un error buscando los episodios del personaje</p>;

  return (
    <div className="container">
      <h3>{characterDetail?.name}</h3>
      <div className={'detalle'}>
        <div className={'detalle-header'}>
          <img src={characterDetail?.image} alt={characterDetail?.name} />
          <div className={'detalle-header-texto'}>
            <p>{characterDetail?.name}</p>
            <p>Planeta: {characterDetail?.location.name}</p>
            <p>Género: {characterDetail?.gender}</p>
          </div>
          <BotonFavorito esFavorito={isFavorite} onClick={handleFavorite} />
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={'episodios-grilla'}>
        {episodes.map((episode) => (
          <TarjetaEpisodio
            key={episode.id}
            name={episode.name}
            airDate={episode.aire_date}
            episode={episode.episode}
          />
        ))}
      </div>
    </div>
  );
};

export default PaginaDetalle;
