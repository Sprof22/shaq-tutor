import { useRouter } from "next/router";

function PostItem({post}) {
    // const router = useRouter()
    // if(router.isFallback){
    //     return(
    //         <div>
    //             <h1>Loading...</h1>
    //         </div>
    //     )
    // }
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

//   const paths = data.map(path => {
//     return (
//         {params: {postId: `${path.id}`}}
//     )
//   })

    return {
        // paths,
        paths: [
            {params: {postId : '1'}},
            {params: {postId : '2'}},
            {params: {postId : '3'}},
        ],
        fallback: "blocking" //the possible values of fallback are false, here the 404 page is rendered if the page is not preRendered, then true: here a UI in the condition router.isFallback is rendered and finally blocking here the UI freezes until HTML is ready
    }
}