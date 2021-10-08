import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar Title="TextUtils" aboutText="AboutTextUtils"/>
      <Textform heading="Enter the Text to analyze below"/>
    </>
  );
}

export default App;
