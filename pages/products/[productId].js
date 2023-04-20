import { useRouter } from 'next/router'
import React from 'react'

function Product({product}) {
    const router = useRouter()

    if(router.isFallback){
        return (
            <h1>Loading...</h1>
        )
    }
  return (
    <div>
        <h1>{product.id} {product.title}</h1>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
    </div>
  )
}

export default Product

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch (`http://localhost:3004/products/${params.productId}`)
    const data = await response.json()

    return {
        props: {
            product: data
        }
    }
}

export async function getStaticPaths(){
    return{
        paths: [
            {
                params: {productId: "1"}
            }
        ],
        fallback: true
    }
}