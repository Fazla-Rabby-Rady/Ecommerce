import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'
function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="images/user-1.png" alt="" />
          <button>
              <Link to="/products/1" className="link">Sale</Link>
          </button>
        </div>
        <div className="row">
        <img src="images/user-3.png" alt="" />
          <button>
              <Link to="/products/1" className="link">Women</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src="images/product-4.jpg" alt="" />
          <button>
              <Link to="/products/1" className="link">New Season</Link>
          </button>
        </div>
      </div>
      <div className="col col-lg">
            <div className="row">
              <div className="col">
                <div className="row">
                <img src="images/e3.jpeg" alt="" />
              <button>
                <Link to="/products/1" className="link">Man</Link>
              </button>
                </div>
              </div>
              <div className="col">
                <div className="row">
                <img src="images/exclusive.png" alt="" />
                <button>
                  <Link to="/products/1" className="link">Accessories</Link>
                </button>
                </div>
              </div>
            </div>
            <div className="row">
            <img src="images/product-10.jpg" alt="" />
            <button>
              <Link to="/products/1" className="link">Shoes</Link>
            </button>
            </div>
      </div>

    </div>
  )
}

export default Categories