import React from 'react'
import LOGO from '../assets/images/Logo.gif'
import pdf1 from '../assets/images/IDEATOR.pdf'
import pdf2 from '../assets/images/IDEATOR-FP (1).pdf'
import pdf3 from '../assets/images/iDEATOR-DWS.pdf'
import { Link } from 'react-router-dom'



export default function Footer() {
  return (
    <div>
         <section>
         <div class="w-100 float-left weight-footer-con">
            <div class="container">
               <div class="weight-footer-inner-con">
                  <div class="row">
                     <div class="col-lg-4 col-md-6 col-12 text-xl-left text-lg-left">
                        <div class="weight-footer-content ">
                           <figure>
                              <img src={LOGO} alt="footer-logo" width={'80%'} class="img-fluid" />
                           </figure>
                           <p class="pr-5 pl-0">This is a sample of dummy copy text often used to show page layout and design as sample layout text by Graphic designers, Web designers, People creating templates, and many other uses. </p>
                           <div class="weight-social-list">
                              <ul class="list-unstyled mb-0">
                                 <li class="d-inline-block"><Link target="_blank" to="https://www.facebook.com/"><i class="fab fa-facebook-square d-flex align-items-center justify-content-center text-white pr-0"></i></Link></li>
                                 <li class="d-inline-block"><Link target="_blank" to="https://twitter.com/?lang=en" ><i class="fab fa-twitter-square d-flex align-items-center justify-content-center text-white pr-0"></i></Link></li>
                                 <li class="d-inline-block"><Link target="_blank" to="https://www.linkedin.com/signup" ><i class="fab fa-linkedin d-flex align-items-center justify-content-center text-white pr-0"></i></Link></li>
                                 <li class="d-inline-block"><Link target="_blank" to="https://www.pinterest.com/" ><i class="fab fa-pinterest-square mr-0 d-flex align-items-center justify-content-center text-white pr-0"></i></Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-2 col-md-6 col-sm-12">
                        <div class="weight-footer-content">
                           <h5>Important Link</h5>
                           <ul class="list-unstyled mb-0">
                              <li><i class="fas fa-caret-right"></i><Link to='/'>Home</Link></li>
                              <li><i class="fas fa-caret-right"></i><Link to='/about'>About Us</Link></li>
                              <li><i class="fas fa-caret-right"></i><Link to='/medical'>Medical</Link></li>
                              <li><i class="fas fa-caret-right"></i><Link to='/maping-ecommerce'>Maping ecommerce</Link></li>
                              <li><i class="fas fa-caret-right"></i><Link to='/Contact'>Contact Us</Link></li>

                              
                             
                           </ul>
                        </div>
                     </div>
                     <div class="col-lg-2 col-md-6 col-sm-12">
                        <div class="weight-footer-content">
                           <h5>Product</h5>
                           <ul class="list-unstyled mb-0">
                           <li ><i class="fas fa-caret-right"></i><Link target="_blank" to={pdf1}>iDEATOR</Link> </li>
                           <li ><i class="fas fa-caret-right"></i><Link target="_blank" to={pdf2}>iDEATOR-FP</Link> </li>
                              <li ><i class="fas fa-caret-right"></i><Link target="_blank" to={pdf3}>iDEATOR-DWS</Link> </li>
                              
                        
                           </ul>
                        </div>
                     </div>
                     <div class="col-lg-4 col-md-6 col-sm-5 col-12">
                        <div class="weight-footer-content">
                           <h5>Get in Touch</h5>
                           <ul class="list-unstyled mb-0">
                              <li ><Link to="mailto:hemant.borse@eikonimaging.ai" target='_blank'><span>Email: </span>hemant.borse@eikonimaging.ai</Link></li>
                              <li><Link to="tel:96543 70277" target='_blank'><span>Phone: </span>+91 96543 70277</Link></li>
                              {/* <li><span>Fax: </span>+1 ( 987 ) 654 321  9 9</li> */}
                              <li class="mb-0"><Link target='_blank'
                                 to="https://www.google.com/maps?ll=19.018452,73.085876&z=16&t=m&hl=en&gl=JP&mapclient=embed&cid=1094941359241037706"
                              ><span class="pr-2"> Address:</span>504, 5-B, Manasarovar Complex
Sector-34, Kamothe
Navi Mumbai-410209</Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>


      <div class="w-100 float-left footer-con text-xl-left text-lg-left text-center">
         <div class="container">
            <div class="row">
               <div class="col-lg-12 col-md-12 col-12 text-center">
                  <p class="mb-0">Copyright ©2023 Eikon Imaging All Rights Reserved</p>
               </div>
               {/* <div class="col-lg-6 col-md-6 col-12 d-flex justify-content-xl-end justify-content-lg-end justify-content-center">
                  <figure class="mb-0 d-inline-block">
                     <img src="assets/image/payment-img1.png" alt="payment-img" class="img-fluid"/>
                  </figure>
                  <figure class="mb-0 d-inline-block">
                     <img src="assets/image/payment-img2.png" alt="payment-img" class="img-fluid"/>
                  </figure>
                  <figure class="mb-0 d-inline-block">
                     <img src="assets/image/payment-img3.png" alt="payment-img" class="img-fluid"/>
                  </figure>
                  <figure class="mb-0 d-inline-block mr-0">
                     <img src="assets/image/payment-img4.png" alt="payment-img" class="img-fluid"/>
                  </figure>
               </div> */}
            </div>
         </div>
      </div>


    </div>
  )
}
