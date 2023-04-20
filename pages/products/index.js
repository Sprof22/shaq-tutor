import React from 'react'

function ProductLIst({products}) {
  return (
    <div>
        <h1>Here are the list of products</h1>
        {products.map(product => {
            return (
                <div key={product.id}>
                    <h1>{product.id} {product.title}</h1>
                    <p>{product.price} {product.description}</p>
                    <hr />
                </div>
            )
        })}
    </div>
  )
}

export default ProductLIst

export async function getStaticProps(){
    const response = await fetch ("http://localhost:3004/products")
    const data = await response.json()

    return {
        props: {
            products: data
        }
    }
}