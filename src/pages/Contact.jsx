import { useState  } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { Link } from "react-router-dom"
function Contact (){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [massage, setMessage] = useState("")

    const handleFeedBack =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:1000/Create/massages",{
            "name" :name,
            "Email" :email,
            "massage" :massage
        }).then(()=>{
        
            toast.custom((t) => (
                <div
                  className={`${
                    t.visible ? 'animate-enter' : 'animate-leave'
                  } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                  <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 pt-0.5">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="src/images/Untitled-NJXyBb8Qp-transformed 2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          Sudeys Mohamud
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                        Thank you for your message! I will get back to you as soon as possible.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-l border-gray-200">
                    <button
                      onClick={() => toast.dismiss(t.id)}
                      className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ))
        }).catch((error)=>{
            console.log(error)
        })
    }


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
                    <input value={name}  onChange={(event)=> setName(event.target.value)}   className=" border-l-[3px] h-[30px] w-[300px]  sm:w-[400px] border-b-[3px] border-black pl-[10px]    "  type="text"  placeholder="Enter Your Name " />
                    <input value={email}  onChange={(event)=> setEmail(event.target.value)}   className=" border-l-[3px] h-[30px] w-[300px] sm:w-[400px] border-b-[3px] border-black pl-[10px]    "  type="text"  placeholder="Enter Your Email" />
                    <input value={massage}  onChange={(event)=> setMessage(event.target.value)}   className=" border-l-[3px] h-[30px]  w-[300px] sm:w-[400px] border-b-[3px] border-black pl-[10px]    "  type="text"  placeholder="Enter Your Message" />
                    <button onClick={handleFeedBack} className=" h-[30px] w-[100px] bg-black text-white rounded-[3px] hover:scale-110 duration-150  " >   SEND </button>
                </form>
            </div>

        
        </div>



    </div>
}

export default Contact