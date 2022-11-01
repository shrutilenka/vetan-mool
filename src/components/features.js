import React from 'react'
import box from "../assets/box.svg"
import greendash from "../assets/green-dash.svg"
import icon1 from "../assets/icon1.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon3.svg"
import icon4 from "../assets/icon4.svg"

const Feature=()=>{
    return(
        <div className='mt-[8rem]'>
            <section>
                <div className="container w-[75%] mx-auto">
                    <div className='grid grid-cols-2 items-center justify-around gap-5'>
                        <div className='flex flex-col text-left items-start'>
                            <h1 className='text-[2rem] font-bold'>Flexible SaaS based tool for <span className='text-[#405CD2]'> efficient</span></h1>
                            <h1 className='text-[2rem] font-bold text-[#405CD2]'>Payroll management</h1>
                            <img src={greendash} alt="dash" className=''/>
                            <p className='text-[#666666] text-[0.875rem] text-justify w-[80%] my-[2rem]'>The agility of cloud is built-in all Mool products. Our modular product stack offers you the flexibility of 
                                choosing the right tool for your organisation. Whether you need a full-stack of products or just a part of the innovative 
                                Mool system. Mool delivers.</p>
                            <button className=' bg-[#405CD2] items-center w-[14.4rem] py-[0.75rem] px-[1.5rem] text-[#F7F7FA] font-bold'>Explore Mool Vetan</button>
                        </div>
                        <div className='mx-auto flex flex-col'>
                            <img src={box} alt="graph" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto w-[75%]">
                    <div className='grid grid-cols-4 items-start justify-around gap-[2rem]'>
                        <div className='flex flex-col text-left items-start'>
                            <img src={icon1} alt="" className='my-[2rem]'/>
                            <h1 className='text-[1.125rem] font-bold mb-[2rem] text-[#222632]'>Salary Personalisation</h1>
                            <p className='text-[#666666] text-[0.875rem] text-justify w-[75%]'>Maximize tax savings with our AI-based intelligent algorithms. 
                                Employees can gain upto 10% more in-hand salary without any additional cost to the company</p>
                        </div>
                        <div className='flex flex-col text-left items-start'>
                            <img src={icon2} alt="" className='my-[2rem]'/>
                            <h1 className='text-[1.125rem] font-bold mb-[2rem] text-[#222632]'>HRMS</h1>
                            <p className='text-[#666666] text-[0.875rem] text-justify w-[75%]'>Maximize tax savings with our AI-based intelligent algorithms.
                                 Employees can gain upto 10% more in-hand salary without any additional cost to the company</p>
                        </div>
                        <div className='flex flex-col text-left items-start'>
                            <img src={icon3} alt="" className='my-[2rem]'/>
                            <h1 className='text-[1.125rem] font-bold mb-[2rem] text-[#222632]'>Compilation Automation</h1>
                            <p className='text-[#666666] text-[0.875rem] text-justify w-[75%]'>Maximize tax savings with our AI-based intelligent algorithms. Employees can gain upto 10% more in-hand salary without any additional cost to the company</p>
                            <ul className='text-[#666666] text-[0.875rem] text-justify w-[75%] mt-[1rem] list-disc'>
                                <li>Quick & Easy  PF, PT, TDS, ESI & LWF calculations.</li>
                                <li>Automated TDS, Salary, PF reports and more</li>
                            </ul>
                        </div>
                        <div className='flex flex-col text-left items-start'>
                            <img src={icon4} alt="" className='my-[2rem]'/>
                            <h1 className='text-[1.125rem] font-bold mb-[2rem] text-[#222632]'>Payout Management</h1>
                            <p className='text-[#666666] text-[0.875rem] text-justify w-[75%]'>Bringing an end to manual workflows.</p>
                            <ul className='text-[#666666] text-[0.875rem] text-justify w-[75%] mt-[1rem] list-disc'>
                                <li>Automated Payroll Payout Management</li>
                                <li>Automated Payroll Payout Management</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <section className='mt-[6rem] w-[75%] mx-auto'>
                <button className='w-full bg-[#40D2AC] text-[#F7F7FA] py-[1.2rem] text-center text-[1.75rem] font-bold'>Choose from a full - stack of payroll management solutions</button>
            </section>
            

        </div>
    );
}

export default Feature