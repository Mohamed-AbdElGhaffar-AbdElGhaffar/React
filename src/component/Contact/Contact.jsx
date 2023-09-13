import React from 'react'
import Style from '../Contact/Contact.css'
import { Title } from '../Title/Title'
export default function Contact() {
  Title("contact");
  let ShowLabel = (idInput, Value)=>{
    let Labels =Array.from(document.querySelectorAll("label"))
    for (let i = 0; i < Labels.length; i++) {
      if (Labels[i].getAttribute("for")== idInput ) {
        Labels[i].style.top = '0';
        if(Value == ''){
          Labels[i].style.top = '40px';
        }
      }
    }
  }


  let contactButton = (button)=>{
    button.style.backgroundColor = "#1abc9ce6"
  };
  

  return (
    <>
    <section className="Contact d-flex justify-content-center align-items-center">
        <div className="text-center w-100">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">CONTACT SECTION</h2>
            <div className="d-flex justify-content-center align-items-center mb-3">
                <div className="line me-3"></div>
                <i className="fa-solid fa-star"></i>
                <div className="line ms-3"></div>
            </div>
            <form className="w-50 p-3 mx-auto mt-5 ng-valid ng-dirty ng-touched text-start">
                <label for="userName" className="position-relative labelTop">userName : </label>
                <input onKeyUp={(e)=>{ShowLabel(e.target.getAttribute("id"), e.target.value)}} id="userName" type="text" placeholder="userName" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched shadow-none"/>
                <label for="userAge" className="position-relative labelTop">userName : </label>
                <input onKeyUp={(e)=>{ShowLabel(e.target.getAttribute("id"), e.target.value)}} id="userAge" type="text" placeholder="userAge" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched shadow-none"/>
                <label for="userEmail" className="position-relative labelTop">userEmail : </label>
                <input onKeyUp={(e)=>{ShowLabel(e.target.getAttribute("id"), e.target.value)}} id="userEmail" type="email" placeholder="userEmail" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched shadow-none"/>
                <label for="userPassword" className="position-relative labelTop">userPassword : </label>
                <input onKeyUp={(e)=>{ShowLabel(e.target.getAttribute("id"), e.target.value)}} id="userPassword" type="password" placeholder="userPassword" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched shadow-none"/>
                <button onClick={(e)=>{contactButton(e.target)}} type="button" className="btn mt-4 text-white"> send Message </button>
            </form>
        </div>
    </section>
    </>
  )
}
