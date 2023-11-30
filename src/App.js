import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import Header from "./components/Header"
import logo from './img/logo.jpg'
import PersonalPage from "./components/PersonalPage"
import BaristaPage from "./components/BaristaPage"
import RegForm from "./components/RegForm"
import LogForm from "./components/LogForm"

class App extends React.Component {
    render() {
        return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegForm />} />
                <Route path="/login" element={<LogForm />} />
                <Route path="/personal_page" element={<PersonalPage />} />
                <Route path="/barista_page" element={<BaristaPage />} />
            </Routes>
        </Router>
        );
    };
};

export default App