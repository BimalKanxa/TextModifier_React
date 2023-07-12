
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert.js'

// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#341a1a"
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="Text Utils Web" aboutText="About Us" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}>  </Alert>
      
      <div className="container my-5">
          {/* <Routes> */}
          {/* <Route exact path="/" element={<Textform heading="Enter the text to analyze below :" mode={mode} />} /> */}

{/*     
          <Route exact path='/about' element={<About/>}>
            </Route>    */}

    <Textform heading="Enter the text to analyze below : " mode={mode}></Textform>

        
{/* </Routes> */}
      </div>
      {/* </Router> */}

    </>
  );
}

export default App;
