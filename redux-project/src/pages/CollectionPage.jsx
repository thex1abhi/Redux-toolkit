import { useDispatch, useSelector } from "react-redux";
import Collectioncard from "../Components/collectioncard";
import { clearCollection, clearedToast } from "../redux/features/collectionSlice";


const CollectionPage = () => {

const dispatch=useDispatch();

  const collection = useSelector(state => state.collection.items) 

  const clearMyCollection=()=>{
    dispatch(clearCollection())
    dispatch(clearedToast())
  }

  return (
    <>
      <div className="overflow-auto px-10 py-6" >
        <div className="flex justify-between" >
          <h2 className="text-2xl  font-semibold " > 
            {collection.length>0?"My Collection ":"Collection is empty"}
            </h2> 
          <button className="bg-red-600  px-5 active:scale-95   py-2 font-medium text-base rounded cursor-pointer"  
          onClick={()=>{
            clearMyCollection()
          }}
           > Clear Collection </button>
        </div>
        <div className="flex  h-[80%] mb-6  w-full flex-wrap gap-2 rounded   " >

          {collection.map((item, idx) => {
            return <div key={idx} >
              < Collectioncard item={item} /> 
            </div>
          })}
        </div>
      </div>
    </>
  )
};

export default CollectionPage;
