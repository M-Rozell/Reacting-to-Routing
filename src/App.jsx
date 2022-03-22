import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import Films from "./pages/Films";
import People from "./pages/People";
import Vehicles from './pages/Vehicles';
import Navbar from './components/Navbar';
import FilmDetails from "./pages/FilmDetails";
import PilotDetails from './pages/PilotDetails';
import PeopleDetails from './pages/PeopleDetails';
import VehicleDetails from './pages/VehicleDetails';

const App = () => {

    return (

        <BrowserRouter>
            <Navbar />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/Films" element={<Films />} />
                <Route path="/People" element={<People />} />
                <Route path="/Vehicles" element={<Vehicles />} />
                <Route path="/Films/:filmid" element={<FilmDetails />} />
                <Route path="/People/:peopleid" element={<PeopleDetails />} />
                <Route path="/Vehicles/:vehicleid" element={<VehicleDetails />} />
                <Route path="/PeopleDetails" element={<PeopleDetails />} />
                <Route path="/VehicleDetails" element={<VehicleDetails />} />
                <Route path="/PilotDetails/:peopleid" element={<PilotDetails />} />
            
            </Routes>
        </BrowserRouter>
    )
}

export default App;











