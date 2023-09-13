import React from 'react'
import Style from '../Portfolio/Portfolio.css'
import poert1 from '../img/poert1.png'
import poert2 from '../img/poert2.png'
import poert3 from '../img/poert3.png'
import { Title } from '../Title/Title'
export default function Portfolio() {
    Title("portfolio");

    let ShowLayer = (imgSrc)=>{
        document.querySelector(".modelLayer img").setAttribute("src", imgSrc)
        document.querySelector(".modelLayer").classList.replace("d-none","d-flex")
      }
    let HideLayer = ()=>{
        document.querySelector(".modelLayer").classList.replace("d-flex","d-none")
      }
  return (
    <>
    <section className="Portfolio d-flex justify-content-center align-items-center">
        <div className="text-center w-100">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">PORTFOLIO COMPONENT</h2>
            <div className="d-flex justify-content-center align-items-center mb-3">
                <div className="line me-3"></div>
                <i className="fa-solid fa-star"></i>
                <div className="line ms-3"></div>
            </div>
            <div className="container">
                <div className="row g-5  pb-4 mx-0">
                    <div onClick={()=>{ShowLayer(poert1)}} className="col-lg-4 col-md-6">
                        <div className="layerFather rounded-3 overflow-hidden position-relative">
                            <img src={poert1} className="w-100 rounded-3" alt="poert1"/>
                            <div className="layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>

                    </div>
                    <div onClick={()=>{ShowLayer(poert2)}} className="col-lg-4 col-md-6">
                        <div className="layerFather rounded-3 overflow-hidden position-relative">
                            <img src={poert2} className="w-100 rounded-3" alt="poert1"/>
                            <div className="layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>

                    </div>
                    <div onClick={()=>{ShowLayer(poert3)}} className="col-lg-4 col-md-6">
                        <div className="layerFather rounded-3 overflow-hidden position-relative">
                            <img src={poert3} className="w-100 rounded-3" alt="poert1"/>
                            <div className="layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>

                    </div>
                    <div onClick={()=>{ShowLayer(poert1)}} className="col-lg-4 col-md-6">
                        <div className="layerFather rounded-3 overflow-hidden position-relative">
                            <img src={poert1} className="w-100 rounded-3" alt="poert1"/>
                            <div className="layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>

                    </div>
                    <div onClick={()=>{ShowLayer(poert2)}} className="col-lg-4 col-md-6">
                        <div className="layerFather rounded-3 overflow-hidden position-relative">
                            <img src={poert2} className="w-100 rounded-3" alt="poert1"/>
                            <div className="layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>

                    </div>
                    <div onClick={()=>{ShowLayer(poert3)}} className="col-lg-4 col-md-6">
                        <div className="layerFather rounded-3 overflow-hidden position-relative">
                            <img src={poert3} className="w-100 rounded-3" alt="poert1"/>
                            <div className="layer position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
        <div onClick={()=>{HideLayer()}} className='modelLayer position-fixed start-0 top-0 w-100 h-100 bg-primary bg-opacity-25 d-none justify-content-center align-items-center'>
            <img src="" alt="" />
        </div>

    </section>
    
    </>
  )
}
