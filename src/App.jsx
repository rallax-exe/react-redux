import { useDispatch, useSelector } from 'react-redux';
import reactLogo from './assets/react.svg';
import './App.css';
import { increment, incrementBy, decrement } from './store/slices/counter';


/*
  Esto es nuestro functional component 
  que renderiza los botones para 
  el counter, cuando se oprimer los
  botones se disparan las acciones.
*/
function App() {
  
  /*
    Redux selecciona que estado usaremos, 
    en este caso usaremos el estado 'counter'
    que esta en nuestro store.
  */
  const { counter } = useSelector( (state => state.counter ) );

  /*
    El useDispatch
    Despacha/ejecuta las acciones
    que estan en el reducer.
    Redux ya sabe cual reducer
    vamos a usar porque se lo 
    dijimos al seleccionar nuestro 
    estado del store.
  */
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={ reactLogo } className="App-logo" alt="logo" />
        <p>count is: { counter }</p>
        <p>
          <button type="button" onClick={ () => dispatch( increment() ) }>
            Increment
          </button>

          <button type="button" onClick={ () => dispatch( decrement() ) }>
            Decrement
          </button>

          {/*
            En este boton le mandamos props
            al reducer que incrementa por 2.
          */}
          <button type="button" onClick={ () => dispatch( incrementBy(2) ) }>
            Increment by 2
          </button>

        </p>
      </header>
    </div>
  )
}

export default App
