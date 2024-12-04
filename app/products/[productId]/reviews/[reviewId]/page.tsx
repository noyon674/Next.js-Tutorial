import { notFound } from 'next/navigation'
import React from 'react'

function page({params}:
    {
        params: {
            productId: string,
            reviewId: string
        }
    }
) {
  if(parseInt(params.reviewId) > 100){
    notFound()
  }
  return (
    <div>Review details productID {params.productId} reviews {params.reviewId}</div>
  )
}

export default page