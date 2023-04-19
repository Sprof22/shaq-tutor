
function PostItem({post}) {
    
  return (
    <div>
        <h1>{post.id}{post.title}</h1>
    </div>
  )
}

export default PostItem

export async function getStaticProps(context) {
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();
  


    return {
      props: {
        post: data,
      },
    };
  }

export async function getStaticPaths(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map(path => {
    return {
        params: {postId: `${ path.id}`}
    }
  })
    return{
        paths,
        // paths: [
        //     {params: {postId : '1'}},
        //     {params: {postId : '2'}},
        //     {params: {postId : '3'}},
            
        // ],
        fallback: "blocking" //fallback value can be false(this will throw and error page for values not prerendered), true(this will show a UI denoted in the condition router.isFallback), and blocking (this will freeze the page until data is ready)
    }
}