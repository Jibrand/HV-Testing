import React from "react";

function PocSlider({ img }) {
  return (
    <div>
      <img
        className=" object-contain  rounded-lg "
        src={img}
      ></img>
    </div>
  );
}

export default PocSlider;
