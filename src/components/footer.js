import React from 'react'
import logo from "../assets/Rectangle 2.svg"
import socials from "../assets/social.svg"

const Footer=()=>{
    return(
        <div className='bg-[#0A0E1C] opacity-[80%]'>
            <div className="container w-[75%] mx-auto text-[#ffffff] font-light text-[0.875rem] text-left py-[5.5rem]">
                <img src={logo} alt="logo"/>
                <div className='grid grid-cols-2 gap-5 items-end justify-items-start text-left'>
                    <div className='mt-[3.18rem]'><p>Mool is a leading financial startup that aims to create a sustainable solution for corporate employees by facilitating effective tax planning, 
                        smart investments, insurance, and borrowing options. Mool simplifies the personal financial and taxation jargon and makes it accessible to all. 
                        With the products of Mool, organizations and employees can now maximize the value of their salaries without a hassle. Mool’s mission is to create a platform to educate everyone, 
                        optimize the growth of their money, and empower them with rich facts and proven analysis for decision making.
                    </p></div>
                    <div className='grid grid-cols-3 gap-[4rem] items-center justify-evenly justify-items-end mx-auto text-left'>
                        <div className='flex flex-col text-left items-start space-y-4'>
                            <h1 className='font-medium'>Products</h1>
                            <p>Vetan</p>
                            <p>Lekhakar</p>
                            <p>Jann</p>   
                        </div>
                        <div className='flex flex-col text-left items-start space-y-4'>
                            <h1 className='font-medium'>Pages</h1>
                            <p>About us</p>
                            <p>Contact us</p>
                            <p>Link</p>   
                        </div>
                        <div className='flex flex-col text-left items-start space-y-4 '>
                            <h1 className='font-medium'>Resources</h1>
                            <p>Calculator</p>
                            <p>News & Media</p>
                            <p>Blogs</p>   
                        </div>

                    </div>

                </div>
                <div className='mt-[4.25rem] flex flex-col space-y-2'>
                <h1 >Get in touch</h1>
                <h1 className='text-[#40D2AC]'>support@moolfinance.com</h1>
                </div>
                <img src={socials} alt="icon set" className='mt-[1rem] cursor-pointer' />
                <hr  className='mt-[4rem]'/>
                <p className='mt-[1rem]'>Made with ❤️ by mool team</p>

            </div>


        </div>
    );
}

export default Footer