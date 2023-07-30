import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome , AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall , BiInfoCircle} from "react-icons/bi";
import Container from '../components/Container';
const Contact = () => {
  return (
    <>
    <Meta title={"Contact Us"} />
    <BreadCrumb title ="Contact Us"/>
    <Container class1="contact-wrapper py-5 home.wrapper-2">
        <div className="row">
          <div className='col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.5016521845578!2d82.19541922522389!3d26.792151029379617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07c4f58cb42d%3A0x88547653a4a8e8e1!2sRam%20mandir!5e0!3m2!1sen!2sin!4v1674763462964!5m2!1sen!2sin" 
          width="600" 
          title='1'
          height="450" 
          className="border:0 w-100" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
          <div className='col-12 mt-5'>
            <div>
          <div className="contact-inner-wrapper d-flex justify-content-between">
            <div>
              <h3 className="contact-title">
              Contanct Us 
            </h3>
            <form action='' className=' d-flex flex-column gap-15'>
              <div>
                <input type="text" placeholder='Name' className='form-control' />
              </div>
              <div>
                <input type="text" placeholder='Email' className='form-control' />
              </div>
              <div>
                <input type="text" placeholder='Phone Number*' className='form-control' />
              </div>
              <div>
                <textarea
                name=''
                id=''
                placeholder='Comment'
                className='w-100 form-control'
                cols="30"
                rows="4"
                ></textarea>
              </div>
              <div>
                <button className='button border-0'>Submit</button>
              </div>
            </form>
            </div>
            <div><h3 className="contact-title">
              Get in touch with us
            </h3>
            <div>
              <ul className='ps-0'>
              <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineHome className='fs-5'/>
              <address className="mb-0">
              Dr. Gangadhar S Badhe Marg, Samarth Nagar, Chunabhatti, Sion, Mumbai, Maharashtra 400022
              </address>
              </li>
              <li className='mb-3 d-flex gap-15 align-items-center'>
                <BiPhoneCall className='fs-5'/>
                <a href='tel:+91 8907654323'>+91 8907654323</a>
                </li>
              <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineMail className='fs-5'/>
              <a href='mailTo: MumbaiIndianJeete2023@gmail.com'>MumbaiIndianJeete2023@gmail.com</a>
              </li>
              <li className='mb-3 d-flex gap-15 align-items-center'><BiInfoCircle className='fs-5'/>
              <p className='mb-0'>Saturaday-Sunday 12 AM - 6 AM</p>
              </li>
              </ul>
            </div>
            </div>
          </div>
          </div>
          </div>
        </div>
    </Container>

    </>
  )
}

export default Contact
