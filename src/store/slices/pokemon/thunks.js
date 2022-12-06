import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

/*
    Thunks
    Una accion que tiene
    un codigo asincrono
    que cuando se resulve
    dispara otra accion.
*/

export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        //Iniciamos el loading en true
        dispatch( startLoadingPokemons() );

        //To Do: realizar peticion HTTP
        /*
        Forma tradicional de mandar solicitud a API
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
            const data = await resp.json();
        */

        //Solicitud API con AXIOS
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        //Guardamos los pokemones
        dispatch( setPokemons(
            {
                pokemons: data.results, 
                page: page + 1
            }
        ));
    }
};
