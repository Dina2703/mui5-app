import "./App.css";
import MuiButton from "./components/MuiButton";
import MuiCheckBox from "./components/MuiCheckBox";
import MuiRadioBtn from "./components/MuiRadioBtn";
import MuiSelect from "./components/MuiSelect";
import MultipleSelect from "./components/MuiSelectMulti";
import MuiSelectMulti2 from "./components/MuiSelectMulti2";
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
      <h2>MUI 5 Select</h2>
      <MuiSelect />
      <h2>MUI 5 Multiple select with MUI Select component, Mapping</h2>
      <MultipleSelect />
      <h2>MUI 5 Multiple select with TextField component</h2>
      <MuiSelectMulti2 />
      <h2>MUI 5 Radio Button examples</h2>
      <MuiRadioBtn />
      <h2>MUI 5 Checkbox examples</h2>
      <MuiCheckBox />
    </div>
  );
}

export default App;
