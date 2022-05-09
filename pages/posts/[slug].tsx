import { GetStaticProps } from 'next'
import React, { useEffect, useState ,useRef} from 'react'
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
import { getAllPostsWithSlug, getDetailPosts } from '../../lib/apolloGraphQl'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { CopyBlock, dracula } from 'react-code-blocks'
import formatPost from '../../utils/formatPost'

interface IFormInput{
    _id:string;
    name:string;
    email:string;
    comment:string;
}

// interface PostProps{
//     post:Post
// }


const codeSample = `const [submitted, setSubmited] = useState(false);
const {post}=props;
const {register,handleSubmit,
formState:{errors}}=useForm<IFormInput>();
console.log(post)`

export default function SlugPost( props:any) {


    let {post}=props;
    post = post[0];
    //console.log(`props At Shore`,post)
    //console.log(`postRe At Shore`,postRe)

    const router = useRouter()
   
    const [submitted, setSubmited] = useState(false);
    
    const {register,handleSubmit,formState:{errors}}=useForm<IFormInput>();
   

    // console.log(`In the View Now`,post.id)
    // console.log(`In the View Now`,post.author.node.name)
    // console.log(`In the View Now`,post.date)
    // console.log(`In the View Now`,post.content)
    // console.log(`In the View Now`,post.title)
    // console.log(`In the View Now`,post.title)

    const onsubmit:SubmitHandler<IFormInput> = async (data:any)=>{
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


useEffect(() => {

  }, []) 


  //const htmlHTest = hljs.highlight(`<h1>Hello World!</h1> </br> <pre><code>${codeSample}</code></pre>`, {language: 'javascript'}).value


  //hljs.initHighlightingOnLoad();


  return (

        <main>
            
            <MainMenu />

            {/* <img 
                className="w-full h-40 object-cover" 
                src={urlFor(post.mainImage).url()} 
                alt="" 
            /> */}
                
            <article className="max-w-3xl mx-auto p-5 ">

                    {/* <CopyBlock
                        language={`javascript`}
                        text={codeSample}
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    /> */}
                    <br />
                
                <h1 className="text-3xl mt-10 mb-3" >{post.title}</h1>
            
                <span className="text-xl font-light" dangerouslySetInnerHTML={{ __html: formatPost(post)}} />
               
                <SideFlexImgText 
                    srcImg={post.author?.node.avatar.url}  
                    h1Text={post.author.node.name} 
                    ptext={`Blog Post By`}
                    aText={post.author.node.name} 
                    dateText={ ` - Published at ${HumanDateTime(post.date)}` }
                />

            </article>         

            <hr className="max-w-lg my-5 mx-auto border-yellow-500" />

            {submitted ? (

                <div className="flex flex-col p-10 my-10 bg-yellow-500 text-white max-w-2xl mx-auto">
                    <h3 className="text-3xl font-bold">Thank you for Submitting your comment!</h3>
                    <p>Once it has been approved, it will appear bellow!</p>
                </div>

            ) : (

                <form onSubmit={handleSubmit(onsubmit)}  className="flex flex-col p-5 max-w-2xl mx-auto mb-10">

                    <h3 className="text-sm text-yellow-500">Enjoy This Article?</h3>
                    <h4 className="text-3xl font-bold">Leave a comment Below</h4>
                    <hr className="py-3 mt-2"></hr>

                    <input 
                        {...register("_id")}
                        name="id"
                        type="hidden"
                        value={post.id}
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

                {post.comments.nodes.map((comment:any)=>(

                    <div key={comment.commentId}>
                    <p className="">
                        <span className="text-yellow-500">{comment.author.node.name}</span>  <span dangerouslySetInnerHTML={{ __html: comment.content }} />
                    </p> 
                    </div>

                ))}

            </div>

        </main>
    
  )
}

/*
export async function getStaticProps({ params, preview = false, previewData }:any) {
    const data = await getPostAndMorePosts(params.slug, preview, previewData)
    return {
      props: {
        preview,
        post: data.post,
        posts: data.posts,
      },
    }
  }
*/

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug()
  
    console.log('allPosts Front End Edges :-->> ', allPosts.edges);
    console.log('allPosts Front End Nodes :-->> ', allPosts.node);

    return {
      paths: allPosts.edges.map(({ node }:any) => `/posts/${node.slug}`) || [],
    //   paths: allPosts.edges.map(({ slug }:any) => {
    //     return {
    //         params:{slug}
    //     }
    //   })

      fallback: true,
      //fallback: true,
    }
  }


 
export async function getStaticProps({ params }:any) {

    //console.log('getStaticProps params :-->> ', params);
    //console.log('REQUEST PARAM :-->> ', params.slug);

    const postResult = await getDetailPosts(params.slug);
    //const post = JSON.stringify(postResult.nodes);
    const post = postResult.nodes;
    console.log('RESPONSE NODE :-->> ', post);

    return {
      props: {post}
      //{
        //post: data.post,
        //posts: data.posts,
      //},
    }
  }
