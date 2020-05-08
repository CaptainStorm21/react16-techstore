import React from 'react'
import {ProductConsumer} from '../context';

export default function HomePage() {
    return (
      <>
        <ProductConsumer>
                {value => {
                    console.log(value)
                    return <h3></h3>
                }}
        </ProductConsumer>
      </>
    );
}


{/* { value => <h2>{value}</h2>} */}