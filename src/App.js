import "./App.css";
// import Aboutus from "./Components/Aboutus";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from 'react'
import Aboutus from "./Components/Aboutus";
import Alert from "./Components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 2000);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0c244e';
      showAlert(': Dark mode is Enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(': Light mode is Enabled', 'success');
    }
    
  }
  return (
    <>
      <Router>
        <Navbar Title="TextUtils" aboutText="AboutTextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
          <Switch>
              <Route exact path="/Aboutus">
                <Aboutus/>
              </Route>
              <Route exact path="/">
                <Textform heading="Enter the Text to analyze below" mode={mode}/>
              </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
