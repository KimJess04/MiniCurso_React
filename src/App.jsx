//Jessica Olvera Gordillo
//VISTA PRINCIPAL

import './App.css' //importamos estilos
import Card from './components/Card'; //importamos la Card con sus componentes
import ShowHide from './components/ShowHide';
import animales from './data/animales'; //importamos el array

function App() {

  const animalesLista = animales.map((v) =>{
    return <Card title ={v.name}
    description={v.description} />;
  });

  return ( 
     <div className="App">
    <h1>Hola REACT</h1>
    <h2>Animales</h2>
    <div className="container">
      {animalesLista}

    </div>
    <h2><li>Jessica Olvera Gordillo</li></h2>
  </div>
 );  
}

export default App; 

/*
 return ( 
     <div className="App">
    <h1>Hola REACT</h1>
    <Card />
  </div>
*/