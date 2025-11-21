import { assets } from '../assets/assets'

function Navbar() {
    return (
        // the creator set top-0 left-0
        <div className="absolute inset-0 w-full z-10">
            <div className='mx-auto flex justify-between items-center container px-6 py-4 md:px-20 lg:px-32 bg-transparent'>
                <img src={assets.logo} alt="" />
                <ul>
                    <a href="" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="" className='cursor-pointer hover:text-gray-400'>Projects</a>
                    <a href="" className='cursor-pointer hover:text-gray-400'>Testimonils</a>
                </ul>
                <button className='hidden sm:block bg-white px-8 py-2 rounded-full'>Sing Up</button>
            </div>
        </div>
    )
}

export default Navbar