import React from "react";
import Temp from "../Temp";

function Fourthrow() {

    return <div className="row fourth-row">

    <div className='col-sm-4 left'>

      <div className='container'>
          <img className='img-fluid' src={Temp[0].img} alt="" />
          <h3>{Temp[0].title}</h3>
          <p>{Temp[0].text}</p>
      </div>

      <div className='container'>
        <img className='img-fluid' src={Temp[1].img} alt="" />
        <h3>{Temp[1].title}</h3>
          <p>{Temp[1].text}</p>
      </div>

    </div>

    <div className='col-sm-4 middle'>

      <div className='container'>
        <img className='img-fluid' src={Temp[2].img} alt="" />
        <h3>{Temp[2].title}</h3>
          <p>{Temp[2].text}</p>
      </div>

      <div className='container'>
        <img className='img-fluid' src={Temp[3].img} alt="" />
        <h3>{Temp[3].title}</h3>
        <p>{Temp[3].text}</p>
      </div>

    </div>
    
    <div className='col-sm-4 right'>

      <div className='container'>
        <img className='img-fluid' src={Temp[4].img} alt="" />
        <h3>{Temp[4].title}</h3>
        <p>{Temp[4].text}</p>
      </div>

      <div className='container'>
          <img className='img-fluid' src={Temp[5].img} alt="" />
          <h3>{Temp[5].title}</h3>
          <p>{Temp[5].text}</p>
      </div>

    </div>

  </div>
}

export default Fourthrow;