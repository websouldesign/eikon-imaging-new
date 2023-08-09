import React, { useState } from 'react'
import img1 from '../../assets/images/svg.png'

export default function BookingAppointment() {
   const [showAlert, setShowAlert] = useState(false);

   const handleSubmit = (event) => {
     event.preventDefault(); // Prevent page reload
 
     // Simulate form submission
     // You can add your actual form submission logic here
 
     // After successful form submission, show the alert
     setShowAlert(true);
 
     // Hide the alert after 3 seconds
     setTimeout(() => {
       setShowAlert(false);
     }, 3000); // 3000 milliseconds = 3 seconds
   };
  return (
    <div>
          <section>
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
                  {showAlert && (
        <div className="alert alert-success" role="alert">
          Form submitted successfully!
        </div>
      )}
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
