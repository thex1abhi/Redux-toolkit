
import React, { useState } from "react";

const SearchBar = () => {

    const [text, settext] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(text);
        settext('')
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
                      onChange={(e)=>{
                        settext(e.target.value);
                      }} 
                      className="border-2 px-4 py-2 text-xl rounded outline-none " type="text" placeholder="Search Anything... " />
                    <button className="active:scale-95  cursor-pointer   border-2 px-4 py-2 text-xl rounded outline-none " >Search</button>
                </form>
            </div >
        </>
    )
};

export default SearchBar;
