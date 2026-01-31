import React from "react";
import { fetchPhotos, fetchVideos } from "./api/mediaApi";

const App = () => {


  return (
    <>
      <div className="h-screen w-full bg-gray-950 text-white" >
        <h1>Hello</h1>
        <button onClick={async() => {

          const data= await fetchPhotos("car")
          console.log(data.results)
          
        }
        } > Get Photos </button> 

         <button onClick={async() => {

          const data= await fetchVideos("car")
          console.log(data.videos)
          
        }
        } > Get Videos </button>

      </div> </>
  )
};

export default App;
