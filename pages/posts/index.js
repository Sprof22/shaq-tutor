import Link from 'next/link'
import React from 'react'

function PostList({posts}) {
  return (
    <div>
        <h1>Here are the posts you requested</h1>
        {posts.map(post => {
            return (
             <Link href={`/posts/${post.id}`} key={post.id}>
                <p>{post.id} {post.title}</p>
             </Link>
            )
        })}m 
    </div>
  )
}

export default PostList

export async function getStaticProps(){

    const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    
    return {
        props: {
            posts: data.slice(0,3)
        }
    }
}