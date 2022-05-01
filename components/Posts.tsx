import Link from 'next/link'
import React from 'react'

export default function Posts(props:any) {

    const {posts,urlFor}= props

  return (
    <div>
        <div className="grid grid-clos-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6 "> {/* bg-gray-100 */}

            {posts.map( (post:any) =>(

                    <Link key={post._id} href={`/post/${post.slug.current}`}>
                    <div className="border rounded-lg group cursor-pointer overflow-hidden">
                        <img 
                        className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" 
                        src={urlFor(post.mainImage).url()} 
                        alt="" 
                        />
                    
                        <div className="flex justify-between p-5 "> {/* bg-white */}
                            <div >
                                <p className="text-lg font-bold">{post.title}</p>
                                <p className="text-xs">{post.description} by {post.author.name}</p>
                            </div>
                            <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()} alt="" />
                        </div>
                    </div>
                </Link>

            ))}
        </div>

    </div>
  )
}
