import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [modeName, setModeName] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const ChangeNav = () => {
    if (mode === "dark") {
      setMode("light");
      setModeName("Red Mode");
      document.body.style.background = "rgb(232, 232, 232)";
      showAlert("Light Mode Has Been Changed", "success");
      document.title = "Text Utils - Light Mode";
    } else {
      setMode("dark");
      setModeName("Light Mode");
      document.body.style.background = "#370303";
      showAlert("Red Mode Has Been Changed", "success");
      document.title = "Text Utils - Red Mode";
    }
  };

  return (
    <div>
      <Navbar mode={mode} modeName={modeName} click={ChangeNav} />
      <Alert alert={alert} />
      <TextForm
        title="Enter Your Message For Us! - Converting the Text - Manipulate the Text - Download of Updated the Text"
        titlesecond="Counting the Characters"
        words="Input Whatever On Here!"
        mode={mode}
        alert={showAlert}
      />
    </div>
  );
}

export default App;
