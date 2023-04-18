import Link from "next/link"

function PostList({posts}) {
  return (
    <div>
        <h1>Post Lists</h1>
        {posts.map(post => {
          return (
            <div href={`posts/${post.id}`}>
              <div>
                {post.id}{post.title}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default PostList

export async function getStaticProps(){
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            posts: data
        }
    }
}