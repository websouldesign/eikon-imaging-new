import React, { useState } from 'react'
import { useHistory, useNavigate } from 'react-router-dom';


export default function ContactForm() {


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
    navigate('/thank'); // Use navigate function without .push
  };
  return (
    <div>
      <form class="contact-form-plan-box" onSubmit={handleSubmit}>
                  <div class="form-row">
                     <div class="col-lg-6 col-md-6">
                        <div class="form-group">    
                           <input type="text" class="form-control" placeholder="Your Name:" name="name" id="name"/> 
                        </div>
                     </div>
                     <div class="col-lg-6 col-lg-6 col-md-6">
                        <div class="form-group">    
                           <input type="email" class="form-control" placeholder="Your Email:" name="email" id="email"/> 
                        </div>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col-lg-6 col-lg-6 col-md-6">
                        <div class="form-group">    
                           <input type="tel" class="form-control" placeholder="Phone:" name="phone" id="phone"/> 
                        </div>
                     </div>
                     <div class="col-lg-6 col-lg-6 col-md-6">
                        <div class="form-group">
                        <div class="form-group">    
                           <input type="tel" class="form-control" placeholder="Subject:" name="phone" id="phone"/> 
                        </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div class="textarea form-group">    
                        <textarea class="form-control" placeholder="Message:" rows="3" name="comments" id="comments"></textarea>
                     </div>
                  </div>
                  <div class="submitform-button">
                     <button type="submit"  class="submitform-btn appointment-btn ml-auto mr-auto d-block">Send Message</button>
                  </div>
               </form>
    </div>
  )
}
