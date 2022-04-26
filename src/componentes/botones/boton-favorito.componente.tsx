import './boton-favorito.css';
import { FC } from 'react';

interface Props {
  esFavorito: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * @param {boolean} esFavorito indica si es favorito o no y determina la estrella a usar
 * @param {React.MouseEventHandler<HTMLDivElement>} onClick indica si es favorito o no y determina la estrella a usar
 * @returns {JSX.Element}
 */
const BotonFavorito: FC<Props> = ({ esFavorito, onClick }: Props) => {
  const src = esFavorito ? '/imagenes/star-filled.png' : '/imagenes/star.png';

  return (
    <div className="boton-favorito" onClick={onClick}>
      <img src={src} alt={'favorito'} />
    </div>
  );
};

export default BotonFavorito;
