import React from 'react'
import ContactForm from './ContactForm'
import Email_conn from '../../assets/images/email.png'
import Call_us from '../../assets/images/phone-call.png'
import Location_us from '../../assets/images/map.png'


export default function Enquiry() {
  return (
    <section>
         <div class="w-100 float-left Schedule-con">
            <div class="container">
               <div class="Schedule-heading text-center mb-5">
                  <h2 class='mb-1'>Contact Form</h2>
                  <p>Fill out the form and Our Team will contact you within 24 hours.</p>
               </div>
               <div class='row'>
                  <div class='col-lg-6 col-md-12 col-12'>
                     <div class="Schedule-box text-md-left text-center">
                        <div class="row">
                           <div class="col-lg-12 ">
                              <div class="Schedule-box-item position-relative w-100 float-left">
                                 <figure class="mb-0 float-md-left overlay-img">
                                    <img src={Email_conn} width={'60px'} alt="Schedule-icon" class="img-fluid" />
                                 </figure>
                                 <div class="Schedule-box-title float-md-left overlay-img">
                                    <h5>Email</h5>
                                    <span class="d-block">hemant.borse@eikonimaging.ai</span>
                                    {/* <span class="d-block">support@eikonimaging.ai</span> */}
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-12 ">
                              <div class="Schedule-box-item position-relative w-100 float-left">
                                 <figure class="mb-0 float-md-left overlay-img">
                                    <img src={Call_us} width={'60px'} alt="Schedule-icon" class="img-fluid" />
                                 </figure>
                                 <div class="Schedule-box-title float-md-left overlay-img">
                                    <h5>Call</h5>
                                    <span class="d-block">+91 96543 70277</span>
                                    {/* <span class="d-block">support@eikonimaging.ai</span> */}
                                 </div>
                              </div>
                           </div>
                         
                           <div class="col-lg-12">
                              <div class="Schedule-box-item position-relative w-100 float-left">
                                 <figure class="mb-0 float-md-left overlay-img">
                                    <img src={Location_us} width={'60px'} alt="Schedule-icon" class="img-fluid" />
                                 </figure>
                                 <div class="Schedule-box-title float-md-left overlay-img">
                                    <h5>Location</h5>
                                    <span class="d-block">504, 5-B, Manasarovar Complex Sector-34,<br/> Kamothe  Navi Mumbai-410209</span>
                                 </div>
                              </div>
                           </div>
                     
                           {/* <div class="col-lg-12">
                              <div class="Schedule-box-item position-relative w-100 float-left mb-0">
                                 <figure class="mb-0 float-md-left overlay-img">
                                    <img src="assets/image/Schedule-icon4.png" alt="Schedule-icon" class="img-fluid" />
                                 </figure>
                                 <div class="Schedule-box-title float-md-left overlay-img">
                                    <h5>Working Hours</h5>
                                    <span class="d-block">Monday - Friday: 8AM - 9PM</span>
                                    <span class="d-block"> Weekends: Closed</span>
                                 </div>
                              </div>
                           </div> */}
                        </div>
                     </div>
                  </div>
                  <div class='col-lg-6 col-md-12 col-12'>
                     <ContactForm/>
                  </div>
               </div>
            </div>
         </div>
      </section>
  )
}
