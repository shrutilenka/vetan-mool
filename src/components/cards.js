import React from 'react'
import colon from "../assets/colon.svg"
import arrow from "../assets/arrow.svg"
import key from "../assets/key'.svg"

const Card=()=>{
    // let box=document.querySelector('.card-container');
    // const btnprev=()=>{
    //     let width=box.clientWidth;
    //     box.scrollLeft = box.scrollLeft-width;

    // }
    // const btnnext=()=>{
    //     let width=box.clientWidth;
    //     box.scrollLeft = box.scrollLeft+ width;
        
    // }
    return(
        <div className=' bg-[#F2F3F9] w-[100%] h-[45rem] mt-[6rem]'>
            <div className='py-[4rem] mx-auto w-full'>
                <h1 className='text-[2rem] font-bold text-[#989DB1]'>Featured case studies</h1>
                <p className='text-[1rem] font-bold text-[#45B29D]'>Blogs curated for you</p>
            </div>
            <div className='card-container w-[75%] mx-auto'>
               <div className='card flex flex-nowrap flex-shrink-0 mx-auto flex-start container space-x-[4rem] min-[2560px]:space-x-[2rem] overflow-hidden'>
                <div className='min-w-[23rem] h-[25rem] bg-[#ffffff] border-solid border-2 border-[#C7C9D0] text-left container'>
                    <div className='relative'>
                        <img src={colon} alt="" className=''/>
                        <div className='absolute flex flex-col'>
                            <p className='z-20 text-[0.875rem] text-justify px-[2rem]'>A lot of our payroll related activity which we used to do manually on spreadsheets was automated by Mool Vetan. 
                             Their end-to-end automations saved us from so much headache in this last quarter.</p>
                            <div className='flex flex-row items-center space-x-[1rem] px-[2rem] mx-auto py-[2rem]'>
                                <h1 className='text-[3rem] font-bold text-[#40D2AC]'>10%</h1>
                                <h1 className='w-[60%] font-bold'>Increase in employees' inhand</h1>
                            </div>
                            <div className='flex flex-row items-center space-x-[1rem] px-[2rem] '>
                                <h1 className='font-bold text-[#405CD2]'>Read the case study</h1>
                                <img src={arrow} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='min-w-[23rem] h-[25rem] bg-[#ffffff] border-solid border-2 border-[#C7C9D0] text-left container'>
                    <div className='relative'>
                        <img src={colon} alt="" className=''/>
                        <div className='absolute flex flex-col'>
                            <p className='z-20 text-[0.875rem] text-justify px-[2rem]'>A lot of our payroll related activity which we used to do manually on spreadsheets was automated by Mool Vetan. 
                             Their end-to-end automations saved us from so much headache in this last quarter.</p>
                            <div className='flex flex-row items-center space-x-[1rem] px-[2rem] mx-auto py-[2rem]'>
                                <h1 className='text-[3rem] font-bold text-[#40D2AC]'>10%</h1>
                                <h1 className='w-[60%]  font-bold'>Increase in employees' inhand</h1>
                            </div>
                            <div className='flex flex-row items-center space-x-[1rem] px-[2rem] '>
                                <h1 className='font-bold text-[#405CD2]'>Read the case study</h1>
                                <img src={arrow} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='min-w-[23rem] h-[25rem] bg-[#ffffff] border-solid border-2 border-[#C7C9D0] text-left container'>
                    <div className='relative'>
                        <img src={colon} alt="" className=''/>
                        <div className='absolute flex flex-col'>
                            <p className='z-20 text-[0.875rem] text-justify px-[2rem]'>A lot of our payroll related activity which we used to do manually on spreadsheets was automated by Mool Vetan. 
                             Their end-to-end automations saved us from so much headache in this last quarter.</p>
                            <div className='flex flex-row items-center space-x-[1rem] px-[2rem] mx-auto py-[2rem]'>
                                <h1 className='text-[3rem] font-bold text-[#40D2AC]'>10%</h1>
                                <h1 className='w-[60%]  font-bold'>Increase in employees' inhand</h1>
                            </div>
                            <div className='flex flex-row items-center space-x-[1rem] px-[2rem] '>
                                <h1 className='font-bold text-[#405CD2]'>Read the case study</h1>
                                <img src={arrow} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='min-w-[23rem] h-[25rem] bg-[#ffffff] border-solid border-2 border-[#C7C9D0] text-left container'>
                    <div className='relative'>
                        <img src={colon} alt="" className=''/>
                        <div className='absolute flex flex-col'>
                            <p className='z-20 text-[0.875rem] text-justify px-[2rem]'>A lot of our payroll related activity which we used to do manually on spreadsheets was automated by Mool Vetan. 
                             Their end-to-end automations saved us from so much headache in this last quarter.</p>
                            <div className='flex flex-row items-center space-x-[1rem] px-[2rem] mx-auto py-[2rem]'>
                                <h1 className='text-[3rem] font-bold text-[#40D2AC]'>10%</h1>
                                <h1 className='w-[60%]  font-bold'>Increase in employees' inhand</h1>
                            </div>
                            <div className='flex flex-row items-center space-x-[1rem] px-[2rem] '>
                                <h1 className='font-bold text-[#405CD2]'>Read the case study</h1>
                                <img src={arrow} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='min-w-[23rem] h-[25rem] bg-[#ffffff] border-solid border-2 border-[#C7C9D0] text-left container'>
                    <div className='relative'>
                        <img src={colon} alt="" className=''/>
                        <div className='absolute flex flex-col'>
                            <p className='z-20 text-[0.875rem] text-justify px-[2rem]'>A lot of our payroll related activity which we used to do manually on spreadsheets was automated by Mool Vetan. 
                             Their end-to-end automations saved us from so much headache in this last quarter.</p>
                            <div className='flex flex-row items-center space-x-[1rem] px-[2rem] mx-auto py-[2rem]'>
                                <h1 className='text-[3rem] font-bold text-[#40D2AC]'>10%</h1>
                                <h1 className='w-[60%]  font-bold'>Increase in employees' inhand</h1>
                            </div>
                            <div className='flex flex-row items-center space-x-[1rem] px-[2rem] '>
                                <h1 className='font-bold text-[#405CD2]'>Read the case study</h1>
                                <img src={arrow} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
           </div> 
           <div className='items-start justify-center flex flex-row relative bottom-[30%] cursor-pointer'>
                <img src={key} alt="" className='absolute right-[15%] min-[2560px]:right-[23%]'/>
           </div>
           
        </div>
    );
}

export default Card