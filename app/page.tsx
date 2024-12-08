import Link from "next/link"

function page() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/blog'>Blog</Link>
      <Link href='/products'>Products</Link>
    </div>
  )
}

export default page