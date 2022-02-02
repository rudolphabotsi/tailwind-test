import React from 'react';

function Morning() {
    return (
        <div className='bg-gradient-to-tl from-blue-900 to-blue-600 w-80 flex flex-col p-5 rounded-3xl shadow-md '>
            <p className='text-white font-bold text-2xl mb-2' >Good Morning!</p>
            <p className='text-white font-semibold' >Ullamco eiusmod id qui esse amet tempor occaecat.Nostrud proident sit officia fugiat et velit sint do officia magna.</p>

            <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 mt-5 mb-1 font-bold tracking-wider w-36 rounded-full self-end shadow-xl " >
                Get Started
            </button>
        </div>
    )
}

export default Morning;
