import "./App.css";
import MuiButton from "./components/MuiButton";
import MuiTextField from "./components/MuiTextField";
import MuiTypo from "./components/MuiTypo";

function App() {
  return (
    <div className="App">
      <h2>MUI 5 Typography variants</h2>

      <MuiTypo />
      <h2>MUI 5 Button variants</h2>
      <MuiButton />
      <h2>MUI 5 TextField variants</h2>
      <MuiTextField />
    </div>
  );
}

export default App;
