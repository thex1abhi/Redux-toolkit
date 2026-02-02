import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CollectionPage from "./pages/CollectionPage";


const App = () => {


  return (
    <>
      <div className=" mih-h-[100vh] text-white bg-gray-950" > 
        <Routes> 
          <Route  path='/' element={ <Homepage/>} >  </Route> 
           <Route path='/collection' element={ <CollectionPage/>} >  </Route>
        </Routes>

        
      </div>

    </>
  )
};

export default App;
