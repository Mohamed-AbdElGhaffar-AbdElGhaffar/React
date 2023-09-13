import React from 'react'
import Style from '../Footer/Footer.css'
export default function Footer() {
  return (
    <>
    <footer className="text-white text-center p-5 ">
        <div className="row m-4">
            <div className="col-md-4 text-center p-3">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-center p-3">
                <h3>AROUND THE WEB</h3>
                <div className="d-flex justify-content-center">
                    <div className="border rounded-circle p-2 w-auto mx-1">
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                    <div className="border rounded-circle p-2 w-auto mx-1">
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className="border rounded-circle p-2 w-auto mx-1">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className="border rounded-circle p-2 w-auto mx-1">
                        <i className="fa-solid fa-globe"></i>
                    </div>

                </div>
            </div>
            <div className="col-md-4 text-center p-3">
                <h3>ABOUT FREELANCER</h3>
                <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
            </div>

        </div>

    </footer>

    <p className="lastWord p-4 text-center text-white m-0"> Copyright © Your Website 2021</p>
    </>
  )
}
