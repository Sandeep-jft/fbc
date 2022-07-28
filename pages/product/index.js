import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const Index = () => {
    const products = useState([1,2,3,4,5])[0];
    const route = useRouter();

   const handleNavigation = ( id ) =>{
    route.push('product/'+id);
   }
  return (
    <div>
        <Link href='/'>
        <a>Home page</a>
        </Link>
        <ul>
            Products: 
            {
                products.map(item=>{
                    return <li onClick={()=>handleNavigation(item)} key={item}>{item}</li>
                })
            }

            <li>
                <Link href='product/8' replace >
                <a>
                    Product 8
                </a>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Index