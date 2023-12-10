import React, { useState } from 'react' //какой то { useState }
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from "./pages/signupPage/signup.jsx"
import Leaves from './components/leaves.jsx'

function App() {
    return (
    <div>
        <div>
            <Leaves />
            <Signup />
        </div>
    </div>
    )
}

export default App
