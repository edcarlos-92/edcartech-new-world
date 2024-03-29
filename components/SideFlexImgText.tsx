/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function SideFlexImgText(props:any) {

    const {srcImg,h1Text,ptext,aText,dateText,imgClasses,h1Classes,pClasses,aClasses} = props;

  return (
   

        <div className="flex items-center space-x-5 pt-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    //className="h-16 w-16 rounded-full"
                    className={imgClasses}
                    src={srcImg}
                    //src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt=""
                  />
                  <span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h1 className={h1Classes}>{h1Text}</h1>{/* text-gray-900 */}
                <p className={pClasses}>{/* text-gray-500 */}
                     {ptext}
                  <a href="#" className={aClasses}>{/* text-gray-900 */}
                    {aText}
                  </a>{' '}
                    {dateText}
                  {/* on <time dateTime="2020-08-25">August 25, 2020</time> */}
                </p>
              </div>
            </div>

  )
}
