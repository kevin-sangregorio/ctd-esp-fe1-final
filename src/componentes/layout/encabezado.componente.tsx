/* Dependencies */
import { Link } from 'react-router-dom';
import { FC } from 'react';
/* Styles */
import './encabezado.css';

/**
 * Encabezado que contiene los links para navegar entre las páginas
 *
 * @returns {JSX.Element}
 */
const Encabezado: FC = () => {
  return (
    <header>
      <div>
        <div>
          <h2>Examen Final de Frontend IV</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
            {/* Lo comento porque no quiero que se pueda acceder desde la navegación. Sólo se puede clickeando en la imágen de los personajes */}
            {/* <li>
              <Link to="/detalle">Detalle</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Encabezado;
