import { addItem, removeItem, clearCart } from '../redux/cart/cartSlice';

import { useDispatch, useSelector } from 'react-redux';

import { products } from '../products';


const Cart = () => {

  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);

  const handleAddItem = (product) => {
    dispatch(addItem({ id: product._id }));
    
  };

  const handleRemoveItem = (product) => {
    dispatch(removeItem({ id: product._id }));
    
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };


  const mapItems = items 
  .map((item) => {
    const product = products.find((product) => product._id === item.id)
    return{ 
      ...product, 
      ...item
    }
  })



  return (
    <div className="container-xxl mt-5">
   
      <div className="col-md-4 float-end">
        <div className="card">
          <div className="card-body">
          <h5 className="card-title">Subtotal: ${mapItems?.reduce((acc, {quantity, price}) => acc + (quantity * price), 0).toFixed(2)}</h5>
            <button className="btn btn-primary float-end w-100">Checkout</button>
          </div>
        </div>
        <button onClick={handleClearCart} style={{ marginTop: '10px' }} className="btn btn-danger d-flex justify-content-center w-100"
          
        >
          Clear Cart
        </button>
        <a className="continue-shopping" href="/">
            <span className="arrow-symbol">&#8592;</span> continue shopping
          </a>
      </div>
      <div className="row">
        {mapItems
        .map((product) => (
          <div className="col-md-12" key={product._id}>
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-3">
                  <img style={{ maxWidth: '90px', padding: '10px' }} src={product.image} alt={product.name} className="img-fluid" />
                </div>
                <div className="col-md-5">
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: '16px' }}>
                      {product.name}
                    </h5>
                  </div>
                </div>
                <div className="col-md-2 text-center mt-3">
                  

                  <div>
                    <div  className="d-flex justify-content-between align-items-center">
                      <button onClick={() => handleRemoveItem(product)} className="btn btn-outline-secondary minus-btn mx-2">-</button>
                      <span className="increase-quantity">{product.quantity}</span>
                      <button onClick={() => handleAddItem(product)} className="btn btn-outline-secondary plus-btn">+</button>

                      
                      <button onClick={() => handleRemoveItem(product)} style={{marginLeft: '30px'}}  className="btn btn-danger remove-btn">
                      Remove
                    </button>
                      
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;


  
// import  { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addItem, removeItem } from '../redux/cart/cartSlice'; 
// import { products } from '../products';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items); 

//   const [ setItemToAdd] = useState('');

//   const handleAddItem = (product) => {
//     dispatch(addItem(product));
//     setItemToAdd('');
//   };


//   const handleRemoveItem = (product) => {
//     dispatch(removeItem(product));
//     setItemToAdd('');
//   };
  

//   return (
//     <div className="container-xxl mt-5">
      
//       <div className="row">
//         {cartItems.map((item) => (
//           <div className="col-md-12" key={item.id}>
//             <div className="card mb-3">
//               <div className="row no-gutters">
//                 <div className="col-md-3">
//                   <img
//                     style={{ maxWidth: '90px', padding: '10px' }}
//                     src={item.image} 
//                     alt={item.name} 
//                     className="img-fluid"
//                   />
//                 </div>
//                 <div className="col-md-5">
//                   <div className="card-body">
//                     <h5 className="card-title" style={{ fontSize: '16px' }}>
//                       {item.name} 
//                     </h5>
//                   </div>
//                 </div>
//                 <div className="col-md-2 text-center mt-3">
//                   <div>
//                     <div className="d-flex justify-content-between align-items-center">
                      
//                       <button className="btn btn-outline-secondary minus-btn mx-2">-</button>
//                       <span className="increase-quantity">{item.quantity}</span> 
//                       <button className="btn btn-outline-secondary plus-btn">+</button>
//                       <button
//                         style={{ marginLeft: '30px' }}
//                         className="btn btn-danger remove-btn"
//                         onClick={() => handleRemoveItem(item)}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Product listings */}
//       <div className="row">
//         {products.map((product) => (
//           <div className="col-md-12" key={product._id}>
//             <div className="card mb-3">
//               <div className="row no-gutters">
//                 <div className="col-md-3">
//                   <img
//                     style={{ maxWidth: '90px', padding: '10px' }}
//                     src={product.image}
//                     alt={product.name}
//                     className="img-fluid"
//                   />
//                 </div>
//                 <div className="col-md-5">
//                   <div className="card-body">
//                     <h5 className="card-title" style={{ fontSize: '16px' }}>
//                       {product.name}
//                     </h5>
//                   </div>
//                 </div>
//                 <div className="col-md-2 text-center mt-3">
//                   <div>
//                     <div className="d-flex justify-content-between align-items-center">
//                       <button
//                         onClick={() => handleAddItem(product)}
//                         className="btn btn-outline-secondary plus-btn"
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;

