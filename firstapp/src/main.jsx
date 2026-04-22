import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Home from "./components/pages/Home"



let root = document.getElementById("root")

createRoot(root).render(
<Home/>

)

//createRoot(document.getElementById('root')).render(
 // <StrictMode>
  //  <App />
  //</StrictMode>,
//)
