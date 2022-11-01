import React from 'react'
import dashboard from "../assets/dashboard 1.svg"
import thread from "../assets/thread.svg"
import peeps from "../assets/peeps.svg"


const Hero=()=>{
  return (
    <div className='w-[75%] mx-auto mt-[8rem]'>
        <section>
            <div className='grid grid-cols-2 items-center justify-around gap-5'>
                <div className='flex flex-col text-left items-start'>
                    <h1 className='text-[2.625rem] font-bold text-[#666666]'>India's 1st <span className='text-[#405CD2]'>Tax Optimization</span></h1>
                    <h1 className='text-[2.625rem] font-bold text-[#000000]'>& <span className='text-[#405CD2]'>Salary Personalization</span></h1>
                    <h1 className='text-[2.625rem] font-bold text-[#405CD2]'>Software</h1>
                    <p className='py-[1.125rem] text-[#666666]'>Personalize Salaries. Automate Payroll management. Optimize Operations & Increase employee satisfaction & retention</p>
                    <button className=' bg-[#405CD2] font-bold items-center w-[231px] py-[0.75rem] px-[1.5rem] text-[#ffffff]'>Explore Mool Vetan</button>
                </div>
                <div className='mx-auto flex flex-col'>
                    <img src={dashboard} alt="dashboard" className='w-[665px] h-[381px] z-20 mx-auto ' />
                    <img src={thread} alt="thread"  className='z-10 2xl:w-[950px] 2xl:h-[900px] -rotate-30 absolute top-[-5rem] right-[2rem] mx-auto min-[2560px]:h-[964px] min-[2560px]:w-[986px] '/>
                </div>
            </div>
        </section>
        <section className='mt-[12rem]'>
            <div className='grid grid-cols-2 items-center justify-around gap-5 container'>
                 <div className='relative bottom-[2rem]'>
                    <img src={peeps} alt="" />
                </div>
                <div className='flex flex-col items-start text-left w-[80%] mx-auto min-[2560px]:left-[30%] min-[2560px]:relative'>
                    <h1 className='text-[2rem] font-bold'>MOOL Personalizes <span className='text-[#405CD2]'> Salary</span></h1>
                    <h1 className='text-[2rem] font-bold text-[#405CD2]'> Structures for Everyone</h1>
                    <h1 className='text-[1.125rem] font-bold pt-[1.125rem]'>Not Your Average Payroll Software</h1>
                    <p className='pt-[0.25rem] text-justify text-[0.825rem] text-[#333333]'>Mool is the only AI-powered payroll system that enables you to offer personalized salary structures for your employees, so they get the most out of their salaries. Empower your employees to maximize value from their salary based on their needs.</p>
                    <h1 className='text-[1.125rem] font-bold pt-[1.05rem] pb-[3rem]'>Bring Your Payroll Management to the 21st Century!</h1>
                    <button className=' bg-[#405CD2] items-center w-[155px] py-[0.75rem] px-[1.5rem] text-[#F7F7FA] font-bold'>Try for FREE</button>
                </div>
            </div>

        </section>

   
    </div>
  );
}
export default Hero

