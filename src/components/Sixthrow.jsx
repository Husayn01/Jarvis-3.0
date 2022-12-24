import React from "react";

function Sixthrow() {
    const year = new Date().getFullYear();

    return  <div className="sixth-row row-title">
    <p>Copyright Jarvis 3.0 <span>{year}</span></p>
  </div>
}

export default Sixthrow;