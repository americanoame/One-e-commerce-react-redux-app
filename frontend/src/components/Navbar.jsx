import { Navbar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../redux/cart/cartSlice';

const AppNavbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // const isAuthenticated = /* Add your authentication logic here */ false; // Set to true when user is authenticated

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await fetch('/backend/auth/sign-out');
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white fixed-top">
      <div className="container-xxl">
        <Navbar.Brand href="/" className="brand" style={{ color: 'grey', fontSize: '25px', fontFamily: 'Times New Roman', fontWeight: 'bolder', marginLeft: '40px' }}>
          AVaLoZe
        </Navbar.Brand>

        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ height: '50vh', color: 'black' }}>
          <div className="offcanvas-header">
            <Navbar.Brand href="/products" className="me-5" style={{ color: 'black', fontSize: '23px', fontFamily: 'Times New Roman', fontWeight: 'bolder' }}>
              AVaLoZe
            </Navbar.Brand>
            <button type="button" className="btn-close shadow-none border-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <motion.li className="nav-item" whileHover={{ scale: 1.2 }}>
                <a className="nav-link active" aria-current="page" href="/">
                  Products
                </a>
              </motion.li>
              {/* {isAuthenticated ? ( // Only show "Log In" and "Sign Up" if not authenticated
                <> */}
                  <motion.li className="nav-item" whileHover={{ scale: 1.1 }}>
                    <a className="nav-link" href="log-in">
                      Log In
                    </a>
                  </motion.li>
                  <motion.li className="nav-item" whileHover={{ scale: 1.1 }}>
                    <a className="nav-link" href="sign-up">
                      Sign Up
                    </a>
                  </motion.li>
                {/* </>
              ) : null} */}
            </ul>
            <Link to='/cart'>
              <button
                type="submit"
                className="btn  shadow-sm rounded-pill log-out"
                
              >
                <span className="red-dot">{cartItems?.reduce((acc, {quantity}) => acc + quantity, 0) || 0}</span> 🛒 Cart
              </button>

              
            </Link>

            <button className='btn'  onClick={handleLogout}>
                Log Out
              </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
