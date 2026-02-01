import React from "react";
import { fetchPhotos, fetchVideos } from "./api/mediaApi";
import SearchBar from "./Components/SearchBar";

const App = () => {


  return (
    <>  
    <div  className="h-screen text-white bg-gray-950" > 
<SearchBar/>
       
    </div>

    </>
  )
};

export default App;
