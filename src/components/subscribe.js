import React from 'react'

const Subscribe=()=>{
    return (
        <div className='h-[365px] w-full mx-auto bg-black text-white'>
            <div className="container w-full mx-auto text-center items-center justify-center p-[3rem] flex flex-col">
                <h1 className='text-[2rem] font-medium'>Subscribe to know the</h1>
                <h1 className='text-[2rem] font-medium'>complete <span className='text-[#40D2AC] font-bold'>Mool story <span className='italic text-[#E8E9EE] font-medium'>!!</span></span></h1>
                <input type="text" className='w-[400px] py-[1rem] px-[1.25rem] bg-[#0A0E1C] text-[#E8E9EE] border-[0.1rem] rounded-md border-[#E8E9EE] my-[2rem]'placeholder='Enter your Email' />
                <button className='bg-[#40D2AC] text-[#0A0E1C] font-bold py-[0.75rem] px-[2rem] text-center'>Subscribe Now</button>
            </div>

        </div>
    );
}
export default Subscribe