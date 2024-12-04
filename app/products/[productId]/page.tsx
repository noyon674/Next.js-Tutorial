import React from 'react'

function page({params}:{
    params: {productId: string}
}) {
  return (
    <div>Product Details {params.productId}</div>
  )
}

export default page