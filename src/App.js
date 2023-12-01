import React from "react";
import { useRoutes} from 'react-router-dom'
import routes from "./routes.js";
import TopBar from "./Components/TopBar/TopBar.js";
import SideBar from "./Components/SideBar/SideBar.js";
import './App.css'


function App() {
const router = useRoutes(routes)

return (
<> 
<TopBar/>
<div className="Container">
  <SideBar/> 
  {router}
</div>


</>
  );
}

export default App;
