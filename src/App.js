import logo from './logo.svg';
import './App.css';


function App() {
  
  return (
    <div className="container">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className = "title">Cindy Ravellously</h1>
        
      </header>
      <body className= "body">
        <div>
          <img id = "imagenCindy" class="Perfil" src="/Ravell.jpg" alt="Cindy" height="500px"/>
          
          <div id="resume">
          <h2 id="resume">Mechatronic engineer</h2>
          <p>Projects in which I participated: Siglo XXI, Hospital Eme Red, Crío, Fraccionamiento Punta Esmeralda, Centro de Salud con Servicios amppos Progreso</p>

          <div class = "txt">
            <p>Social Responsibipty</p>
            <p>Respectful and professional person</p>
            <p>Perseverance to understand new topics and develop new skills </p>
            <p>Computer programming</p>
            <p>Automation Systems</p>
            <p>Mechanics</p>
            <p>Empathy</p>
            <p>Teamwork</p>
          </div>


          
          </div>
          

        </div>
      </body>
    </div>
  );
}

export default App;
