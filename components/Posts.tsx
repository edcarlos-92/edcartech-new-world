/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { CopyBlock } from "react-code-blocks";

export default function Posts(props:any) {

    const {posts}= props 
    //const heroPost = posts.edges[0]?.node
    const heroPost = posts.edges
    console.log(`heroPost`,heroPost)
    //console.log(`Posts`,posts.edges.node.author);
    // console.log(heroPost.excerpt)
    // console.log(heroPost.slug)
    // console.log(heroPost.id)
    // console.log(heroPost.author.node.name)
    // console.log(heroPost.author.node.avatar.url)
    // console.log(heroPost.featuredImage.node.sourceUrl)
    // console.log(heroPost.date)

  return (
    <div>
        <div className="grid grid-clos-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6 "> {/* bg-gray-100 */}

            {heroPost.map( (post:any) =>(
               
                // <h1 key={post.slug}>{post.author.node.name}</h1>
                <Link key={post.node.id} href={`/posts/${post.node.slug}`}>
                    <div className="border rounded-lg group cursor-pointer overflow-hidden">
                        <img 
                        className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" 
                        //src={urlFor(post.mainImage).url()} 
                        src={post.node.featuredImage.node.sourceUrl} 
                        alt="featuredImage" 
                        />
                    
                        <div className="flex justify-between p-5 "> {/* bg-white */}
                            <div >
                                <p className="font-bold">{post.node.title}</p>{/* font-bold */}
                                <h4 className="text-sm font-light" dangerouslySetInnerHTML={{ __html: post.node.excerpt.substring(0, 50) }} />
                                {/* <p className="text-xs">{post.excerpt} by {post.author?.node.name}</p> */}
                                {/* <p className="text-xs">Post by {post.author?.node.name}</p> */}
                            </div>
                            <img className="h-12 w-12 rounded-full" src={post.node.author?.node.avatar.url}  alt="author" />
                        </div>
                    </div>
                </Link>

            ))}
        </div>

    </div>
  )
}
