import { Link } from 'react-router-dom';
import './encabezado.css';

/**
 * Encabezado que contiene los links para navegar entre las páginas
 *
 * Uso: `<Encabezado />`
 *
 * @returns {JSX.Element}
 */
const Encabezado = () => {
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
            {/* Lo comento porque no quiero que se pueda acceder desde la navegación. Solo se puede clickeando en la imágen de los perosnajes */}
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
