import { Link } from "react-router-dom"

function Project (){
    return <div>
        <div className=" bg-black  h-[80px] w-full flex justify-around  " >
                    <img id="UL"  className= " h-[50px]  mt-[10px] sm:ml-[-109px]   " src="src/images/Screenshot_2024-10-01_at_1.21.59_PM-removebg-preview.png" alt="" />
                    <ul id="UL"  className="text-[white] ml-[100px] flex items-center gap-[50px]  " >
                        {/* <li className=" hover:scale-110  hover:border-b-[1px] border-[white] duration-150  " > <a href="#About">ABOUT ME</a> </li> */}
                       <Link to="/" > <li className=" hover:scale-110  hover:border-b-[1px] border-[white]   duration-150  " > HOME</li></Link>
                        {/* <li className=" hover:scale-110  hover:border-b-[1px] border-[white] duration-150  " > <a href="#Skills">MY PROJECTS</a></li> */}
                       {/* <Link  to="Contact" > <button className="bg-white text-black h-[30px] w-[130px] hover:scale-110 duration-150  rounded-[5px]   " >CONTACT ME</button></Link> */}
                    </ul>
                </div>

        <div>
        <h1 className="  font-Body text-[40px] font-semibold h-[60px]  sm:h-[100px] rounded-[2px] w-[200px]  ml-[100px]  sm:w-[400px] sm:pt-[10px]   sm:ml-[530px] mt-[30px] text-center border-[4px] border-black  " > Projects </h1>

        </div>

        <div   className=" grid grid-cols-1 gap-[20px] sm:ml-[20px] mt-[20px]  "  >
            <div id="me"  className=" border-[white] text-center border-[3px] bg-black  rounded-[10px]  h-[300px]  "   >
                <h1 className=" text-white font-Body font-semibold text-[20px] pt-[10px]  " >Exam Center</h1>
                <img className="sm:h-[200px]  h-[180px]   mt-[20px] ml-[40px] hover:scale-105 duration-150     " src="src/images/Screenshot 2024-10-03 at 10.06.31 AM.png" alt="" />
            </div>

            <div id="me" className=" border-[white] text-center border-[3px] bg-black  rounded-[10px]  h-[300px]  "  >
                <h1 className=" text-white font-Body font-semibold text-[20px] pt-[10px]  " >E-Commerce</h1>
                <img className="sm:h-[200px]  h-[180px]  mt-[20px] ml-[40px] hover:scale-105 duration-150      " src="src/images/Screenshot 2024-10-03 at 9.57.57 AM.png " alt="" />
            </div>

            <div id="me"  className=" border-[white] text-center border-[3px] bg-black  rounded-[10px]  h-[300px]  " >
                <h1 className=" text-white font-Body font-semibold text-[20px] pt-[10px]  " >Voting App</h1>
                <img className="sm:h-[200px]  h-[180px] mt-[20px]  ml-[40px] hover:scale-105 duration-150      " src="src/images/Screenshot 2024-10-03 at 1.41.25 PM.png" alt="" />
            </div  >
            <div id="me" className=" border-[white] text-center border-[3px] bg-black  rounded-[10px]  h-[300px]  " >
                <h1 className=" text-white font-Body font-semibold text-[20px] pt-[10px]  " >Note Taker App</h1>
                <img className="sm:h-[200px]  h-[180px] mt-[20px]  ml-[40px] hover:scale-105 duration-150      " src="src/images/Screenshot 2024-10-03 at 1.51.29 PM.png" alt="" />
            </div  >
            <div id="me" className=" border-[white] text-center border-[3px]   rounded-[10px]  h-[300px]  " >
                <h1 className=" text-black font-Body font-semibold text-[20px] pt-[100px]  " > <a href="https://github.com/sudeys-1"> See More... <i class="fa-solid fa-chevron-right fa-beat-fade"></i> </a>  </h1>
            </div  >
        </div>
       <a href="https://github.com/sudeys-1"></a> 


    </div>
}

export default Project