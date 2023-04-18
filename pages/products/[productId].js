import { useRouter } from 'next/router'
import React from 'react'

const ProductDetails = () => {
    const router = useRouter()
    const productId = router.query.productId
    console.log(productId, "this is the router")
  return (
    <div>Product Details about {productId}</div>
  )
}

export default ProductDetails