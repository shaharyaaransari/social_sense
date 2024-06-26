import React from "react";
import gradients from "./data";

function ThemeSelector({ setTheme }) {
    const { solids, linearGradients, radialGradients } = gradients;

    return (
        <div className="mt-4">
            <p className="font-medium mb-2">Solid</p>
            <div className="grid grid-cols-7 md:grid-cols-7 sm:grid-cols-2 gap-2">
                {solids.map((el) => (
                    <div
                        key={el.name}
                        className="border mr-4"
                        style={{
                            backgroundColor: el.color,
                            width: "50px",
                            height: "50px",
                            border: "0.1px solid gray",
                            cursor: "pointer", 
                        }}
                        onClick={() => setTheme({ color: el.color })}
                    ></div>
                ))}
            </div>
            <p className="font-medium mb-2 mt-4">Linear Gradients</p>
            <div className="grid grid-cols-7 md:grid-cols-7 sm:grid-cols-2 gap-2">
                {linearGradients.map((el) => (
                    <div
                        key={el.name}
                        className="border mr-4"
                        style={{
                            backgroundImage: `${el.gradient}`,
                            width: "50px",
                            height: "50px",
                            border: "0.1px solid gray",
                            cursor: "pointer", 
                        }}
                        onClick={() => setTheme({ gradient: el.gradient })}
                    ></div>
                ))}
            </div>

            <p className="font-medium mb-2 mt-4">Radial Gradients</p>
            <div className="grid grid-cols-7 md:grid-cols-7 sm:grid-cols-2 gap-2">
                {radialGradients.map((el) => (
                    <div
                        key={el.name}
                        className="border mr-4"
                        style={{
                            backgroundImage: `${el.gradient}`,
                            width: "50px",
                            height: "50px",
                            border: "0.1px solid gray",
                            cursor: "pointer",
                        }}
                        onClick={() => setTheme({ gradient: el.gradient })}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default ThemeSelector;
