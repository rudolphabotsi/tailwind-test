import React from 'react';
import { AiOutlineDribbble, AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";

function UserProfile() {
    return (
        <div className="bg-white dark:bg-slate-700 w-80 flex flex-col items-center p-5 rounded-3xl shadow-md " >
            <img src="https://i.pravatar.cc/300" alt="profile" className="shadow-lg rounded-full w-24 h-24" />
            <h2 className="text-slate-900 dark:text-white font-bold text-xl my-3" >John Doe</h2>
            <p className="text-center dark:text-white text-gray-700 " >Ea ad pariatur officia est enim qui veniam laboris excepteur mollit tempor anim.</p>
            <div className="mt-5 flex justify-between w-40" >
                <AiOutlineInstagram className="cursor-pointer bg-blue-100 rounded-full p-1.5 text-blue-600" size={35} />
                <AiOutlineDribbble className="cursor-pointer bg-blue-100 rounded-full p-1.5 text-blue-600" size={35} />
                <FiFacebook className="cursor-pointer bg-blue-100 rounded-full p-2 text-blue-600" size={35} />
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 mt-5 mb-5 font-bold tracking-wider shadow-xl shadow-blue-50 dark:shadow-md rounded-xl w-52" >
                FollowFacebook
            </button>
        </div>
    )
}

export default UserProfile;
