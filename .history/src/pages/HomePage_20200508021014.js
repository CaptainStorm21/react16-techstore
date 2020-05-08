import React from 'react'
import {ProductConsumer} from '../context';

export default function HomePage() {
    return (
      <>
        <ProductConsumer>
                {value => {
                    console.log(value)
                    return 
                }}
        </ProductConsumer>
      </>
    );
}


{/* { value => <h2>{value}</h2>} */}