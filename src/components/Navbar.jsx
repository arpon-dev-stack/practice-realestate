import { assets } from '../assets/assets'
import { useState, useEffect } from 'react'

function Navbar() {

    const [showMobMenu, setShowMobMenu] = useState(false);

    // useEffect(() => {
    //     if (setShowMobMenu) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'auto';
    //     }
    //     return () => {
    //         document.body.style.overflow = 'auto';
    //     }
    // }, [showMobMenu])

    return (
        // the creator set top-0 left-0
        <div className="absolute inset-0 w-full z-10">
            <div className='mx-auto flex justify-between items-center container px-6 py-4 md:px-20 lg:px-32 bg-transparent'>
                <img src={assets.logo} alt="" />
                <ul className='hidden md:flex gap-7 text-white'>
                    <a href="" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="" className='cursor-pointer hover:text-gray-400'>Projects</a>
                    <a href="" className='cursor-pointer hover:text-gray-400'>Testimonils</a>
                </ul>
                <button className='hidden sm:block bg-white px-8 py-2 rounded-full'>Sing Up</button>
                <img src={assets.menu_icon} alt="menu_icon" className='md:hidden w-7' onClick={() => setShowMobMenu(!showMobMenu)} />
            </div>
            <div className={`md:hidden ${showMobMenu ? 'fixed w-full' : 'hidden'} h-full right-0 top-0 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img src={assets.cross_icon} alt="logo" className='w-6' onClick={() => setShowMobMenu(!showMobMenu)} />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium'>
                    <a href="#Header" className='px-4 py-2 rounded-full inline-block' onClick={() => setShowMobMenu(!showMobMenu)}>Home</a>
                    <a href="#Header" className='px-4 py-2 rounded-full inline-block' onClick={() => setShowMobMenu(!showMobMenu)}>About</a>
                    <a href="#Header" className='px-4 py-2 rounded-full inline-block' onClick={() => setShowMobMenu(!showMobMenu)}>Projects</a>
                    <a href="#Header" className='px-4 py-2 rounded-full inline-block' onClick={() => setShowMobMenu(!showMobMenu)}>Testimonils</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar