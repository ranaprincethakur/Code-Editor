import "./App.css";
import { useState } from "react";
import CodeEditorWindow from "./components/CodeEditorWindow";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [language, setLanguage] = useState("html");
  const [theme, setTheme] = useState("vs-dark");

  //onChange for language select
  const handleLanguage = (value) => {
    setLanguage(value);
    console.log(value);
  };

  //onChange for theme select
  const handleTheme = (value) => {
    setTheme(value);
    console.log(value);
  };

  return (
    <div className="App">
      <Navbar handleLanguage={handleLanguage} handleTheme={handleTheme} />
      <CodeEditorWindow language={language} theme={theme} />
      <ToastContainer />
    </div>
  );
}

export default App;
