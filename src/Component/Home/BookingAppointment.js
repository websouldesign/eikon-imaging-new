import React, { useState } from 'react'
import img1 from '../../assets/images/svg.png'
import { useNavigate } from 'react-router-dom';

export default function BookingAppointment() {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     phone: '',
     subject: '',
     comments: '',
   });
 
   const handleSubmit = (e) => {
     e.preventDefault();
     // Perform form submission logic here
 
     // After successful submission, navigate to the thank you page
     navigate('/success'); // Use navigate function without .push
   };
  return (
    <div>
          <section id='appointment-form'>
         <div class="w-100 float-left fun-facts-con form-main-con " id="contact-form">
            <div class="container">
               <div class="text-center">
                  <h2>Book An Appointment</h2>
                  <p></p>
               </div>
               <div class="row">
                  <div class="col-lg-6 order-xl-0 order-lg-0 order-2">
                     <div class="form-left-con position-relative text-center">
                        {/* <figure class="mb-0 left-curve-img wow slideInLeft">
                           <img src="assets/image/small-left-curve-img.png" alt="" class="img-fluid" />
                        </figure> */}
                        <figure class="mb-0">
                           <img src={img1} alt="form-left-img" class="img-fluid human-img form-left-img" />
                        </figure>
                        {/* <figure class="mb-0 right-curve-img wow slideInRight">
                           <img src="assets/image/small-right-curve-img.png" alt="" class="img-fluid" />
                        </figure> */}
                     </div>
                  </div>
                  <div class="col-lg-6">
           
                     <form class="contact-form" onSubmit={handleSubmit}>
                    
                        <div class="row">
                           <div class="col-lg-6 col-md-6">
                              <div class="form-group">    
                                 <input type="text" required class="form-control" placeholder="Name:" name="name" id="name" /> 
                              </div>
                           </div>
                           <div class="col-lg-6 col-md-6">
                              <div class="form-group">
                                 <input type="email" required class="form-control" placeholder="Email:" />
                                 <small id="emailHelp" class="form-text text-muted"></small>
                              </div>
                           </div>
                           <div class="col-lg-6 col-md-6">
                              <div class="form-group">
                                 <input type="text" required class="form-control" placeholder="Mobile Number:" />
                                 <small id="emailHelp" class="form-text text-muted"></small>
                              </div>
                           </div>
                           <div class="col-lg-6 col-md-6">
                              <div class="form-group">
                                 <select class="form-control position-relative" required>
                                    <option>Choose Gender </option>
                                    <option>Male</option>
                                    <option>Female</option>
                                 
                                 </select>
                                 <i class="fas fa-angle-down down-icon"></i>
                              </div>
                           </div>
                           <div class="col-lg-6 col-md-6">
                              <div class="form-group">    
                                 <input type="Date" class="form-control" required /> 
                              </div>
                           </div>
                           <div class="col-lg-6 col-md-6">
                              <div class="form-group">    
                                 <input type="time" class="form-control" required /> 
                              </div>
                           </div>
                        
                        </div>
                        <div class="row">
                           <div class="col-lg-12">
                              <div class="textarea form-group W-100">    
                                 <textarea class="form-control "  required  placeholder="Message:" rows="3" name="comments" id="comments"></textarea>
                              </div>
                           </div>
                        </div>
                        <button class="appointment-btn border-none" type ="submit">Make Appointment</button>
                     </form>
         
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
