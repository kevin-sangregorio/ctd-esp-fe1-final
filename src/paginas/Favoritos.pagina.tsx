/* Dependencies */
import { useDispatch } from 'react-redux';
/* Components */
import GrillaPersonajes from '../componentes/personajes/grilla-personajes.componente';
/* Others */
import { useSelector } from '../store/store';
import { cleanFavorites } from '../store/actions/charactersActions';

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * @returns {JSX.Element}
 */
const PaginaFavoritos = () => {
  const { favorites, status } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    dispatch(cleanFavorites());
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={handleRemoveAll}>
          Eliminar todos
        </button>
      </div>
      <GrillaPersonajes characters={favorites} status={status} />
    </div>
  );
};

export default PaginaFavoritos;
