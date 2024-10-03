import { Link } from "react-router-dom"
import { useState } from "react"
import DOC from "../doc/Sudeys_Mohamud.pdf"



function Home (){
    const [Open ,setOpen ]=useState(false)
    const handleOpen =()=>{
        setOpen(true)
    }
    const handleClose =()=>{
        setOpen(false)
    }
    return <div className=" font-Body " >

        <section id="Home" >
        <div className="" >
                <div  className=" bg-black  sm:h-[80px]  h-full w-full   flex  sm:justify-around  " >
                    <img id="UL" className= " h-[50px]  mt-[10px] sm:ml-[0px] ml-[30px] sm:pb-0 pb-[10px]    " src="src/images/Screenshot_2024-10-01_at_1.21.59_PM-removebg-preview.png" alt="" />
                    <i onClick={handleOpen}   style={{display :Open ==true? "none" :""  }} class="fa-solid fa-bars-staggered text-white sm:hidden absolute  text-[30px] top-[20px]   right-5  "></i>
                    <i onClick={handleClose}  style={{display :Open ==true? "block" :""  }}   class="fa-solid fa-x text-white hidden absolute  text-[30px] top-[20px]   right-5  "></i>
                    <ul id="UL" style={{display :Open ==true? "block" :""  }}   className="text-[white] sm:flex hidden ml-[-70px]   sm:ml-[100px] sm:mt-[0px] mt-[80px] gap-[70px]  items-center sm:gap-[50px]  " >
                        <li className=" hover:scale-110  hover:border-b-[1px] border-[white] duration-150  sm:mt-0 mt-[5px]  " > <a href="#About">ABOUT ME</a> </li>
                        <li className=" hover:scale-110  hover:border-b-[1px] border-[white] duration-150  sm:mt-0 mt-[5px]  " > <a href="#Skills">MY SKILLS</a></li>
                      <Link to="Project" >  <li className=" hover:scale-110  hover:border-b-[1px] border-[white] duration-150  sm:mt-0 mt-[5px] " > <a href="#Skills">MY PROJECTS</a></li></Link>
                        <h1 className=" hover:scale-110  hover:border-b-[1px] border-[white] duration-150   " > <a href={DOC} download="Sudeys_Mohamud" >My Resume <i class="fa-solid fa-download"></i> </a> </h1>
                       <Link  to="Contact" > <button className="bg-white text-black h-[30px] sm:mb-0 mb-[20px] sm:mt-0 mt-[10px]  w-[130px] hover:scale-110 duration-150  rounded-[5px]   " >CONTACT ME</button></Link>
                    </ul>
                </div>
                <div className="  flex  ">
                        <div className="  f sm:ml-[150px] mt-[70px]  sm:mt-[200px] " >
                                <h1 id="P1" className=" ml-[20px]  text-[20px]  sm:text-[25px] font-semibold " >Hi, I am</h1>
                                <h1 id="Name" className="sm:text-[80px] text-[30px] ml-[20px]  sm:ml-0   font-Header w-[400px] font-bold  relative   "   >Sudeys Mohamud   </h1>
                                <p  id="p" className=" ml-[20px] font-semibold sm:ml-[4px]     text-[#909090] "  > full stack developer / Designer </p>
                                <ul id="Icons" className="flex gap-[20px] ml-[20px] sm:ml-0  text-[#909090]  mt-[10px]   " >
                                    <li className=" text-[25px] hover:text-[black]  " > <a href="https://github.com/sudeys-1"><i class="fa-brands fa-github"></i></a> </li>
                                    <li className=" text-[25px]  hover:text-[black] " ><a href="https://x.com/Sudeysi1122"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li className=" text-[25px]  hover:text-[black] " > <a href="https://wa.link/5hqsvq"><i class="fa-brands fa-whatsapp"></i></a> </li>
                                </ul>
                        </div>
                        
                        <div>
                            <img  id="me" className="    absolute sm:h-[650px] h-[400px] overflow-visible sm:top-[100px]   top-[300px]  sm:left-[700px] sm:bottom-[110px] left-[5px]   " src="src/images/Untitled-NJXyBb8Qp-transformed 2.jpg" alt="" />
                        </div>
                </div>

        </div>
        <div className=" bg-black  sm:mt-[121px]  mt-[423px] h-[40px]    sm:h-[65px]   " ></div>
        </section>

        {/* --------------------------- */}

        <section id="About" >
            <div className="  h-screen    " >
               <div className=" pt-[50px]  " >
                    <h1 className="  font-Body text-[30px] sm:text-[40px] font-semibold sm:h-[100px] h-[60px] rounded-[2px]   w-[200px] sm:w-[400px] sm:pt-[15px] ml-[100px]  sm:ml-[530px]  text-center border-[4px] border-black  " >ABOUT ME</h1>
                            <p className="  sm:font-Body sm:w-[550px] w-[300px] ml-[50px]  sm:ml-[450px] mt-[30px] text-[15px] font-medium  text-justify sm:text-center   " >
                            I am a student and a passionate full-stack web developer. I love building both front-end and back-end solutions that bring ideas to life. In addition to my technical skills, I can speak three languages, which helps me connect with people from different cultures and backgrounds.</p>
                    <img className=" ml-[120px] sm:ml-[640px] mt-[20px]  " src="src/images/separatorBlack 1.png" alt="" />    
               </div>
               <div className=" sm:flex sm:justify-around mt-[50px]  " >

                        <div> 
                          <h1 className=" font-Body text-center font-bold  mt-[10px]  " >DESIGN</h1>
                          <h1 className=" font-Body w-[400px] text-center  align-middle text-[#666666] " >I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</h1>  
                        </div>

                        <div> 
                          <h1 className=" font-Body text-center font-bold  mt-[10px]  " >DEVELOPMENT</h1>
                          <h1 className=" font-Body w-[380px] sm:w-[400px] text-center text-[#666666] " >I can develop the site based on your needs and suggestions. I can also build the site from scratch and consult with you throughout the process.</h1>  
                        </div>
               </div>
 
               <div className=" sm:ml-[480px] text-center sm:mt-[50px] mt-[10px]  " > 
                          <h1 className=" font-Body font-bold  " >Experience</h1>
                          <h1 className=" font-Body w-[360px] ml-[15px] sm:ml-0   sm:w-[500px] text-center text-[#666666] " >During my time as a Full-Stack Web Developer, I have consistently developed websites based on clients' needs and suggestions. I have built sites from scratch and provided valuable consultations throughout the process to ensure that the final product meets all requirements and exceeds expectations. My technical expertise and commitment to client satisfaction have been evident in every project I’ve worked on.</h1>  
                </div>



            </div>
            <img className=" sm:ml-[640px] ml-[120px] mt-[150px] pb-[100px]  " src="src/images/separatorBlack 1.png" alt="" />

        </section>
        <section id="Skills" >

            <div className="  bg-white sm:pt-[30px] h-[800px]  sm:h-[900px] " >

               <div  className=" font-Body   ">
                    <h1 className="  sm:text-[40px] text-[30px] font-semibold sm:h-[90px] h-[60px]  rounded-[2px]   w-[200px]   sm:w-[400px] ml-[100px]    sm:ml-[530px]  font-Body pt-[5px] text-black text-center border-[4px] border-black    " >MY SKILLS</h1>
                    {/* <div>
                      <h1 className=" ml-[100px] text-[25px] font-semibold  mt-[20px]  text-white " >Using Now :</h1>
                        <div className="grid grid-cols-4 gap-[20px] ml-[300px]   " >
                            <div>
                                <img className="h-[100px]  hover:scale-110 duration-150    " src="src/images/vecteezy_stylized-3d-html-logo-design_12697299 (1).png" alt="" />
                                <h1 className=" mt-[20px] font-semibold  text-white " >HTML</h1>
                            </div>
                            <div>
                                <img className="h-[100px]  hover:scale-110 duration-150    " src="src/images/Screenshot_2024-10-02_at_5.06.37_PM-removebg-preview.png" alt="" />
                                <h1 className=" mt-[20px] font-semibold  text-white  " >Tailwind Css</h1>
                            </div>
                            <div>
                                <img className="h-[100px]  hover:scale-110 duration-150    " src="src/images/vecteezy_3d-icon-of-atom_20033019.png" alt="" />
                                <h1 className=" mt-[20px] font-semibold  text-white  " >React</h1>
                            </div>
                            <div>
                                <img className="h-[100px]  hover:scale-110 duration-150    " src="src/images/Screenshot_2024-10-02_at_5.02.56_PM-removebg-preview.png" alt="" />
                                <h1 className=" mt-[20px] font-semibold  text-white " >NodeJS </h1>
                            </div>
                            <div>
                                <img className="h-[100px]   hover:scale-110 duration-150   " src="src/images/Screenshot_2024-10-02_at_5.10.51_PM-removebg-preview.png" alt="" />
                                <h1 className=" mt-[20px] font-semibold  text-white  " > MongoDB </h1>
                            </div>
                        </div>
                    </div> */}
                    {/* ------------------ */}
                    <h1 className=" sm:ml-[100px] ml-[20px]  text-[25px] font-Body font-semibold  mt-[20px]  text-black " >All :</h1>
                    <div>
                      
                        <div className="grid sm:grid-cols-4 grid-cols-3 gap-[10px] sm:ml-[300px]  ml-[30px]   " >
                            <div>
                                <img className="sm:h-[80px]   h-[50px]  hover:scale-110 duration-150     " src="src/images/vecteezy_stylized-3d-html-logo-design_12697299 (1).png" alt="" />
                                <h1 className=" mt-[20px] font-semibold  text-black  " >HTML</h1>
                            </div>
                            <div>
                                <img className="sm:h-[80px]  h-[50px]   hover:scale-110 duration-150    " src="src/images/vecteezy_3d-css-icon-design_12697301.png" alt="" />
                                <h1 className=" mt-[20px] font-semibold  text-black  " >CSS</h1>
                            </div>
                            <div>
                                <img className="sm:h-[80px]  h-[50px]   hover:scale-110 duration-150    " src="src/images/vecteezy_3d-javascript-logo-design_12697298.png" alt="" />
                                <h1 className=" mt-[20px] font-semibold text-black  " >JavaScript</h1>
                            </div>
                            <div>
                                <img className="sm:h-[80px]  h-[50px]   hover:scale-110 duration-150    " src="src/images/Screenshot_2024-10-02_at_5.06.37_PM-removebg-preview.png" alt="" />
                                <h1 className=" mt-[20px] font-semibold  text-black  " >Tailwind Css</h1>
                            </div>
                            <div>
                                <img className="sm:h-[80px]  h-[50px]   hover:scale-110 duration-150    " src="src/images/vecteezy_3d-icon-of-atom_20033019.png" alt="" />
                                <h1 className=" mt-[20px] font-semibold  text-black  " >React</h1>
                            </div>
                            <div>
                                <img className="sm:h-[80px]  h-[50px]   hover:scale-110 duration-150    " src="src/images/Screenshot_2024-10-02_at_5.02.56_PM-removebg-preview.png" alt="" />
                                <h1 className=" mt-[20px] font-semibold  text-black  " >NodeJS </h1>
                            </div>
                            <div>
                                <img className="sm:h-[100px]  h-[50px]   hover:scale-110 duration-150    " src="src/images/Screenshot_2024-10-02_at_5.10.51_PM-removebg-preview.png" alt="" />
                                <h1 className=" mt-[20px] font-semibold  text-black  " > MongoDB </h1>
                            </div>
                            <div>
                                <img className="sm:h-[80px]  h-[50px]   hover:scale-110 duration-150    " src="src/images/Screenshot_2024-10-02_at_5.41.39_PM-removebg-preview.png" alt="" />
                                <h1 className=" mt-[20px] font-semibold  text-black  " > Express Js </h1>
                            </div>
                        </div>
                    </div>

                    {/* --------------- */}
                    <h1 className=" sm:ml-[100px] ml-[20px] text-[25px] font-semibold mt-[20px]  sm:mt-[10px]  text-black " >LEARNING:</h1>
                    <div className="grid grid-cols-3 gap-[20px] sm:ml-[300px] ml-[30px] sm:pt-0 pt-[30px]    " >
                            <div  >
                                <img className="sm:h-[80px] h-[50px]   hover:scale-110 duration-150     " src="src/images/Screenshot_2024-10-02_at_7.40.09_PM-removebg-preview.png" alt="" />
                                <h1 className=" mt-[20px] font-semibold  text-black  " > Wordpress </h1>
                            </div>

                            <div>
                                <img className="sm:h-[80px]  h-[50px] hover:scale-110 duration-150    " src="src/images/Screenshot_2024-10-02_at_7.49.06_PM-removebg-preview.png" alt="" />
                                <h1 className=" mt-[20px] font-semibold  text-black  " > Mobile App </h1>
                            </div>
                    </div>

                    {/* ---------------- */}
                     {/* --------------- */}
                     <h1 className=" sm:ml-[100px] ml-[20px]  text-[25px] font-semibold  mt-[10px]  text-black " >OTHER SKILLS:</h1>
                    <div className="grid grid-cols-3 gap-[20px] sm:ml-[300px]  ml-[30px] pt-[30px]    " >
                            <div>
                                <img className="sm:h-[80px]  h-[50px]   hover:scale-110 duration-150    " src="src/images/Screenshot_2024-10-02_at_8.14.18_PM-removebg-preview.png" alt="" />
                                <h1 className=" mt-[20px] font-semibold  text-black  " >English  </h1>
                            </div>

                            <div>
                                <img className=" sm:h-[80px] h-[50px]   hover:scale-110 duration-150    " src="src/images/Screenshot_2024-10-02_at_8.12.11_PM-removebg-preview.png" alt="" />
                                <h1 className=" mt-[20px] font-semibold  text-black  " >Arabic </h1>
                            </div>
                    </div>
               </div>
            </div>

    

        </section>
        <section>
            <div className=" text-white  font-Body h-[230px]  sm:h-[200px] bg-black text-center  " >
                <h1 className=" pt-[20px] text-[25px]  " > <a href="#Home"> BACK TO TOP <i class="fa-solid fa-angles-up fa-fade"></i> </a> </h1>
                <ul className="flex gap-[20px]  text-[]  mt-[30px] ml-[130px]  sm:ml-[650px] text-center   " >
                <li className=" text-[25px] hover:text-[black]  " > <a href="https://github.com/sudeys-1"><i class="fa-brands fa-github"></i></a> </li>
                                    <li className=" text-[25px]  hover:text-[black] " ><a href="https://x.com/Sudeysi1122"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li className=" text-[25px]  hover:text-[black] " > <a href="https://wa.link/5hqsvq"><i class="fa-brands fa-whatsapp"></i></a> </li>
                </ul>
                <p className=" mt-[20px]  " >@2024 Sudeys Mohamud All Rights</p>
            </div>
        </section>



        
    </div>
}

export default Home 