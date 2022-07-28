import { useRouter } from 'next/router'
import React from 'react'

const Id = () => {
    const routes = useRouter();
    const {productId} = routes.query
  return (
    <h1>The product Id is: {productId}</h1>
  )
}

export default Id