import React, { useEffect, useState } from 'react'
import Style from '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  let shapeLink = (a)=>{
    let AllLinks =Array.from(document.querySelectorAll(".nav-link"))
    AllLinks.map((link,index)=>index === a?link.style.backgroundColor = '#1abc9c':link.style.backgroundColor ='transparent')
    let title = AllLinks[a].getAttribute("href").slice(1); 
    document.title = title;
  }
  let brandClick = ()=>{
    let AllLinks =Array.from(document.querySelectorAll(".nav-link"))
    AllLinks.map((link)=>link.style.backgroundColor ='transparent')
    document.title = "home";
  }

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      console.log(currentPosition);
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const navbarPadding = scrollPosition > 40 ? '' : 'py-4';


  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${navbarPadding}` } >
        <div className="container">
          <Link onClick={()=>{brandClick()}} className="navbar-brand text-white text-uppercase fw-bolder fs-2" to="">START FRAMEWORK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <Link onClick={(e)=>{shapeLink(0)}} className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3" aria-current="page" to="about">about</Link>
              </li>
              <li className="nav-item me-3">
                <Link onClick={()=>{shapeLink(1)}} className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3" to="portfolio">portfolio</Link>
              </li>
              <li className="nav-item me-3">
                <Link onClick={()=>{shapeLink(2)}} className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3" to="contact">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
