import { BrowserRouter as Router,Routes, Route } from "react-router-dom"; 
import './styles/styles.css'
import "./styles/configrator.css";
import './styles/index.css'
import Header from './components/Header'
import { App as Canvas } from './threejs/Canvas';
import { Overlay } from "./components/Overlay";
import Configrator from "./components/Configrator";
import { useLocation } from "react-router-dom";
import Shop from "./pages/Shop";
import { useEffect, useState } from "react";
let App = ()=>{
    let location = useLocation()
    let [currentLocation,setCurrentLocation] = useState(location.pathname)
    useEffect(()=>{
            setCurrentLocation(location.pathname)
    },[location])
    return(
        <>
        <Header/>
         <Header/>
         <Canvas location={currentLocation} />
             <Routes>
                <Route path="/" element={<Overlay  />}/>
                <Route path="/config" element={<Configrator />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </>
       
    )
}

export default App