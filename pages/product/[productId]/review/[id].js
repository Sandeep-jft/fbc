import { useRouter } from 'next/router'
import React from 'react'

const Id = () => {
    const routes = useRouter();
    const {id, productId} = routes.query
  return (
    <h1>The review Id for product {productId} is: {id}</h1>
  )
}

export default Id