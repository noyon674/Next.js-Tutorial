import React from 'react'

function page({params}:{
    params: {
        slug: string[]
    }
}) {
    if(params.slug.length === 2){
        return <h2>{params.slug[0]} and {params.slug[1]}</h2>
    }else if(params.slug.length === 1){
        return <h2>{params.slug[0]}</h2>
    }
}

export default page