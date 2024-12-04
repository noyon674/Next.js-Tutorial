import React from 'react'

function page({params}:
    {
        params: {
            productId: string,
            reviewId: string
        }
    }
) {
  return (
    <div>Review details productID {params.productId} reviews {params.reviewId}</div>
  )
}

export default page