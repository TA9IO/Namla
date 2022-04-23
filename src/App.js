import { Clusters, Edge, Devices } from "./Routes";
import { Home, Config, Analytics, Admin, MainLoginPage, Page404 } from "./Pages";
import { SideBar, NavBar } from "./Components";
import { SideBarData } from "./Components/SideBar/SideBarData";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className='app'>
      <Router>
        <NavBar></NavBar>

        <div className='routes__container'>
          <Routes>
          
            <Route path='/' element={<MainLoginPage />}/>
            <Route path='/Config' element={<Config />}/>
            <Route path='/Analytics' element={<Analytics />}/>
{/* /* A nested route. */ }
            <Route path='/Home' element={<Home />}>
              <Route path='Clusters' element={<Clusters />} />
              <Route path='Edge' element={<Edge />} />
              <Route path='Devices' element={<Devices />} />
            </Route>

            <Route path='*' element={<Page404 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
