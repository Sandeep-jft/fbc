import { useRouter } from 'next/router'
import React from 'react'

const Docs = () => {
    const routes = useRouter();
    const {params = []} = routes.query;
    console.log('the params is --', routes.query.params);

  if( params.length === 2) {
    return <h1>You are viewing concept {params[1]} of feature {params[0]}</h1>
  }else if( params.length === 1) {
    return <h1>You are viewing feature {params[0]}</h1>
  }
  return (
    <h1>Docs landing page</h1>
  )
}

export default Docs