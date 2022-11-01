import React from 'react'
import logo from "../assets/Rectangle 2.svg"

const Navbar=()=>{
  return (
    <nav className='navbar w-[80%] justify-items-start items-center mx-auto flex h-[5.6rem] text-[#666666]'>
        <img src={logo} alt="logo" className='h-[31px] w-[144px] relative mr-[6rem] cursor-pointer' />
        <ul className='flex items-center justify-end '>
            <li className='cursor-pointer m-[1.6rem] hover:text-[#405CD2] '>Products</li>
            <li className='cursor-pointer m-[1.6rem] hover:text-[#405CD2] '>Why mool</li>
            <li className='cursor-pointer m-[1.6rem] hover:text-[#405CD2] '>Pricing</li>
            <li className='cursor-pointer m-[1.6rem] hover:text-[#405CD2] '>Resources</li>
            <li className='cursor-pointer m-[1.6rem] hover:text-[#405CD2] '>Company</li>
        </ul>
        <div className='flex justify-items-end items-center absolute right-[10%]'>
            <button className='m-[1.6rem] text-[#405CD2] font-bold cursor-pointer'>Sign in</button>
            <button className='mx-[0.8rem] bg-[#405CD2] h-[48px] w-[184.62px] items-center text-[#E8ECFF] font-bold hover:bg-[#40D2AC] cursor-pointer'>Request for demo</button>
        </div>
    </nav>
  );
}
export default Navbar
