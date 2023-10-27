import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Banner from '../components/Banner';
import { products } from '../products';
import SpinnerBox from '../components/SpinnerBox';


// build add to cart
import  {addItem}  from '../redux/cart/cartSlice';


const img10 = '/images/s4watch.jpg';

const ProductsScreen = () => {

// build add to cart

const dispatch = useDispatch();



const handleAddItem = (product) => {
  
  dispatch(addItem({ id: product._id }));
  
};



  // useState(products) which means you're using product data
  // from the products variable. there was no need to fetch the data in the useEffect
  const [items] = useState(products);
  const [visible, setVisible] = useState(8);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  return (
    <div>
      <Banner />
      <div className="container-sm d-flex justify-content-center align-items-center">
        <div className="row mt-5 slide-animation">
          <div className="col-md-4 slide-marketing" style={{ paddingRight: '5px' }}>
            <div style={{ height: '120%' }}>
              <img src={img10} className="d-block" alt="..." />
            </div>
          </div>
          <div className="col-md-6 slide-marketing" style={{ marginLeft: '-55px', padding: '5px' }}>
            <div className="row slide-animation">
              <div className="col-md-8 mt-5 px-0">
                <h5 style={{ textAlign: 'left', color: 'grey'}}>Check Out The Latest</h5>
                <p style={{ textAlign: 'left', color: 'grey'}}>Smart Watch, Fitness Tracker with Heart Rate Monitor, Blood Pressure Fitness Watch for Women.</p>
                <button style={{ backgroundColor: 'gold', border: 'none' }} className="btn btn-primary float-start w-100">
                  <span style={{ fontSize: '18px', color: 'grey' }}>🛒</span> Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl min-h-screen ">
        {isLoading ? ( // If isLoading is true, display the loading box
          <SpinnerBox />
        ) : (
          // If isLoading is false, display the product content
          <>
            <div className="row">
              <h1 style={{ fontSize: '25px', marginTop: '40px', color: 'grey', textAlign: 'left' }}>Our Products</h1>
            </div>
            <div className="row">
              {items.slice(0, visible).map((product) => (
                <div className="col-md-3" key={product._id}>
                  <div className="product-box custom-card position-relative">
                    <div className="icons position-absolute">
                      <a href="#" className="text-decoration-none">
                        {/* <i className="fas fa-heart"></i> */}
                      </a>
                    </div>
                    <img src={product.image} alt={product.name} className="img-fluid" />

                    <div className="product-info">
                      <p>{product.name}</p>
                      <p>{product.price}</p>
                    </div>

                    <div className="cart-btn" style={{ display: 'flex', justifyContent: 'center' }}>
                      <button 
                        onClick={() => handleAddItem(product)} className="btn btn-white shadow-sm rounded-pill" style={{ fontSize: '12px', backgroundColor: 'gold', color: 'grey', border: 'none' }}>
                        🛒 Add to Cart
                      </button>
                      
                      <button className="btn btn-white shadow-sm rounded-pill" style={{ fontSize: '10px', marginLeft: '10px', backgroundColor: 'lightGrey', color: 'white', border: 'none' }}>
                        Product Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/*  If there are more products to show, it renders the "Show More 
             Products" button; otherwise, it renders nothing (null) effectively hiding 
             the button when there are no more products to show.  */}

            {visible < items.length ? (
              <button onClick={loadMore} className="btn d-block w-100 loadingProduct mt-1" style={{ color: 'grey', padding: '7px', fontSize: '18px', fontWeight: 'bold', border: 'none' }}>
                Show More Products
              </button>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsScreen;
