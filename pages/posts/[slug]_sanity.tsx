import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import Header from '../../components/unUsed/Header'
import Posts from '../../components/Posts'
import MainMenu from '../../components/MainMenu'
import { sanityClient,urlFor } from '../../sanity'
import { Post } from '../../sanitymedium/typings'
import {HumanDateTime} from '../../utils'
import PortableText from 'react-portable-text'
import { useForm,SubmitHandler } from "react-hook-form";
import SideFlexImgText from '../../components/SideFlexImgText'
import { AnnotationIcon } from '@heroicons/react/outline'


interface IFormInput{
    _id:string;
    name:string;
    email:string;
    comment:string;
}

interface PostProps{
    post:Post
}


const codeSample = `const [submitted, setSubmited] = useState(false);
const {post}=props;
const {register,handleSubmit,
formState:{errors}}=useForm<IFormInput>();
console.log(post)`

export default function SlugPost(props:PostProps) {

    const [submitted, setSubmited] = useState(false);
    const {post}=props;
    const {register,handleSubmit,formState:{errors}}=useForm<IFormInput>();
    console.log(post)

    const onsubmit:SubmitHandler<IFormInput> = async (data)=>{
        //console.log(data);
        fetch('/api/createComment',{
            method:'POST',
            body: JSON.stringify(data),
        }).then(()=>{
            console.log(data)
            setSubmited(true);
        }).catch((err)=>{
            console.log(err);
            setSubmited(false);
        })
    }



    const serializers = {
        types: {

            h1:(props:any)=>(<h1 className="text-2xl font-bold my-5" {...props} />),
            h2:(props:any)=>(<h1 className="text-2xl font-bold my-5" {...props} />),
            li:({children}:any)=>(<li className="ml-4 list-disc"> {children}</li>),
            link:({href,children}:any)=>(<a href={href} className="text-blue-500 hover:underline">{children}</a>),
            code: (props:any) => (
                <pre data-language={props.node.language}>
                    <code>{props.node.code}</code>
                </pre>
            )
        }
      }

  return (
    <main>
        
        <MainMenu />

        {/* <img 
            className="w-full h-40 object-cover" 
            src={urlFor(post.mainImage).url()} 
            alt="" 
        /> */}


            
        <article className="max-w-3xl mx-auto p-5 ">

            

            <h1 className="text-3xl mt-10 mb-3" >{post.title}</h1>
            <h2 className="text-xl font-light ">{post.description}</h2>{/* text-gray-500 */}
            {/* <div className="flex items-center space-x-2" >
                <img className="h-10 w-10 rounded-full" src={urlFor(post.author.image).url()} alt="" />
            </div> */}

            {/* <p className="font-extralight text-sm">Blog Post By <span className="text-green-600" >{post.author.name}</span> - Published at{" "} 
            {HumanDateTime(post._createdAt)}
            </p> */}

            <div>
                <PortableText
                className="mt-10 mb-5"
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={post.body}

                //blocks={post.body}
                //imageOptions={{fit: 'max'}}
                //{...client.config()}
                //{...code}
                serializers={serializers}



                //serializers={
                   //{
                    // h1:(props:any)=>(<h1 className="text-2xl font-bold my-5" {...props} />),
                    // h2:(props:any)=>(<h1 className="text-2xl font-bold my-5" {...props} />),
                    // li:({children}:any)=>(<li className="ml-4 list-disc"> {children}</li>),
                    // link:({href,children}:any)=>(<a href={href} className="text-blue-500 hover:underline">{children}</a>),
                    // //code:({props}:any) => (<pre>{props.node.code}</pre>),
                    //code:serializers.types.code,
                        // <pre data-language={props.language}>
                        //      {props.code}
                        //   <code>{props.code}</code>
                        // </pre>
                      //)  
                      
                    // code: {
                    // code: (props:any) => <pre><code>{props.node.code}</code></pre>
                    // }
                   //}
                //}
                
                />
            </div>

            <div>

            <pre className="break-words" >
                <code >{codeSample}</code>
            </pre>

            </div>

            <SideFlexImgText 
                srcImg={urlFor(post.author.image).url()}  
                h1Text={post.author.name} 
                ptext={`Blog Post By`} 
                aText={post.author.name} 
                dateText={ ` - Published at ${HumanDateTime(post._createdAt)}` }
            />

        </article>

        

        <hr className="max-w-lg my-5 mx-auto border-yellow-500" />



        {submitted ? (

            <div className="flex flex-col p-10 my-10 bg-yellow-500 text-white max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold">Thank you for Submitting your comment!</h3>
                <p>Once it has been approved, it will appear bellow!</p>
            </div>

            // <h1>Submitted</h1>
        ) : (


            <form onSubmit={handleSubmit(onsubmit)}  className="flex flex-col p-5 max-w-2xl mx-auto mb-10">

                <h3 className="text-sm text-yellow-500">Enjoy This Article?</h3>
                <h4 className="text-3xl font-bold">Leave a comment Below</h4>
                <hr className="py-3 mt-2"></hr>

                <input 
                    {...register("_id")}
                    name="_id"
                    type="hidden"
                    value={post._id}
                />

            <label className="block mb-5">
                <span className="">Name</span>
                <input 
                    {...register("name",{required:true})}
                    className="shadow border rounded py-2 px form-input mt-t block w-full  focus:ring outline-none text-black" placeholder='Carlos Edorh' 
                    type="text" 
                />
            </label>
        
            <label className="block mb-5">
                <span className="">Email</span>
                <input 
                    {...register("email",{required:true})}
                    className="shadow border rounded py-2 px form-input mt-t block w-full  focus:ring outline-none text-black" placeholder='example@edcartech.com' 
                    type="text" 
                />
            </label>

            <label className="block mb-5">
                <span className="">Comment</span>
                <textarea 
                    {...register("comment" ,{required:true})}
                    className="shadow border rounded py-2 px-3 form-textarea  mt-1 block w-full outline-none focus:ring text-black" 
                    placeholder='Comment Here' 
                    rows={8} 
                />
            </label>

            {/* Error will retuen when firld validation fails */}
            <div className="flex flex-col p-5">
                {errors.name && (<span className="text-red-500">-Name Field is required</span>)}
                {errors.email && (<span className="text-red-500">-Email Field is required</span>)}
                {errors.comment && (<span className="text-red-500">-Comment Field is required</span>)}
            </div>


            {/* <input 
                className="shadow bg-yellow-400 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold px-4 rounded cursor-pointer" 
                type="submit" 
            /> */}


            <span className="inline-flex rounded-md shadow ">  
              <a
                href="/contact"
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-900 shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <AnnotationIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                <span>Submit</span>
              </a>   
            </span>
                

        </form>
        )}

        {/* Comments */}

        <div className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-yellow-500 shadow space-y-2">
            <h3 className="text-4xl">Comments</h3>
            <hr className="pb-2" />

            {post.comments.map((comment)=>(

                <div key={comment._id}>
                 <p className="">
                    <span className="text-yellow-500">{comment.name}</span>: {comment.comment}
                 </p> 
                </div>

            ))}

        </div>

    </main>

    
  )
}

export const getStaticPaths = async () =>{
    const query = `*[_type == "post"]{
        _id,
        slug {
          current
        }
      }`;
      const posts = await sanityClient.fetch(query);
      const paths = posts.map((post:Post) =>({
          params:{
            slug:post.slug.current,
          }
      }))

      return {
          paths,
          fallback:"blocking"
      }

}


export const getStaticProps:GetStaticProps = async ({params})=>{

    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author ->{
         name,
         image
        },
        "comments": *[
          _type == "comment" &&
          post._ref ==^._id &&
          approved == true
          ],
        description,
        mainImage,
        slug,
        body
      }`;

      const post = await sanityClient.fetch(query, {slug: params?.slug,});

      if(!post){
          return {
            notFound:true
          };
      }

      return {
          props:{
              post,
            },
            revalidate:60, //after 60 second it will update the old cache version

      }

}