import React from 'react'
import graph from "../assets/graph.svg"
import dash from "../assets/dash.svg"

const Stats=()=>{
    return(
        <div className='h-[637px] w-full bg-black mx-auto mt-[6rem] text-white'>
            <div className='container w-[75%] mx-auto'>
                <div className='grid grid-cols-2 items-center justify-around gap-5'>
                    <div className='flex flex-col text-left items-start mt-[6rem]'>
                        <h1 className='text-[2.625rem] font-bold'>Employees benefit with</h1>
                        <h1 className='text-[2.625rem] font-bold'>upto <span className='text-[#40D2AC]'>10% more </span>salary in</h1>
                        <h1 className='text-[2.625rem] font-bold'>hand for the <span className='text-[#40D2AC]'> same Cost</span></h1>
                        <h1 className='text-[2.625rem] font-bold text-[#40D2AC]'>to Company</h1>
                        <img src={dash} alt="dash" className='mb-[2rem]'/>
                        <ul className='mt-[2rem] text-[#F7F7FA] text-[0.825rem]'>
                            <li><p className='w-[85%]'>*The comparison is made taking into account the % structure prevalent in most of the companies.</p></li>
                            <li><p className='w-[85%] mt-[1rem]'>*For calculation of TDS exemptions and deductions are considered same for both the structures.</p></li>
                        </ul>
                    </div>
                    <div className='mx-auto flex flex-col mt-[8rem]'>
                        <img src={graph} alt="graph" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats