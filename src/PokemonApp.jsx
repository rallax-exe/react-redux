import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';


export const PokemonApp = () => {


  // Para despachar las acciones
  const dispatch = useDispatch();

  //Obtenemos los pokemones de nuestro state que esta en la store
  const { isLoading, page, pokemons = [] } = useSelector( ( state => state.pokemons ) );

    /*
    Cuando el componente es
    montado una vez, y 
    solo quiero ejecutarlo 1 
    sola vez.
  */
  useEffect(() => {
  
    //pedimos los pokemones
    dispatch( getPokemons() );

  }, [])

  
  

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />

        <span>Loading:{ isLoading ? 'True': 'False' }</span>

        <ul>
          {/*Obtenemos los pokemones del arreglo */}
            {
              pokemons.map( pokemon => (
                <li 
                  key={pokemon.name}
                >
                  {pokemon.name}
                </li>
              ))
            }
        </ul>

        <h2>Pagina: { page }</h2>

        {/*Boton para pedir mas pokemones*/}
        <button          
          onClick={ () => dispatch( getPokemons( page ) ) }
          disabled={ isLoading }
        > 
          Next
        </button>
    </>
  )
}
