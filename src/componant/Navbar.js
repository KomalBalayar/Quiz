import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const handlequiz =()=>{
        window.location.replace("http://localhost:3006/componant/Quiz");
    }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active mx-3">
      <button type="button" class="btn btn-light">General</button>
      </li>
      <li class="nav-item mx-3">
      <NavLink className="nav-link" to="/Quiz">Quiz</NavLink>
      </li>
     
      <li class="nav-item mx-3">
      <button type="button" onClick={handlequiz} class="btn btn-light">Exam</button>
      </li>
      <li class="nav-item mx-3">
      <button type="button" onClick={handlequiz} class="btn btn-light">Assingment</button>
      </li>
      <li class="nav-item mx-3">
      <NavLink className="nav-link" to="/Box">Fees</NavLink>
      </li>

     
    </ul>
    
  </div>
</nav>
<div className='hh'>
<h6>Total Quizzes: 245 Attempted:120  Unattempted: 125 Passed: 25 Failed: 15  </h6>

</div>
    </div>
  )
}
