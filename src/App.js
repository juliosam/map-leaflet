import Fetcher from "./components/fetcher";
import MapWindow from "./components/mapWindow";
import { useState } from "react";

function App() {

  const [info, setInfo] = useState([])

  return (
    <div className="App">
      <MapWindow info={info}/>
      <Fetcher setInfo={setInfo}/>
    </div>
  );
}

export default App;
