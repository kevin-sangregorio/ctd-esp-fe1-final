import './filtros.css';
import { ChangeEvent, FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  inputValue: string;
  setInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Componente encargado de realizar la peticion a la API que devuelve los personajes segun lo que se ingresa en el input
 *
 * @returns {JSX.Element} compuesto por un input y su correspondiente label
 */
const Filtros: FC<Props> = ({ inputValue, setInputValue }: Props) => {
  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={setInputValue}
        autoFocus={true}
        value={inputValue}
      />
    </div>
  );
};

export default Filtros;
