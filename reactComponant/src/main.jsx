import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import SignInOne from './Componants/SignInOne.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ChangeColor from './Componants/ChangeColor.jsx'
import PasswordGenerator from './Componants/PasswordGenerator.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignInOne />
  </React.StrictMode>,
)
