import React from "react";
//import Typical from "react-typical";//type@react-typical
import { ReactTypical } from '@deadcoder0904/react-typical'
//import ScrollService from "../../../utils/ScrollService";
//import "./Profile.css";
/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, DownloadIcon } from '@heroicons/react/outline'
import { Button, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

//import useRouter from "next/router";



const features = [
    {
      name: 'Competitive exchange rates',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: GlobeAltIcon,
    },
    {
      name: 'No hidden fees',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ScaleIcon,
    },
    {
      name: 'Transfers are instant',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: LightningBoltIcon,
    },
    {
      name: 'Mobile notifications',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: AnnotationIcon,
    },
  ]



export default function Profile() {

    const router = useRouter();

  return (
        <>


    <div className="pt-10 font-sans">{/* bg-white */} 
        <main>
            {/* Hero section  */}
            <div className="relative pb-5">
                <div className="absolute inset-x-0 bottom-0 h-1/2 " />{/* bg-gray-100 */}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                    
                    {/* <div className="absolute inset-0">
                    <img
                        className="h-full w-full object-fill"
                        src="/assets/images/pages/test.png"     
                        alt="EDCARTECH IT SOLUTIONS"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 mix-blend-multiply" />
                    </div> */}


                    <div className="pb-5">
                        <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block ">CARLOS SEMEHO EDORH </span>
                            {/* <span className="block text-indigo-200">you much closer to Technology</span> */}
                        </h1>
                    </div>
                                
                    <div className="pt-14 pb-10 text-4xl">




                    <div className="profile-container">
                        <div className="profile-parent">
                            <div className="profile-details">
                                
                                {/* <div className=""> */}
                                    <span className="">
                                        <h1>Pationate Computer Engineer 😎 </h1>
                                        {/* <h1> Full Stack Developer 💻 </h1> */}
                                        {/* <h1> Experience MERN stack Dev 📱 </h1>
                                        <h1> Full Stack Developer 💻 </h1> */}
                                    </span>
                                {/* </div> */}

                                <div className="profile-details-role">
                                    {/* <span className="primary-text p-0">
                                        {" "}
                                        <div>
                                            <ReactTypical
                                            loop={Infinity}
                                            steps={[
                                                "Enthusiastic  😎",
                                                1000,
                                                "Full stack  💻",
                                                1000,
                                                "Mern stack  📱",
                                                1000,
                                                "Cross Platform  🔴",
                                                1000,
                                                "React/React  🌐",
                                                1000,
                                            ]}
                                            wrapper="div"
                                            />
                                        </div>
                                    </span> */}
                                    
                                    <span className="profile-role-tagline">
                                    Years of Experience building React,Node,PHP,Wordpress,CodeIgniter etc... applications.
                                    </span>
                                </div>

                            {/* <div className="profile-options"> */}


                            <Grid.Container gap={2}>
                                <Grid>
                                    <Button 
                                        bordered 
                                        color="gradient" 
                                        auto
                                        onClick={()=>{router.push(`/projects`)}}
                                        >
                                            View Projects
                                    </Button>
                                </Grid>

                                <Grid>
                                    <a
                                        href="ehizcv.pdf"
                                        download="Ehiedu Ehizcv.pdf"
                                        type="button"
                                        className="pr-5 relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-900 shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <DownloadIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                        <span>Get Resume</span>
                                    </a> 
                                </Grid>

                                {/* <Grid>
                                    <a
                                        href="ehizcv.pdf"
                                        download="Ehiedu Ehizcv.pdf"
                                        type="button"
                                        className="pr-5 relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-900 shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <DownloadIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                        <span>Get Resume</span>
                                    </a>  
                                </Grid> */}

                            </Grid.Container>
      



                            

                           

                                {/* <button className="btn primary-btn"> Hire Me </button>
                                <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                                <button className="btn highlighted-btn">Get Resume</button>
                                </a> */}


                                 

                            {/* </div> */}
                        </div>
                            
                            <div className="profile-picture">
                                <div className="profile-picture-background"></div>
                            </div>
                        </div>
                    </div>

                        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">   
                            <div className="grid grid-cols-2 gap-4 ">      
                                <div className="flex react-typical" > 
                                    <ReactTypical
                                    
                                        steps={[
                                            'Pationate Computer Engineer 😎',2000,
                                            'Full Stack Developer 💻',2000,
                                            'Experience MERN stack Dev 📱 ',2000,
                                            'Experience in PHP Frameworks 🌐',2000,     
                                        ]}
                                        wrapper="div"
                                        loop={Infinity}
                                    />
                                </div>


                                <div className="flex">
                                    
                                <div className="profile-picture">
                                    <div className="profile-picture-background"></div>
                                </div>

                                </div>
                            </div>                           
                        </div> */}












                    </div>





                </div>
                </div>
            </div>
        </main>
    </div>


    {/* <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Ehiedu</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <ReactTypical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Mern stack Dev 📱",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            // onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div> */}

<div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why get me involve ?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
</div>




    





        </>
        
       
  );
}
