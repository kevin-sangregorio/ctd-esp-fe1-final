import { useDispatch } from 'react-redux';
import GrillaPersonajes from '../componentes/personajes/grilla-personajes.componente';
import { useSelector } from '../store/store';
import { cleanFavorites } from '../store/actions/charactersActions';

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
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
          Remove all
        </button>
      </div>
      <GrillaPersonajes characters={favorites} status={status} />
    </div>
  );
};

export default PaginaFavoritos;
