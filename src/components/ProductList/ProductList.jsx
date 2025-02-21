import React from 'react';

function ProductList({products}) {
  return (
    <section>
        <ol>
            {products.map(product => (
                     <li key={product.id}>
                      <div>
                        <div>
                            <img
                            src={product.img}
                            alt={product.name} >
                           </img>
                        </div>
                        <div>
                            <strong>{product.name}</strong>
                            <strong>{product.price}</strong>
                            <small>{product.promoPrice} descuento:{product.discountPercentage} </small>
                        </div> 
                        <div>
                            <button>+</button>
                            <span></span>
                            <button>-</button>
                        </div>                                      
                        
                    </div>
                </li>
            ))}
        </ol>
    </section>
  );
}

export default ProductList;