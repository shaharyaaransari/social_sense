import React from "react";
import gradients from "./data";

function ThemeSelector() {
  const { solids, linearGradients, radialGradients } = gradients;
  console.log(solids);
  return (
    <div className="mt-4">
      <p className="font-medium mb-2">Solid</p>
      <div className="grid grid-cols-7 gap-2 ">
        {solids.map((el) => {
          return (
            <div
              key={el.name}
              className=" border  mr-4"
              style={{
                backgroundColor: el.color,
                width: "50px",
                height: "50px",
                border: "0.1px solid gray",
              }}
            ></div>
          );
        })}
      </div>
      <p className="font-medium mb-2 mt-4">Linear Gradients</p>
      <div className="grid grid-cols-7 gap-2 ">
        {linearGradients.map((el) => {
          return (
            <div
              key={el.name}
              className=" border  mr-4"
              style={{
                backgroundImage: `${el.gradient}`,
                width: "50px",
                height: "50px",
                border: "0.1px solid gray",
               
              }}
            ></div>
          );
        })}
      </div>

      <p className="font-medium mb-2 mt-4">Radical Gradients</p>
      <div className="grid grid-cols-7 gap-2 ">
        {radialGradients.map((el) => {
          return (
            <div
              key={el.name}
              className=" border  mr-4"
              style={{
                backgroundImage: `${el.gradient}`,
                width: "50px",
                height: "50px",
                border: "0.1px solid gray",
               
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ThemeSelector;
