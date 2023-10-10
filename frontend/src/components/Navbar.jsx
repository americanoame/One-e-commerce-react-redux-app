import { Navbar } from "react-bootstrap";
import { motion } from 'framer-motion';

const AppNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white fixed-top">
      <div className="container">
        <Navbar.Brand href="/products" className="mr-auto" 
          style={{ color: 'black', fontSize: '23px', fontFamily: 'Times New Roman', fontWeight: 'bolder' }}>
          AVaLoZe
        </Navbar.Brand>

        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-top"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ height: '60vh', color: 'black' }}
        >
          <div className="offcanvas-header">
            <Navbar.Brand href="/products" className="me-5" 
              style={{ color: 'black', fontSize: '23px', fontFamily: 'Times New Roman', fontWeight: 'bolder' }}>
              AVaLoZe
            </Navbar.Brand>
            <button
              type="button"
              className="btn-close shadow-none border-0"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <motion.li className="nav-item" whileHover={{ scale: 1.2 }}>
                <a className="nav-link active" aria-current="page" href="/products">
                  Products
                </a>
              </motion.li>
              <motion.li className="nav-item" whileHover={{ scale: 1.1 }}>
                <a className="nav-link" href="log-in">
                  Log in
                </a>
              </motion.li>
              <motion.li className="nav-item" whileHover={{ scale: 1.1 }}>
                <a className="nav-link" href="sign-up">
                  Sign up
                </a>
              </motion.li>
            </ul>
            <button href="#cart" className="btn btn-outline-warning" type="submit" style={{ color: 'grey', fontSize: '20px' }}>
              🛒Cart
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
