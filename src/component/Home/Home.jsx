import React from 'react'
import Style from '../Home/Home.css'
import photo from '../img/avataaars.svg';
import { Title } from '../Title/Title'
export default function Home() {
  Title("home");
  return (
    <>
    <section className="Home text-white d-flex justify-content-center align-items-center">
        <div className="text-center">
            <img src={photo} alt="" className="mb-3"/>
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder pt-4">START FRAMEWORK</h2>
            <div className="d-flex justify-content-center align-items-center mb-3">
                <div className="line bg-white me-3"></div>
                <i className="fa-solid fa-star"></i>
                <div className="line bg-white ms-3"></div>
            </div>
            <p >Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </section>
    </>
  )
}
