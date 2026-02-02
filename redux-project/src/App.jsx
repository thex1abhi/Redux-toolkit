import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CollectionPage from "./pages/CollectionPage";
import Navbar from "./Components/Navbar";
  import { ToastContainer } from 'react-toastify';

const App = () => {


  return (
    <>
      <div className="min-h-screen  text-white bg-gray-950" >  
           
         <Navbar/> 
    
        <Routes> 
          <Route  path='/' element={ <Homepage/>} >  </Route> 
           <Route path='/collection' element={ <CollectionPage/>} >  </Route>
        </Routes>

        <ToastContainer  autoClose={1000} />
      </div>

    </>
  )
};

export default App;
