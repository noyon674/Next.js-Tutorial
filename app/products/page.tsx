import Link from 'next/link'
import React from 'react'

function page() {
  const productId = 100
  return (
    <div>
        <h2>Products List</h2>
        <ul>
            <li><Link href={`/products/${productId}`}>{productId}</Link></li>
            <li><Link href='/order-product'>order Product</Link></li>
        </ul>
    </div>
  )
}

export default page