import React, { useState } from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss"
function Slider() {
    const [currentSlide,setcurrentSlide]=useState(0);

    const prevSlide = () => {
        setcurrentSlide(currentSlide===0 ? 3 : (prev)=>prev-1);
    }
    const nextSlide = () => {
        setcurrentSlide(currentSlide===3 ? 0 : (prev)=>prev+1)
    }

    const data =[
        "images/e4.jpeg",
        "images/e7.jpeg",
        "images/e8.jpeg",
        "images/e13.jpeg",
        "images/e15.webp",
        "images/e2.webp"
    ]
  return (
    <div className="slider">
        <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            <img src={data[3]} alt="" />
            <img src={data[4]} alt="" />
            <img src={data[5]} alt="" />
        </div>
        <div className="icons">
            <div className="icon">
                <WestOutlinedIcon onClick={prevSlide} />
            </div>
            <div className="icon">
                <EastOutlinedIcon onClick={nextSlide} />
            </div>
        </div>
    </div>
  )
}

export default Slider