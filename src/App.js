import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Alert from "./Component/Alert";
import TextForm from "./Component/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
    }
  };
  return (
    <>
      {/* <Router>
        <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Route exact path="/about">
        <About />
        </Route>
        <Route exact path="/">
        <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
        </Route>
        </div>
      </Router> */}
      <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <About />
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyse below"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
