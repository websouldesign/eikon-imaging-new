import React from 'react'
import img1 from '../../assets/images/small-left-curve-img.png'
import img2 from '../../assets/images/run-20221119101612544.png'
import img3 from '../../assets/images/small-right-curve-img.png'
import { Link } from 'react-router-dom'

export default function AboutHome() {
  return (
    <div>
        <section>
         <div class="w-100 float-left py-5 quality-system-con">
            <div class="container">
               <div class="row">
                  <div class="col-lg-6 col-md-6 d-flex align-items-center">
                     <div class="quality-system-left-con">
                        <h2>About Us
                        </h2>
                        <p class='mb-2'>We at Eikon provide our services to different industries like Healtchare, NDT, Home Security to name a few.</p>
                        <p>Our product IDEATOR, is an AI enabled system and software solution. It has been successfully installed and perfoming well in hospitals and at OEMs in India. Our product is mainly used by endo-spine surgeons, urologists, orthopaedics, neurologists and radiologists. IDEATOR's main USP is the best image quality at lower X-ray Dose and seamless UI/UX.

</p>

                        <div class="quality-system-list">
                           <ul class="list-unstyled">
                              <li class="position-relative"><i class="fas fa-circle"></i>24 Hour Service</li>
                              <li class="position-relative"><i class="fas fa-circle"></i>Modern Clinic</li>

                           </ul>
                        </div>
                        <div class="quality-system-list">
                           <ul class="list-unstyled">
                           
                              {/* <li class="position-relative"><i class="fas fa-circle"></i>Expert Doctors</li>
                              <li class="position-relative"><i class="fas fa-circle"></i>Maping ecommerce</li> */}
                             <li class="position-relative"><i class="fas fa-circle"></i>Update Covid-19</li>
                              <li class="position-relative"><i class="fas fa-circle"></i>24/7 Help Center</li>
                           </ul>
                        </div>
                        <Link to="#" class="appointment-btn">Read More</Link>
                     </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                     <div class="quality-system-right-con position-relative text-center">
                        {/* <figure class="mb-0 left-curve-img wow slideInLeft" style={{visibility: 'visible', animationName: 'slideInLeft'}}>
                           <img src={img1} alt="" class="img-fluid" />
                        </figure> */}
                        <figure class="mb-0">
                           <img src={img2} alt="quality-system-img" class="img-fluid human-img"/>
                        </figure>
                        {/* <figure class="mb-0 right-curve-img wow slideInRight" style={{visibility: 'visible', animationName: 'slideInRight'}}>
                           <img src={img3} alt="" class="img-fluid" />
                        </figure> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
