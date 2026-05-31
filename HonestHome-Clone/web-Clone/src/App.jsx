import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
  <marquee behavior="content" direction="left">
    <pre>
      Free shipping over ₹499 | Additional 15% discount on purchases above ₹1000
      Free shipping over ₹499 | Additional 15% discount on purchases above ₹1000
    </pre>
  </marquee>
</div>

<header className="top-bar">
  <div className="left"></div>

  <div className="logo">
    <img
      src="https://honesthome.in/cdn/shop/files/THHClogo_100x@2x.png?v=1730980282"
      alt="Logo"
    />
  </div>

  <ul className="top-links">
    <li><a href="login.html">Account</a></li>
    <li><a href="#">Search</a></li>
    <li><a href="trackorder.html">Track Order</a></li>
    <li><a href="#">Cart (0)</a></li>
  </ul>

  <div className="menu-icon" id="menuBtn">&#9776;</div>
</header>

<nav className="nav" id="navBar">
  <ul>
    <li><a href="#">HOME</a></li>
    <li><a href="#">CATEGORIES</a></li>
    <li><a href="#">PRODUCTS</a></li>
    <li><a href="#">BLOGS</a></li>
    <li><a href="#">ABOUT US</a></li>
    <li><a href="#">FOUNDER'S STORY</a></li>
    <li><a href="#">CONTACT US</a></li>
  </ul>
</nav>

<div className="img-box">
  <img
    src="https://honesthome.in/cdn/shop/files/new_launch_air_freshener_pc_1_1800x.jpg?v=1743161260"
    className="img1"
    alt=""
  />
</div>

<section className="products">
  <div className="tabs">
    <a className="active">PERSONAL HYGIENE</a>
    <a>FOOD WRAPPING</a>
    <a>KITCHEN HYGIENE</a>
    <a>HOUSEHOLD CLEANER</a>
  </div>

  <div className="product-grid">

    <div className="card">
      <div className="img-box">
        <img
          src="https://honesthome.in/cdn/shop/files/0_600x600.jpg?v=1743507580"
          alt=""
        />
      </div>
      <h3>2Ply Facial Tissue Box 100 Pulls - (Pack of 3)</h3>
      <p className="price">
        <span className="new">Rs. 225</span>
        <span className="old">Rs. 285</span>
      </p>
      <button>Add to Cart</button>
    </div>

    <div className="card">
      <div className="img-box">
        <img
          src="https://honesthome.in/cdn/shop/files/0_600x600.jpg?v=1743507580"
          alt=""
        />
      </div>
      <h3>2Ply Facial Tissue Box 100 Pulls - (Pack of 3)</h3>
      <p className="price">
        <span className="new">Rs. 225</span>
        <span className="old">Rs. 285</span>
      </p>
      <button>Add to Cart</button>
    </div>

    <div className="card">
      <div className="img-box">
        <img
          src="https://honesthome.in/cdn/shop/files/0_600x600.jpg?v=1743507580"
          alt=""
        />
      </div>
      <h3>2Ply Facial Tissue Box 100 Pulls - (Pack of 3)</h3>
      <p className="price">
        <span className="new">Rs. 225</span>
        <span className="old">Rs. 285</span>
      </p>
      <button>Add to Cart</button>
    </div>

    <div className="card">
      <div className="img-box">
        <img
          src="https://honesthome.in/cdn/shop/files/0_600x600.jpg?v=1743507580"
          alt=""
        />
      </div>
      <h3>2Ply Facial Tissue Box 100 Pulls - (Pack of 3)</h3>
      <p className="price">
        <span className="new">Rs. 225</span>
        <span className="old">Rs. 285</span>
      </p>
      <button>Add to Cart</button>
    </div>

  </div>
</section>

<section className="avail-section">
  <h2 className="avail-heading">We're Available on</h2>

  <div className="avail-logos">
    <img
      src="https://cdn.shopify.com/s/files/1/0426/1724/1760/files/amazon.jpg?v=1617993908"
      alt="JioMart"
      className="avail-logo"
    />
    <img
      src="https://cdn.shopify.com/s/files/1/0426/1724/1760/files/flipkart.jpg?v=1617993908"
      alt="Swiggy Instamart"
      className="avail-logo"
    />
    <img
      src="https://cdn.shopify.com/s/files/1/0637/5201/2031/files/blinkit-logo.png?v=1704965451"
      alt="BigBasket"
      className="avail-logo"
    />
    <img
      src="https://cdn.shopify.com/s/files/1/0637/5201/2031/files/zepto.png?v=1704965452"
      alt="CRED"
      className="avail-logo"
    />
    <img
      src="https://cdn.shopify.com/s/files/1/0637/5201/2031/files/jiomart.png?v=1704965452"
      alt="Amazon"
      className="avail-logo"
    />
  </div>
</section>

<footer className="hh-footer">
  <div className="hh-footer-container">

    <div className="hh-footer-col">
      <h3 className="hh-footer-title">Contact Info</h3>
      <p>
        <strong>Address:</strong> Plot No - E-12, GOPALPUR<br />
        INDUSTRIAL AREA UPSIDC, Bulandshahr,<br />
        Uttar Pradesh, 203206
      </p>
    </div>

    <div className="hh-footer-col">
      <h3 className="hh-footer-title">Accounts</h3>
      <ul className="hh-footer-list">
        <li><a href="#">My Account</a></li>
        <li><a href="#">Wishlist</a></li>
        <li><a href="#">Cart</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Checkout</a></li>
      </ul>
    </div>

    <div className="hh-footer-col">
      <h3 className="hh-footer-title">Information</h3>
      <ul className="hh-footer-list">
        <li><a href="#">About us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Delivery Info</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
      </ul>
    </div>

  </div>
</footer>

    </>
  )
}

export default App
