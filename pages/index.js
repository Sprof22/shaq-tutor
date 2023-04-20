import Link from "next/link";


export default function Home() {
  return (
    <>
      <div>
      <h1>Hey</h1>
      <Link href={'/products'}>Product List</Link>
      <Link href={'/posts'}>Post Lists</Link>
      </div>
    </>
  )
}
