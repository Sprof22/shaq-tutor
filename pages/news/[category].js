import React from 'react'

function NewsCategory({categoryData, category}) {
  return (
    <div>
    <h1>You are viewing the {category} Category</h1>
    {categoryData.map(article => {
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

export default NewsCategory

export async function getServerSideProps(context){
    const {params, res, req, query} = context
    console.log(query)
    const response = await fetch (`http://localhost:3004/news?category=${params.category}`);
    const data = await response.json();

    return {
        props: {
            categoryData: data,
            category: params.category
        }
    }
}