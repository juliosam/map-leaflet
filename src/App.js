import Fetcher from "./components/fetcher";
import MapWindow from "./components/mapWindow";
import { useState } from "react";

function App() {

  const [info, setInfo] = useState([])

  return (
    <div className="App">
      <h1>This is App</h1>
      <MapWindow info={info}/>
      <Fetcher setInfo={setInfo}/>
    </div>
  );
}

export default App;
