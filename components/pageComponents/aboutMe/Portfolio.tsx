import React from "react";
import { ReactTypical } from '@deadcoder0904/react-typical'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, DownloadIcon } from '@heroicons/react/outline'
import { Button, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Portfolio() {

    const router = useRouter();

    if (typeof window !== "undefined") {
        // browser code
    }


  return (

    <>
    
    


    <div className="pt-10 font-sans pb-10">{/* bg-white */} 
        <main>
            {/* Hero section  */}
            <div className="relative pb-5">
                <div className="absolute inset-x-0 bottom-0 h-1/2 " />{/* bg-gray-100 */}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">

                        <div className="pb-5">
                            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                <span className="block ">CARLOS SEMEHO EDORH </span>
                                {/* <span className="block text-indigo-200">you much closer to Technology</span> */}
                            </h1>
                        </div>
                                    
                        <div className="pt-14  text-4xl portfolio-top">
                            <div className="profile-container">
                                <div className="profile-parent">
                                    <div className="profile-details">

                                            <div className="home" id="home">
                                                <div className="max-width">
                                                    <div className="home-content">
                                                        <div className="">Pationate Computer Engineer 😎 </div>
                                                        {/* <div className="text-2">Pationate Computer Engineer 😎 </div> */}
                                                        <div className="text-3">Experienced In <span className="typing"></span></div>
                                                        {/* <a href="/projects">Hire me</a>  <a href="#">Hire me</a> */}

                                                            {/* <br/> */}
                                                        <Grid.Container gap={2}>
                                                            <Grid>
                                                                <Button bordered  color="gradient"  auto onClick={()=>{router.push(`/projects`)}} >
                                                                    View Projects
                                                                </Button>
                                                            </Grid>                                                
                                                            <Grid>
                                                                <Button bordered color="gradient" auto onClick={()=>{router.push(`ehizcv.pdf`)}}  >
                                                                {/* <a  href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">Get Resume</a> */}
                                                                    Get Resume
                                                                </Button>
                                                            </Grid>
                                                        </Grid.Container>

                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    
                                    <div className="profile-picture">
                                        <div className="profile-picture-background"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    
        {/* About Me Section */}
    <div>
        
        <div className="scroll-up-btn">
            <i className="fas fa-angle-up"></i>
        </div>
       
    
        {/* <!-- about section start --> */}
        <section className="about portfolio-about-me" id="about">
            <div className="max-width">
                <h2 className="title">About me</h2>
                <div className="about-content">
                    <div className="column left">
                        {/* <img src="../../../public/assets/images/aboutme/profile-picture.png" alt="" /> */}
                        <img src="/assets/images/aboutme/profile-picture.png" alt="" />
                    </div>
                    <div className="column right">
                        {/* <div className="text">I'm Carlos <span className="typing-2"></span></div> */}
                        <div className="text"><span className="typing-2"></span></div>
                        <p>Started coding far back in 2010 whilst in school offering Bachelor of science in Information and Communication Technology. Over the years used various Tech Stacks in C++, VB.Net, PHP,C# & JavaScript. worked with different companies in Education , Security, FinTech and Mining where in most cases i built systems from scratch to support company protocols. i gained experience in building applications like School Management System, Hospital Management System, Saving and Loan Management, Archive & Electronic Document Management System, Point Of Sale, E-Commerce and Web Applications. Currently a FullStack Developer in JavaScript (Node/React/Next.js), PHP(CodeIgniter & Laravel).</p>
                        <a href="#">Download My CV</a>
                    </div>
                </div>
            </div>
        </section>
    
        {/* <!-- services section start --> */}
        <section className="services portfolio-my-services" id="services">
            <div className="max-width">
                <h2 className="title">My services</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-paint-brush"></i>
                            <div className="text">Web Design</div>
                            <p>Web Design is no exeption when it comes to my experience in building dynamic websites for any type of company</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-chart-line"></i>
                            <div className="text">IT training</div>
                            <p>We train all kinds of professionals who whish to Learn IT or dive into programming to supplement their skill set.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-code"></i>
                            <div className="text">Apps Design</div>
                            <p>From converting existing web app to mobile or building a fully fledged web app from scratch</p>
                        </div>
                    </div>
                   </div>
                </div>
        </section>
    
        {/* <!-- skills section start --> */}
        <section className="skills portfolio-my-skills" id="skills">
            <div className="max-width">
                <h2 className="title">My skills</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">My creative skills & experiences.</div>
                        <p>After trying out a lot of technologies in different programming languages some fruitful and some not really in demand so they have been relegated. frameworks are just platforms to facilitate the use of these programming languages and i have interacted with quite a few of them and to mention like React,Redux for State Mnanagement, Context API, GraphQl, Building REST API with node and Managing databases like MySql, MongoDb, MSSQL, PostgreSql  i pride myself of doing what it takes to build a real world application in these various languages and how competent i feel about them.</p>
                        {/* <a href="#">Read more</a> */}
                    </div>
                    <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>HTML</span>
                                <span>80%</span>
                            </div>
                            <div className="line html"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>CSS</span>
                                <span>60%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>JavaScript(React/Next.js/Node)</span>
                                <span>60%</span>
                            </div>
                            <div className="line js"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>PHP(Wordpress,CodeIgniter)</span>
                                <span>70%</span>
                            </div>
                            <div className="line php"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>MySQL</span>
                                <span>60%</span>
                            </div>
                            <div className="line mysql"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Mongo Db</span>
                                <span>40%</span>
                            </div>
                            <div className="line mongo"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        {/* <!-- teams section start --> */}
        <section className="teams" id="teams">
            <div className="max-width">
                <h2 className="title">My team</h2>
                <div className="carousel owl-carousel">
                    <div className="card">
                        <div className="box">
                            <img src="/assets/images/aboutme/profile-picture.png" alt="" />
                            <div className="text">Paul Atsu</div>
                            <p>IT Project supervisor and Instructor. Expert in Stock Makets </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <img src="/assets/images/aboutme/profile-picture.png" alt="" />
                            <div className="text">Opoku Mawuli</div>
                            <p>Web Developer / Instructor / IT Support & Data Analyst</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <img src="/assets/images/aboutme/profile-picture.png" alt="" />
                            <div className="text">James Darkey</div>
                            <p>Marketing Director / Project Manager & Consultant</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    
        {/* <!-- contact section start --> */}
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contact me</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Get in Touch</div>
                        <p>Kindly reach out to me if interested in any of my qualities in this portfolio. am open to any form of scrutinization that will convince you of my skills and expertise to prove myself right</p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Edorh Carlos</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">Accra, Ghana</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">edcartech@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">Message me</div>
                        <form action="#">
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" placeholder="Name" required />
                                </div>
                                <div className="field email">
                                    <input type="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Subject" required />
                            </div>
                            <div className="field textarea">
                                <textarea  placeholder="Message.." required /> 
                            </div>
                            <div className="button-area">
                                <button type="submit">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    
       
      
    
    
    
    
    
    
    
    
        </div>
    
    
    
    
    </>

  )
}
