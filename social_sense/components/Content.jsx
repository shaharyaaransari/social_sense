
import React from "react";



const Content = ({theme}) => {

  return (
    <div  style={{width:"60%", marginRight:"10px"}}>
      <div  className={`mt-6 border-slate-400 border-2 p-2 rounded-md`}  style={{
      backgroundColor: theme.color ? theme.color : 'transparent',
      backgroundImage: theme.gradient ? theme.gradient : 'none',
    // add other styles as needed
}}> 
        <div className="relative border-dashed p-1 border-2 border-blue-300 rounded-md">
          <img
            src={"https://i.pinimg.com/originals/d8/39/74/d839742a057e1d111d0373fa614de906.jpg"}
            alt="Background img"
            width={500}
            height={300}
            objectFit="cover"
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-4 transform translate-y-1/2 rounded-full border-dashed border-2 border-blue-300">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.2aNVckrAacbhkT_pyXjauAHaKQ&pid=Api&P=0&h=180"
              alt="Profile img"
              className="w-24 h-24 rounded-full border-4 border-white"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="pt-12 pb-6 px-4 text-center">
          <h1 className="text-2xl font-semibold">Mason Parker</h1>
          <p className="text-gray-600">Graphics & UI/UX Designer</p>
          <p className="text-gray-600">Denver, United States</p>
          <p className="mt-4 text-gray-700 text-xs border-dashed border-2 border-blue-300">
            I am a visionary Graphics and UI/UX Designer, seamlessly blending
            artistic flair with technical expertise. With a degree in Graphic
            Design, I consistently deliver visually stunning and user-centric
            solutions, leaving an indelible mark on the digital landscape. As a
            trusted collaborator, I am dedicated to crafting pixel-perfect UIs
            and captivating graphics that elevate user experiences.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              View Resume
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;