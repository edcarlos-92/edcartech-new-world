import React,{useContext} from 'react'
import { useRouter } from 'next/router'
//import { Link, Paper,} from '@mui/material'
//import Carousel from 'react-material-ui-carousel';
//import {frontEndSiteInfo} from "shared/constants/AppConst";
import NextLink from 'next/link';
//import { Store } from 'frontend/utils/Store';
import { useStyles } from '../utils/styles';


import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation , EffectCoverflow, Pagination } from "swiper";

export default function FeaturedSliders(props:any) {

    const classes = useStyles;
    //const {state,dispatch} = useContext(Store);
    const router = useRouter();
    const {data} = props;
    //const {siteHomeLink} = frontEndSiteInfo;
  
        console.log('coverflow',data);

  return ( 
    <>
    {data ?

        // <div>
            // Featured
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  //loopedSlides={6}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                  }}
                  pagination={true}
                  loop={true}
                  //pagination={{ clickable: true, dynamicBullets: true }} 
                  modules={[Autoplay,Navigation,EffectCoverflow, Pagination]}
                  className="swiper mySwiper"
                  style={classes.swiper}       
        
                >
                  
                    {data.map((service:any) => (
                        <NextLink
                            key={service._id}
                            //href={`${siteHomeLink}/product/${product.slug}`}
                            href="#"
                            passHref
                        >
                            <a>
                             {/* <img src={product.featuredImage}  alt={product.name} style={classes.featuredImage} /> */}
                                    Hello
                                <SwiperSlide  style={classes.swiperSlide} > {/*          onClick={()=>{router.push(`${siteHomeLink}/product/${product.slug}`)}} */}
                                    <img style={classes.swiperSlideImg} src={service.featuredImage}  alt={service.name}  /> {/*  */}
                                </SwiperSlide>
                                
                            </a>


                        </NextLink>
                    ))}  
                  
                </Swiper>

        // </div> 

  

    :'No Records Found'}
    </>
  )
}
