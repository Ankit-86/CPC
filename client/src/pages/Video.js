// import React from 'react'
// import first from '../images/logo.png'
// import second from '../images/slider_bg_1.png'

// import third from '../images/slider_bg_2.jpg'
// import fourth from '../images/PROFILE_SKILLUP_LOGO-02.jpg'
// import fifth from '../images/PROFILE_SKILLUP_LOGO-02.jpg'
// import sixth from '../images/course1.png'
// import seven from '../images/course2.jpg'
// import eight from '../images/course3.jpg'



// const Video = () => {
//     return (
//         <>
//         {/* <h1>hello</h1> */}
//         <div class="container-fluid">
//                 <div class="row cr1">
//                     <div class="col-sm-12 col-md-6 cc1">
//                         <i class="fa-solid fa-phone"></i> 7208581498
//                     </div>
//                     <div class="col-sm-12 col-md-6 cc2">
//                         <i class="fa-brands fa-facebook"></i> | <i class="fa-sharp
//                             fa-solid fa-g"></i>
//                     </div>
//                 </div>
//             </div>
//             <div class="container-fluid sticky-top">
//                 <div class="row cr2">
//                     <div class="col-sm-6 c21">
//                         <img src={first} width="200px" height="auto"
//                             class="img-fluid"/>
//                     </div>
//                     <div class="col-sm-6 c22">
//                         <i class="fa-solid fa-bars" style={{fontSize: "25px"}}></i>
//                     </div>
//                 </div>
//             </div>
            

//             <div id="carouselExampleDark" class="carousel carousel-dark slide"
//                 data-bs-ride="carousel">
//                 <div class="carousel-indicators">
//                     <button type="button" data-bs-target="#carouselExampleDark"
//                         data-bs-slide-to="0" class="active"
//                         aria-current="true" aria-label="Slide 1"></button>
//                     <button type="button" data-bs-target="#carouselExampleDark"
//                         data-bs-slide-to="1"
//                         aria-label="Slide 2"></button>
//                 </div>
//                 <div class="carousel-inner">
//                     <div class="carousel-item active" data-bs-interval="10000">
//                         <img src={second} class="d-block img_1"/>
                        
//                         <div class="t01">
//                             <div class="t1">
//                                 <span style={{color: "#f54a8d"}}>Skill</span>
//                                 <span style={{color: "#153583;"}}> Up</span>
//                                 <span style={{color: "#f54a8d"}}> IT</span>
//                                 {/* <span style={{color: "#153583"}}> Academy</span> */}
//                             </div>
//                             <div class="t2">University, College, School Syllabus
//                                 Education</div>
//                             <div class="t501"> <button class="t510">Enquire Now</button></div>
                            
//                         </div>
//                     </div>
//                     <div class="carousel-item">
//                         <img src={third} class="d-block img_1"/>
//                         <div class="t01">
//                             <div class="t1">
//                             <span style={{color: "#f54a8d"}}>Skill</span>
//                                 <span style={{color: "#153583;"}}> Up</span>
//                                 <span style={{color: "#f54a8d"}}> IT</span>
//                                 <span style={{color: "#153583"}}> Academy</span>
//                             </div>
//                             <div class="t2">Education Needs Complete Solution</div>
//                             <div class="t501"> <button class="t510">Enquire Now</button></div>
                           
//                         </div>
//                     </div>
//                     </div>

//                     <button class="carousel-control-prev" type="button"
//                     data-bs-target="#carouselExampleDark" data-bs-slide="prev">
//                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Previous</span>
//                 </button>
//                 <button class="carousel-control-next" type="button"
//                     data-bs-target="#carouselExampleDark" data-bs-slide="next">
//                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Next</span>
//                 </button>
//                 </div>
//                 <div class="t41">
//                 <span style={{color:" #f54a8d"}}>About</span>
//                 <span style={{color: "#153583"}}>Us</span>
//             </div>
    
//             <div class="container-fluid">
//                 <div class="row l4">
//                     <div class="col-sm-12 col-md-6">
//                         <div class="t42">
//                             <div class="t44">
//                                 <div class="t46"><img
//                                         src={fourth}
//                                         width="70px" height="70px"
//                                         style={{border: "1px solid #153583",
//                                         borderRadius: "50%"}}/></div>
//                                 <div class="t47">skillupitacademy</div>
//                             </div>
//                             <div class="t45">We at SkillUp IT Academy ensure that
//                                 students are not only getting trained,
//                                 educated in IT subjects or programming languages but
//                                 also getting skilled so that they can
//                                 explore knowledge and create new opportunities,
//                                 innovation in this competitive and dynamic
//                                 world.</div>
//                             <div class="t48">
//                                 <div class="t46"><img
//                                         src={fourth}
//                                         width="70px" height="70px"
//                                         style={{border: "1px solid #153583",
//                                         borderRadius: "50%"}}/></div>
//                                 <div class="t47">skillupitacademy</div>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="col-sm-12 col-md-6">
//                         <div class="t42">
//                             <div class="t44">
//                                 <div class="t46"><img
//                                         src={fifth}
//                                         width="70px" height="70px"
//                                         style={{border: "1px solid #153583",
//                                         borderRadius: "50%"}}/></div>
//                                 <div class="t47">skillupitacademy</div>
//                             </div>
//                             <div class="t45">We at SkillUp IT Academy work on to
//                                 build platform where skill and ability can
//                                 match up to build bright future of current and
//                                 future generations. We believe in training
//                                 where we train students to explore knowledge rather
//                                 than settle on the existing skills they
//                                 have.</div>
//                             <div class="t48">
//                                 <div class="t46"><img
//                                         src="PROFILE_SKILLUP_LOGO-02.jpg"
//                                         width="70px" height="70px"
//                                         style={{border: "1px solid #153583",
//                                         borderRadius: "50%"}}/></div>
//                                 <div class="t47">skillupitacademy</div>
//                             </div>
//                         </div>
//                     </div>

                   
//                     </div>
//                     </div>
        



//                     <div class="t41">
//                 <span style={{color:" #f54a8d"}}>Fundamental</span>
//                 <span style={{color: "#153583;"}}>Modules</span>
//             </div>
    
//             <div class="container-fluid">
//                 <div class="row l51">
//                     <div class="col-sm-0 col-md-3 0">
//                         <div>
//                         <iframe width="380" height="250" src="https://www.youtube.com/embed/9tn82yBrX90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//                             <div class="t59">
                                
//                             </div>
//                         </div>
//                         <div class="t52">
//                             <div><button class="t53"><i class="fa-solid fa-star"></i>
//                                     FEATURED</button></div>
//                             <div class="t57">Any Stream</div>
//                             <div class="t54">
//                                 <h4>Basic Introduction</h4>
//                             </div>
//                             <div class="t55">
//                                 <div class="t46"></div>
                               
//                             </div>
//                             <div><button class="t56">Core Programming</button></div>
//                         </div>
//                     </div>
                    
                    






//                     <div class="col-sm-0 col-md-4 l5">
//                         <div>
//                             <div>
//                             <iframe width="480" height="250" src="https://www.youtube.com/embed/98BzS5Oz5E4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//                                 <div class="t59">
                                    
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="t52">
//                             <div><button class="t53"><i class="fa-solid fa-star"></i>
//                                     FEATURED</button></div>
//                             <div class="t57">Any Stream</div>
//                             <div class="t54">
//                                 <h4>MERN Stack Tutorial</h4>
//                             </div>
//                             <div class="t55">
//                                 <div class="t46"></div>
                               
//                             </div>
//                             <div><button class="t56">Core Programming</button></div>
//                         </div>
//                     </div>



//                     <div class="col-sm-10 col-md-4 l5">
//                         <div>
//                             <div>
//                             <iframe width="480" height="250" src="https://www.youtube.com/embed/BNN4o4gnSF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//                                 <div class="t59">
                                    
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="t52">
//                             <div><button class="t53"><i class="fa-solid fa-star"></i>
//                                     FEATURED</button></div>
//                             <div class="t57">Any Stream</div>
//                             <div class="t54">
//                                 <h4>MERN app</h4>
//                             </div>
//                             <div class="t55">
//                                 <div class="t46"></div>
                                
//                             </div>
//                             <div><button class="t56">Core Programming</button></div>
//                         </div>
//                     </div>



//                     <div class="col-sm-0 col-md-3 0">
//                         <div>
//                             <div>
//                             <iframe width="380" height="250" src="https://www.youtube.com/embed/fSmp7Cv-c_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//                             {/* <img src={seven} height="auto" width="100%"/> */}
//                                 <div class="t59">
                                    
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="t52">
//                             <div><button class="t53"><i class="fa-solid fa-star"></i>
//                                     FEATURED</button></div>
//                             <div class="t57">Any Stream</div>
//                             <div class="t54">
//                                 <h4>Prerequisite to learn MERN</h4>
//                             </div>
//                             <div class="t55">
//                                 <div class="t46"></div>
                             
//                             </div>
//                             <div><button class="t56">Core Programming</button></div>
//                         </div>
//                     </div>


//                     <div class="col-sm-12 col-md-4 l5">
//                         <div>
//                             <div>
//                             <iframe width="480" height="250" src="https://www.youtube.com/embed/BSO9C8Z-YV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//                                 <div class="t59">
                                    
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="t52">
//                             <div><button class="t53"><i class="fa-solid fa-star"></i>
//                                     FEATURED</button></div>
//                             <div class="t57">Any Stream</div>
//                             <div class="t54">
//                                 <h4>Programming In C</h4>
//                             </div>
//                             <div class="t55">
//                                 <div class="t46"></div>
                                
//                             </div>
//                             <div><button class="t56">Core Programming</button></div>
//                         </div>
//                     </div>
                    
//                     <div class="col-sm-12 col-md-4 l5">
//                         <div>
//                             <div>
//                             <iframe width="480" height="250" src="https://www.youtube.com/embed/IQlMX5ZoHmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//                                 <div class="t59">
                                    
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="t52">
//                             <div><button class="t53"><i class="fa-solid fa-star"></i>
//                                     FEATURED</button></div>
//                             <div class="t57">Any Stream</div>
//                             <div class="t54">
//                                 <h4>Programming In C</h4>
//                             </div>
//                             <div class="t55">
//                                 <div class="t46"></div>
                                
//                             </div>
//                             <div><button class="t56">Core Programming</button></div>
//                         </div>
//                     </div>




                    
//                 </div>
//             </div>


            
//         </>
//     )
// }

// export default Video
