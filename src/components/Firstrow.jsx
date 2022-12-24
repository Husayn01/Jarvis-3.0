import React from "react";

function Firstrow(params) {
    return  <div className="row first-row">
    <div className='container-fluid '>
    <nav className="navbar navbar-expand-sm navbar-light">
          <a class="navbar-brand" href="#">JARVIS</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Models</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Community</a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
    <div className='col-sm-4 left'>
   <h1>JARVIS 3.0</h1>
      <h4>The Next Generation Humanoid Robot</h4>
      <p>Meet Jarvis 3.0, The next Generation artificial intelligence Humanoid Robot
        developed by Optimus AI Technologies
      </p>
      <button className='btn btn-light'>LEARN MORE</button>
      </div>
      <div className='col-sm-8 right'>
    <img className='img-fluid jarvis-1' src="images/pngwing.com-3.png" alt="jarvis" />
    </div>
   </div>
}

export default Firstrow;