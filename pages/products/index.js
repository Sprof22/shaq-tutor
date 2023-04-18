import { StaticGenerationAsyncStorageWrapper } from "next/dist/server/async-storage/static-generation-async-storage-wrapper"
import Link from "next/link"


const Products = () => {
    return (
      <div>
        <Link href={'products/product1'}>Product 1</Link>
        <Link href={'products/product2'}>Product 2</Link>
        <Link href={'products/product3'}>Product 3</Link>
      </div>
    )
    
  }
  export default Products
