

function PostItem({post}) {
  return (
    <div>
        <h1>Requested Deets for{post.id}</h1>
        
        
    </div>
  )
}

export default PostItem

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await response.json()

    return {
        props: {
            post: data
        }
    }
}

export async function getStaticPaths(){
    return {
        paths: [
            {
                params: {postId: "1"}
            },
            {
                params: {postId: "2"}
            },
            {
                params: {postId: "3"}
            }
        ],
        fallback: false
    }
}

