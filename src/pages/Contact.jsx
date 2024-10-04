// import { useState  } from "react"
// import axios from "axios"
// import { toast } from "react-hot-toast"
import { Link } from "react-router-dom"
function Contact (){
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [massage, setMessage] = useState("")

    // const handleFeedBack =(e)=>{
    //     e.preventDefault()
    //     axios.post("https://my-portfolio-backend-1-5ebv.onrender.com/Create/massages",{
    //         "name" :name,
    //         "Email" :email,
    //         "massage" :massage
    //     }).then(()=>{
        
            
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // }


    return <div className="font-Body " >
        <div className=" bg-black  h-[80px] w-full flex justify-around  " >
                    <img id="UL"  className= " h-[50px]  mt-[10px] sm:ml-[-109px]   " src="src/images/Screenshot_2024-10-01_at_1.21.59_PM-removebg-preview.png" alt="" />
                    <ul id="UL"  className="text-[white] ml-[100px] flex items-center gap-[50px]  " >
                        {/* <li className=" hover:scale-110  hover:border-b-[1px] border-[white] duration-150  " > <a href="#About">ABOUT ME</a> </li> */}
                       <Link to="/" > <li className=" hover:scale-110  hover:border-b-[1px] border-[white]   duration-150  " > HOME</li></Link>
                        {/* <li className=" hover:scale-110  hover:border-b-[1px] border-[white] duration-150  " > <a href="#Skills">MY PROJECTS</a></li> */}
                       {/* <Link  to="Contact" > <button className="bg-white text-black h-[30px] w-[130px] hover:scale-110 duration-150  rounded-[5px]   " >CONTACT ME</button></Link> */}
                    </ul>
        </div>
        <div id="p" className=" sm:h-full h-[700px]  pt-[50px] " >

             <h1 className=" text-[20px]   sm:text-[40px] font-semibold sm:h-[100px] h-[60px]  rounded-[2px]  w-[200px]    sm:w-[400px] ml-[100px]    sm:ml-[530px]  pt-[15px] text-black text-center border-[4px] border-[black]    " >CONTACT</h1>
             <p></p>
             <img className=" ml-[115px]  sm:ml-[645px] mt-[100px] pb-[100px]  " src="src/images/separatorBlack 1.png" alt="" />

            <div  className="  flex  justify-center" >
                <form className=" flex flex-col gap-[50px] " >
                    <input   className=" border-l-[3px] h-[30px] w-[300px]  sm:w-[400px] border-b-[3px] border-black pl-[10px]    "  type="text"  placeholder="Enter Your Name " />
                    <input   className=" border-l-[3px] h-[30px] w-[300px] sm:w-[400px] border-b-[3px] border-black pl-[10px]    "  type="text"  placeholder="Enter Your Email" />
                    <input  className=" border-l-[3px] h-[30px]  w-[300px] sm:w-[400px] border-b-[3px] border-black pl-[10px]    "  type="text"  placeholder="Enter Your Message" />
                  <Link  to="/" >  <button  className=" h-[30px] w-[100px] bg-black text-white rounded-[3px] hover:scale-110 duration-150  " >   SEND </button></Link>
                </form>
            </div>

        
        </div>



    </div>
}

export default Contact