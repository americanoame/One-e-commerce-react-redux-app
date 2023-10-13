import {Link} from 'react-router-dom';
const CartPage = () => {
  

  return (
    <div className="container mx-auto py-4">
      <div className="row">
        <div className="col-md-8">
          <div className="bg-white p-4 rounded-lg">
            <div className="d-flex justify-content-between border-bottom border-gray-400 pb-1">
              <h2 className="text-2xl font-semibold text-primary">
                Shopping Cart
              </h2>
              <p className="text-lg font-semibold text-primary">Subtitle</p>
            </div>
            <div className="pt-2">
              {/* {productData.length > 0 ? (
                productData.map((item) => (
                  <div key={item._id}>
                    <CartProduct item={item} />
                  </div>
                ))
              ) : ( */}
                <div className="text-center py-5">
                  <h1 className="text-lg font-medium">Your cart is empty!</h1>
                  <Link to="/">
                    <button className="btn btn-primary mt-3">
                      Go to Shopping
                    </button>
                  </Link>
                </div>
              {/* )} */}
              
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-white h-64 p-4 rounded-lg d-flex align-items-center justify-content-center">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
