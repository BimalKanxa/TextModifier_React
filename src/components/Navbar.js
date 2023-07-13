import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
// import {Link} from 'react-router-dom'

export default function Navbar(props) {
  
  const [color, setcolor] = useState('white');

  const colorSelection = (event) => {
    
    setcolor(event.target.value)
}

  const selectColor = (event) =>{
      const colorvalue  = event.target.value;
      setcolor(colorvalue);
      document.body.style.backgroundColor = colorvalue;
  }
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">{props.title}</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <div className="d-flex mx-2 my-2">
          <input type="color" name="colorselect" id="colorselect" onChange={colorSelection} value={color} onClick={selectColor} style={{cursor:'pointer'}}/>
        </div>

        {/* <li className="nav-item">
          <a className="nav-link" href="/about">{props.aboutText}</a>
        </li> */}
      </ul>
     

<label className="form-check-label text-dark mx-3 my-2"htmlFor="flexSwitchCheckDefault">Light Mode</label>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label text-light"htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>


    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

         //default props works when props are not passed in Navbar in app.js

// Navbar.defaultProps = {
//     title: "Your Title Here",
//     aboutText: "About Us Here"
// }

//props are read only and cannot be changed