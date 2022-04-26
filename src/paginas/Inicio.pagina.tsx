import Filtros from '../componentes/personajes/filtros.componente';
import GrillaPersonajes from '../componentes/personajes/grilla-personajes.componente';
import Paginacion from '../componentes/paginacion/paginacion.componente';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { fetchCharactersThunk } from '../store/actions/charactersActions';
import { useDispatch } from 'react-redux';
import { useSelector } from '../store/store';

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio: FC = () => {
  const dispatch = useDispatch();
  const { status, characters } = useSelector((state) => state.characters);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    if (characters.length === 0) dispatch(fetchCharactersThunk(''));
  }, []);

  useEffect(() => {
    if (inputValue.length === 0) dispatch(fetchCharactersThunk(''));
  }, [inputValue]);

  //const [page, setPage] = useState<number>(1);

  const onSearchCharacter = async (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    dispatch(fetchCharactersThunk(inputValue));
  };

  const onCleanInput = async () => {
    setInputValue('');
    dispatch(fetchCharactersThunk(''));
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={onCleanInput}>
          Limpiar filtros
        </button>
      </div>
      <Filtros inputValue={inputValue} setInputValue={onSearchCharacter} />
      <Paginacion />
      <GrillaPersonajes characters={characters} status={status} />
      <Paginacion />
    </div>
  );
};

export default PaginaInicio;
