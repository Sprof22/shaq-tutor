
function NewArticleList({newsArticles}) {
  return (
    <div>
        <h1>List of News Articles</h1>
        {newsArticles.map(article => {
            return (
                <div key={article.id}>
                    <h1>{article.id} {article.title} {article.category}</h1>
                    <p>{article.description}</p>
                </div>
            )
        })}
    </div>
  )
}

export default NewArticleList

export async function getServerSideProps(){
    const response = await fetch ('http://localhost:3004/news');
    const data = await response.json();

    return {
        props: {
            newsArticles: data
        }
    }
}