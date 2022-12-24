import React from "react";

function Secondrow() {
    return <div className="row second-row">
    <div className='col-sm-6 left'>
      <h1>JARVIS 3.0</h1>
      <h4>The Next Generation Humanoid Robot</h4>
      <p>Meet Jarvis 3.0, The next Generation artificial intelligence Humanoid Robot
        developed by Optimus AI Technologies
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
       in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <button className='btn btn-light'>LEARN MORE</button>
    </div>

    <div className='col-sm-6 right'>
    <img className="img-fluid jarvis-2" src="images/pngwing.com-2.png" alt="Jarvis" />
    </div>
    </div>
}

export default Secondrow;