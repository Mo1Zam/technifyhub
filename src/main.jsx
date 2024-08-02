import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/nav.jsx'
import AboutUs from "./components/aboutus.jsx";
import Visitor from './components/visitor.jsx'
import Explore from './components/explore.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <AboutUs />
    <Visitor />
    <Explore />
  </React.StrictMode>,
)
