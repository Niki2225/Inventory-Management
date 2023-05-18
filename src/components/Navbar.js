import React from 'react'
import "./Navbar.css"
import {BsFillFileEarmarkFill,BsEnvelopeFill,BsGearFill,BsPersonFill,BsFillHouseDoorFill} from "react-icons/bs";


export default function Navbar() {
  return (

    <div className="navbarItem">
          
          <nav className="navbar">
            <h1 className="appName">Technovate</h1>
            <ul className="Menu">
               <li className="MenuItem">
                    <a className="Item" href="#"><BsFillHouseDoorFill/>
                        Home
                    </a>
                </li>
                <li className="MenuItem">
                    <a className="Item" href="#"><BsFillFileEarmarkFill/>
                        About
                    </a>
                </li>
                <li className="MenuItem">
                    <a className="Item" href="#"><BsGearFill/>
                        Service
                    </a>
                </li>
                <li className="MenuItem">
                    <a className="Item" href="#"><BsEnvelopeFill/>
                        Contact
                    </a>
                </li>
                <li className="MenuItem">
                    <a className="Item" href="#"><BsPersonFill/>
                         Sign up
                    </a>
              </li>
              </ul>
          </nav>
          
    </div>
    
  )
}