import logo from './logo.svg';
import './App.scss';
import Slider from './Slider/Slider';
// import SliderClass from './Slider/SliderClass';
// import '../node_modules/tiny-slider/src/tiny-slider.scss'



function App() {



  return (
    <div className="App">

      <Slider />
      {/* <SliderClass /> */}

  

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>



    </div>
  );
}

export default App;
