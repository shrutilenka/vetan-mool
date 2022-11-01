import React,{useState} from "react";

const Faq=()=>{
const[show,setShow]=useState(false);
const[show2,setShow2]=useState(false);
const[show3,setShow3]=useState(false);
const[show4,setShow4]=useState(false);
const[show5,setShow5]=useState(false);

    return(
        <div className='container mx-auto w-[75%] pt-[6rem]'>
            <div className="title w-[75%] mx-auto text-[2.625rem] mb-[1rem] font-bold text-[#333333]">FAQs</div>
            <div className="accordion text-left">
                <div className="parts">
                    <div onClick={()=>setShow(!show)}  className="flex bg-[#E4FFF8]">
                        <div><p className="heading px-[2rem] py-[1rem] font-bold text-[#333333] text-[1.125rem] ">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p></div>
                        <div className="icon absolute right-[13%] text-[2rem] min-[2560px]:right-[21%]">{show ?"-":"+"}</div>
                    </div>
                {show && (<div className="content"><p className=" px-[2rem] py-[1rem] text-[#666666] text-[1rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, suscipit nemo ullam iure expedita repellat adipisci doloribus nihil fugit esse beatae nam non necessitatibus corporis dolores est quaerat nostrum,
                     in labore impedit veritatis, odio sapiente laudantium velit! Eum, voluptate alias?</p></div>)}
                </div> 

                <div className="parts">
                    <div onClick={()=>setShow2(!show2)}  className="flex bg-[#E8ECFF]">
                        <div><p className="heading px-[2rem] py-[1rem] font-bold text-[#333333] text-[1.125rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p></div>
                        <div className="icon absolute right-[13%] text-[2rem] min-[2560px]:right-[21%]">{show2 ?"-":"+"}</div>
                    </div>
                {show2 && (<div className="content  px-[2rem] py-[1rem] text-[#666666]  text-[1rem]"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga quam repellat quae architecto voluptatem consequuntur temporibus quisquam, 
                    saepe delectus doloribus unde molestias eligendi ad velit sunt officia ut error accusamus ea est! Odio, expedita! Blanditiis distinctio deserunt error aliquid?</p></div>)}
                </div>   

                <div className="parts">
                    <div onClick={()=>setShow3(!show3)}  className="flex bg-[#E4FFF8]">
                        <div><p className="heading px-[2rem] py-[1rem] font-bold  text-[#333333] text-[1.125rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p></div>
                        <div className="icon absolute right-[13%] text-[2rem] min-[2560px]:right-[21%]">{show3 ?"-":"+"}</div>
                    </div>
                {show3 && (<div className="content  px-[2rem] py-[1rem] text-[#666666]  text-[1rem]"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, rem. Provident error qui culpa consequuntur optio perspiciatis
                     modi deserunt, vero fugiat ea architecto facere, dolorum quod dolores eveniet cupiditate quidem. Ex iure quasi nihil esse tempora asperiores hic voluptas mollitia.</p></div>)}
                </div>  

                <div className="parts">
                    <div onClick={()=>setShow4(!show4)} className="flex bg-[#E8ECFF]">
                        <div><p className="heading px-[2rem] py-[1rem] font-bold  text-[#333333] text-[1.125rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p></div>
                        {/* lock icon */}
                        <div className="icon absolute right-[13%] text-[2rem] min-[2560px]:right-[21%]">{show4 ? "-":"+"}</div>
                        
                    </div>
                {show4 && (<div className="content  px-[2rem] py-[1rem]  text-[#666666]  text-[1rem]"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quos laboriosam laborum delectus animi similique autem, facere nemo.
                     Ducimus expedita modi quam dolore a illo placeat vitae officia aut asperiores sed nobis, iste iure consequuntur natus commodi aliquam qui quisquam?</p></div>)}
                </div>    

                <div className="parts" id="parts-end">
                    <div onClick={()=>setShow5(!show5)}   className="flex bg-[#E4FFF8]">
                        <div> <p className="heading px-[2rem] py-[1rem] font-bold text-[#333333] text-[1.125rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p></div>
                        {/* lock icon */}
                      <div className="icon absolute right-[13%] text-[2rem] min-[2560px]:right-[21%]">{show5 ? "-":"+"}</div>
                    </div>
                {show5 && (<div className="content px-[2rem] py-[1rem]  text-[#666666]  text-[1rem]"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti at itaque alias aspernatur repellat, illum
                     commodi minima molestias officiis blanditiis et, quibusdam, magni obcaecati maxime laborum in ducimus accusantium. Quibusdam ut a sequi iure fugiat dolores sed, aliquid eaque excepturi?</p></div>)}
                </div>      
            </div>

        </div>
    );
}

export default Faq