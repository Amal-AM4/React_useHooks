import useRandomColor from "./useRandomColor";

// import { Button, ButtonLabel } from './Components/Button.style'

function App() {

  const { color, changeColor } = useRandomColor()


  return (
    <div className="App" style={{width: "100vw", height: "100vh", backgroundColor: "#" + color}}>

      <button onClick={changeColor}>
        Change Color
      </button>

    </div>
  );
}

export default App;
