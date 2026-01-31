import React from "react";
import { fetchPhotos } from "./api/mediaApi";

const App = () => {


  return (
    <>
      <div className="h-screen w-full bg-gray-950 text-white" >
        <h1>Hello</h1>
        <button onClick={async() => {

          const data= await fetchPhotos("car")
          console.log(data)
          
        }
        } > Get Photos </button>
      </div> </>
  )
};

export default App;
