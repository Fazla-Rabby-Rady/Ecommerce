import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className="footer">
      <div className="top">

        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arivals</span>     
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt repellendus amet perspiciatis, eius labore blanditiis expedita consequuntur laudantium enim nihil ducimus tenetur dolorum distinctio accusamus, adipisci officia aperiam nulla dolore!</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatum assumenda, aspernatur accusantium sequi, possimus maiores ex modi ea temporibus repellat eos ipsum sit voluptatem quisquam quas iure? Dolorem, cupiditate.</span>
        </div>

      </div>


      <div className="bottom">
        <div className="left">
          <span className="logo">FazlaStore </span>
          <span className="copyright">
           © Copyright 2023. All Right Reserved
          </span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer