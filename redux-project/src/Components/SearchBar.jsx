import  {useState }  from "react";
import {useDispatch} from "react-redux"
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {

   const [text , setText ] = useState("");
   
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setQuery(text))
        setText('')
    }

    return (
        <>
            <div className=" text-white bg-gray-900"  >

                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className="flex  gap-5 p-10" >
                    <input
                        required
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                        className="border-2 px-4 py-2 text-xl rounded outline-none " type="text" placeholder="Search Anything... " />
                    <button className="active:scale-95  cursor-pointer   border-2 px-4 py-2 text-xl rounded outline-none " >Search</button>
                </form>
            </div >
        </>
    )
};

export default SearchBar;
