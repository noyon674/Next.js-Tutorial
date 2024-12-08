import { Metadata } from 'next'

type Props = {
  params: {productId: string}
}

export const generateMetadata = ({params}: Props): Metadata =>{
  return {
    title: `Product ${params.productId}`
  }
}

function page({params}:Props) {
  return (
    <div>Product Details {params.productId}</div>
  )
}

export default page