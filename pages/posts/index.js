function PostList({ posts }) {
  return (
    <div>
      <h1>List of Posts</h1>
      {posts.map(post => {
        return (
            <div key={post.id}>
                <h1>{post.id} {post.title}</h1>
                <hr />
            </div>
        )
      })}
    </div>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
