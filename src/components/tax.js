import React from 'react'
import chatuur from "../assets/chatuur.svg"

const Tax=()=>{
    return(
        <div>
            <div className="conatiner w-[75%] mx-auto mt-[6rem]">
                <div className='grid grid-cols-2 items-center justify-around gap-5'>
                    <div className='flex flex-col text-left items-start mx-auto'>
                            <img src={chatuur} alt="chatur" />
                    </div>
                    <div className='mx-auto flex flex-col items-start text-left'>
                        <h1 className='text-[2rem] text-[#333333] font-bold'>Your personal <span className='text-[#405CD2]'>Tax Advisor</span> to </h1>
                        <h1 className='text-[2rem] text-[#333333] font-bold'>save the day! ✨</h1>
                        <p className='text-[#666666] text-[0.875rem] text-justify w-[80%] mt-[2rem]'>Taxes can make the be really uncomfortable for the average employee. 
                            Chatur takes a little load off your back by making tax jargon-free and easy to understand. </p>
                        <ul className='text-[#666666] text-[0.875rem] text-justify mt-[2rem]'>
                            <li>- Takes care of all their tax queries</li>
                            <li>- Guides them so they don’t miss out on any benefit</li>
                            <li>- Educates them on how to save taxes </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Tax