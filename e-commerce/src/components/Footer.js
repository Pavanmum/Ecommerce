import React from 'react'
import { Link } from 'react-router-dom'
import {BsGithub, BsInstagram, BsLinkedin, BsYoutube} from 'react-icons/bs'
import newletter from "../images/newsletter.png"

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-items-center" >
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align--items-center"> 
            <img src={newletter} alt="newsletter" />
            <h2 className='mb-0 text-white'>Sign Up for Newspaper</h2>
            </div>
          </div>
          <div className='col-7'>
          <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                 Subscribe
                </span>
              </div>
              </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4"><h4 className='text-white mb-4'>Contact Us</h4>
          <address className="text-white fs-6"> Room no : 3 shree ganesh Chawl near Samaj mandi Hall,
            <br /> G.T.B nagar ,sion Koliwada Mumbai Maharashtra <br/>
            Pincode: 400022
          </address>
          <a href="tel:+91 9987018754" className='text-white mb-1 d-block mt-3'>+91 9987018754</a>
          <a href="mailto:pavanprasad035@gmail.com" className='text-white mb-0 d-block mt-2'>pavanprasad035@gmail.com</a>
          <div className='social_icons d-flex align-items-center gap-30 mt-1'>
          <a  className="text-white" href="k">
              <BsLinkedin className="fs-4" />
            </a><a  className="text-white" href="m">
              <BsInstagram className="fs-4" />
            </a><a  className="text-white" href="u">
              <BsGithub className="fs-4" />
            </a><a  className="text-white" href="h">
              <BsYoutube className="fs-4" />
            </a>
          </div>
          <div className='social_icons'></div>
          <div className='social_icons'></div>
          <div className='social_icons'></div>
          </div>
          <div className="col-3"><h4 className='text-white mb-4'>Information</h4>
          <div className='footer-links d-flex  flex-column'>
          <Link to="/Privacy Policy" className='text-white py-2 mb-1'>Privacy Policy</Link>
          <Link to="/Refund Policy" className='text-white py-2 mb-1'>Refund Policy</Link>
          <Link to="/Shipping Policy" className='text-white py-2 mb-1'>Shipping Policy</Link>
          <Link to="/Term-Condition" className='text-white py-2 mb-1'>Terms of Services</Link>
          </div></div>
          <div className="col-3"><h4 className='text-white mb-4'>Account</h4>  <div className='footer-links d-flex  flex-column'>
          <Link className='text-white py-2 mb-1'>About Us</Link>
          <Link className='text-white py-2 mb-1'>Faq</Link>
          <Link className='text-white py-2 mb-1'>Contact</Link>
          </div>
          </div>
          <div className="col-2"><h4 className='text-white mb-4'>Quick Links</h4>
          <div className='footer-links d-flex  flex-column'>
          <Link className='text-white py-2 mb-1'>Laptops</Link>
          <Link className='text-white py-2 mb-1'>Headphones</Link>
          <Link className='text-white py-2 mb-1'>Tablets</Link>
          <Link className='text-white py-2 mb-1'>Watch</Link>
          </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="col-12">
          <p className='text-center mb-0 text-white'>
            &copy; {new Date().getFullYear()};Powered by Pavan Bhai </p>

        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
