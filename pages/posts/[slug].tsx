/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState ,useRef} from 'react'
import MainMenu from '../../components/MainMenu'
import {HumanDateTime} from '../../utils'
import { useForm,SubmitHandler } from "react-hook-form";
import SideFlexImgText from '../../components/SideFlexImgText'
import { AnnotationIcon } from '@heroicons/react/outline'
import { API_URL, getAllPostsWithSlug, getDetailPosts, refeshDetailPosts } from '../../lib/apolloGraphQl'
import { useRouter } from 'next/router'
import { CopyBlock, dracula } from 'react-code-blocks'
import formatPost from '../../utils/formatPost'
import { CREATE_POST_COMMENT_QUERY, POST_DETAILS_QUERY } from '../../lib/queries/fragments/post';
import { ApolloCache, ApolloQueryResult, DocumentNode, ObservableQuery, useMutation, useQuery } from '@apollo/client';

import useSWR from 'swr'

import { Button, Loading, Spacer } from "@nextui-org/react";

interface IFormInput{
    id:string;
    name:string;
    email:string;
    comment:string;
}

const codeSample = `const [submitted, setSubmited] = useState(false);
const {post}=props;
const {register,handleSubmit,
formState:{errors}}=useForm<IFormInput>();
console.log(post)`;

export default function SlugPost( props:any) {

    let {post}=props;
    //post = post[0];
    //console.log(`SlugPost`,post)
    const router = useRouter()
   
    const [submitted, setSubmited] = useState(false);
    
    //const {register,handleSubmit,formState:{errors}}=useForm<IFormInput>();
    const {register,handleSubmit,formState:{errors},getValues}=useForm();
    //const onsubmit:SubmitHandler<IFormInput> = async (data:any)=>{


        
       const refetchDetailPost = useQuery(POST_DETAILS_QUERY,{ variables: { 'id':post.slug},});
       post = refetchDetailPost?.data?.post
       //console.log(` New Post detailPost`, post)

       
        const {id,name,email,comment}= getValues();
        const [onsubmit, { data, loading, error }]:any  = useMutation(CREATE_POST_COMMENT_QUERY,{ variables: { 'id':parseInt(id)  ,'name':name,'email':email,'comment':comment },});
        //console.log(`onsubmit Data body comment`,comment)
        //if (loading) return <h1 className=' grid place-items-center h-50 text-blue-500'>Submitting...</h1>;
        if (loading) return <div className='grid place-items-center h-screen' ><Loading size="xl">Submitting...</Loading> </div> ;
        if (error) return `Submission error! ${error.message}`;
        //console.log(`Data To be submitted`,data)
      
  return ( 

        <>
        
        {post ? 
        
        
                <main>
                    
                <MainMenu />
                
                    {/* <img 
                        className="w-full h-40 object-cover" 
                        src={urlFor(post.mainImage).url()} 
                        alt="" 
                    />  */}
                    
                <article className="max-w-3xl mx-auto p-5 ">

                    <img 
                        className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" 
                        //src={urlFor(post.mainImage).url()} 
                        src={post?.featuredImage.node.sourceUrl} 
                        alt="featuredImage" 
                    />

                        {/* <CopyBlock
                            language={`javascript`}
                            text={codeSample}
                            showLineNumbers={true}
                            theme={dracula}
                            wrapLines={true}
                            codeBlock
                        /> */}
                        <br />
                    
                    <h1 className="text-4xl mt-10 mb-5" >{post?.title}</h1>
                
                    <span className="font-light leading-7" dangerouslySetInnerHTML={{ __html: formatPost(post)}} />
                
                    <SideFlexImgText 
                        h1Classes="text-2xl font-bold"
                        pClasses="text-sm font-medium"
                        imgClasses="h-16 w-16 rounded-full"
                        aClasses="text-blue-900 pl-2"
                        srcImg={post?.author?.node.avatar.url}  
                        h1Text={post?.author.node.name} 
                        ptext={`Blog Post By`}
                        aText={post?.author.node.name} 
                        dateText={ ` - Published at ${HumanDateTime(post?.date)}` }
                    />

                </article>         

                <hr className="max-w-lg my-5 mx-auto border-yellow-500" />

                {submitted ? (

                    <div className="flex flex-col p-10 my-10 bg-yellow-500 text-white max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold">Thank you for Submitting your comment!</h3>
                        <p>Once it has been approved, it will appear bellow!</p>
                    </div>

                ) : (

                    <form 
                    //onSubmit={handleSubmit(onsubmit)}
                    onSubmit={handleSubmit(onsubmit)}

                    // onSubmit={
                    //     handleSubmit(e => {
                    //     //e.preventDefault();
                    //     onsubmit({ variables: { 'id':1  ,'name':"Edorh Carlos",'email':"edcartech1@gmail.com",'comment':"Confused Comment Submitting" }                     });
                    //   })
                    // }
                    
                    className="flex flex-col p-5 max-w-2xl mx-auto mb-10">

                        <h3 className="text-sm text-yellow-500">Enjoy This Article?</h3>
                        <h4 className="text-3xl font-bold">Leave a comment Below</h4>
                        <hr className="py-3 mt-2"></hr>

                        <input 
                            {...register("id")}
                            name="id"
                            type="hidden"
                            value={post?.postId}
                            //ref={node => {name = node;}}
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


                    <span className="inline-flex rounded-md shadow ">
                    
                    {/* <input 
                        className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-900 shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
                        type="submit"
                        // icon={ <AnnotationIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />}
                    /> */}

                    <Button
                    //className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-900 shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"        
                    icon={<AnnotationIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />} 
                    color="warning"
                    type='submit'
                    flat
                    >
                    Submit Comment For Review
                    </Button>

                    </span>


                    {/* <span className="inline-flex rounded-md shadow ">  
                    <a
                        //href="#"
                        //type="button"
                        type="submit"
                        className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-900 shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <AnnotationIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        <span>Submit</span>
                    </a>   
                    </span> */}
                        

                </form>
                )}

                {/* All Comments  About the post*/}

                <div className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-yellow-500 shadow space-y-2">
                    <h3 className="text-4xl">Comments</h3>
                    <hr className="pb-2" />

                    {post?.comments.nodes.map((comment:any)=>(

                        <div key={comment.commentId}>

                        {/* <p className="">
                            <span className="text-yellow-500">{comment.author.node.name}</span>  <span dangerouslySetInnerHTML={{ __html: comment.content }} />
                        </p>  */}


                        <SideFlexImgText 
                            h1Classes="text-l font-bold text-yellow-500"
                            pClasses="text-sm font-medium"
                            imgClasses="h-12 w-12 rounded-full"
                            //aClasses="text-blue-900 pl-2"
                            //srcImg={post?.author?.node.avatar.url}
                            srcImg={comment?.author?.node.avatar.url}  
                            h1Text={comment.author.node.name} 
                            ptext={<span dangerouslySetInnerHTML={{ __html: comment.content }} />}
                            //aText={post?.author.node.name} 
                            //dateText={ comment.author.node.date}
                        />



                        </div>

                        
                    ))}

                </div>

            </main>
        
        
        
        : <div className='grid place-items-center h-screen' ><Loading size="xl">Loading...</Loading> </div>}
        
       
        
        
        </>

       


    
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

      //fallback: true,
      fallback: false,
    }
  }


 
  //export async function getServerSideProps({ params }:any) {
 export async function getStaticProps({ params }:any) {

    //console.log('getStaticProps params :-->> ', params);
    //console.log('REQUEST PARAM :-->> ', params.slug);

    const postResult = await getDetailPosts(params.slug);
    //const post = JSON.stringify(postResult.nodes);
    const post = postResult;//postResult.nodes;
    //console.log('RESPONSE NODE :-->> ', post);

    return {
      props: {post}
      //{
        //post: data.post,
        //posts: data.posts,
      //},
    }
  }
