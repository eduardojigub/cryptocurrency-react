import { useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        console.log(response.data);
      }
    );
  }, []);
  return (
    <div className='App'>
      <header className='cryptoHeader'></header>
      <div classname='cryptoDisplay'></div>
    </div>
  );
}

export default App;
