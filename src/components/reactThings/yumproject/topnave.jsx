import React from 'react';
import {AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";

function Topnave(props) {
    return (
        <>
        <div className="max-w-[1520] mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
                <div className="cursor-pointer">
                    <AiOutlineMenu size={25}/>
                    
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">Yum
                <span>Eats</span></h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-orange-700 text-white rounded-full p-2 text-bold ">Free</p>
                    <p className={" p-2 text-bold"}>Delivery</p>
                </div>
            </div>
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
                <AiOutlineSearch size={25}/>
                <input type="text" className={"bg-transparent p-2 w-full focus:outline-none"} placeholder={"Search Meal"}/>
            </div>
        </div>


        </>
    );
}

export default Topnave;