import React from 'react'
import test1 from '../../assets/images/auther-img.png'

export default function Testimonial() {
  return (
    <div>
        <section>
         <div class="w-100 float-left slider-con text-lg-left text-center">
               <div class="slider-inner-con banner-overlay-img">
            <div class="container">
                  <div class="row overlay-img">
                     <div class="col-lg-4 d-flex align-items-center">
                        <div class="slider-left-con">
                           <h2 class="text-white">What Our <br/>
                              Patients Say 
                           </h2>
                           <p class="mb-0">4.8 Overall Rating, Based<br/>
                              on 2500+ Reviews.
                           </p>
                        </div>
                     </div>
                     <div class="col-lg-8">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                           <div class="carousel-inner">
                              <div class="carousel-item">
                                 <div class="auther-con w-100 d-inline-block">
                                    <figure class="mb-0 d-inline-block">
                                       <img src={test1} alt="auther-img" class="img-fluid" />
                                    </figure>
                                    <div class="auther-title d-inline-block">
                                       <h4 class="text-white">Rajesh Patel</h4>
                                       <p class="mb-0">Dental Patient</p>
                                    </div>
                                 </div>
                                 <p class="text-white mb-0">This is a sample of dummy copy text often used to show page layout and design as sample layout text by Graphic designers, Web designers, People creating templates, and many other uses. It mimics the look of real text quite well as design and set up page layouts.</p>
                              </div>
                              <div class="carousel-item active carousel-item-left">
                                 <div class="auther-con w-100 d-inline-block">
                                    <figure class="mb-0 d-inline-block">
                                       <img src={test1} alt="auther-img" class="img-fluid" />
                                    </figure>
                                    <div class="auther-title d-inline-block">
                                       <h4 class="text-white">Rajesh Patel</h4>
                                       <p class="mb-0">Dental Patient</p>
                                    </div>
                                 </div>
                                 <p class="text-white mb-0">This is a sample of dummy copy text often used to show page layout and design as sample layout text by Graphic designers, Web designers, People creating templates, and many other uses. It mimics the look of real text quite well as design and set up page layouts.</p>
                              </div>
                              <div class="carousel-item carousel-item-next carousel-item-left">
                                 <div class="auther-con w-100 d-inline-block">
                                    <figure class="mb-0 d-inline-block">
                                       <img src={test1} alt="auther-img" class="img-fluid" />
                                    </figure>
                                    <div class="auther-title d-inline-block">
                                       <h4 class="text-white">Rajesh Patel</h4>
                                       <p class="mb-0">Dental Patient</p>
                                    </div>
                                 </div>
                                 <p class="text-white mb-0">This is a sample of dummy copy text often used to show page layout and design as sample layout text by Graphic designers, Web designers, People creating templates, and many other uses. It mimics the look of real text quite well as design and set up page layouts.</p>
                              </div>
                           </div>
                           <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                              {/* <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> --> */}
                              <i class="fas fa-arrow-left"></i>
                              <span class="sr-only">Previous</span>
                           </a>
                           <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                              {/* <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> --> */}
                              <i class="fas fa-arrow-right"></i>
                              <span class="sr-only">Next</span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
