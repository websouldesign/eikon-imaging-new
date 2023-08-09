import React from 'react'
import img1 from '../../assets/images/fun-facts-icon11.png'
import img2 from '../../assets/images/fun-facts-icon22.png'
import img3 from '../../assets/images/fun-facts-icon33.png'
import img4 from '../../assets/images/fun-facts-icon44.png'

export default function Counter() {
  return (
    <div>
<div class="w-100 float-left fun-facts-con  pt-0 pb-0">
               <div class="about-fun-facts-con banner-overlay-img">
            <div class="container">
                  <div class="text-center overlay-img about-fun-facts-title">
                     <h2 class="text-white">A Healing Touch to Heal <br/> you Completely.
                     </h2>
                  </div>
                  <div class="fun-facts-box-con text-sm-left text-center pt-0 overlay-img">
                     <div class="row bg-white">
                        <div class="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                           <div class="fun-facts-box-item d-sm-flex align-items-sm-center">
                              <figure class="mb-0 d-inline-block">
                                 <img src={img1} alt="fun-facts-icon1" class="img-fluid"/>
                              </figure>
                              <div class="fun-facts-item-content d-inline-block">
                                 <div class="position-relative fun-facts-item-title d-inline-block">
                                    <h2 class="count">00</h2>
                                    <span>+</span>
                                 </div>
                                 <p class="mb-0">Happy Patients</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                           <div class="fun-facts-box-item d-sm-flex align-items-sm-center">
                              <figure class="mb-0 d-inline-block">
                                 <img src={img2} alt="fun-facts-icon1" class="img-fluid"/>
                              </figure>
                              <div class="fun-facts-item-content d-inline-block">
                                 <div class="position-relative fun-facts-item-title d-inline-block">
                                    <h2 class="count">00</h2>
                                    <span>+</span>
                                 </div>
                                 <p class="mb-0">Hospital Room</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                           <div class="fun-facts-box-item d-sm-flex align-items-sm-center">
                              <figure class="mb-0 d-inline-block">
                                 <img src={img3} alt="fun-facts-icon1" class="img-fluid"/>
                              </figure>
                              <div class="fun-facts-item-content d-inline-block">
                                 <div class="position-relative fun-facts-item-title d-inline-block">
                                    <h2 class="count">00</h2>
                                    <span>+</span>
                                 </div>
                                 <p class="mb-0">Qualified Doctor</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-6 pl-0 pr-0">
                           <div class="fun-facts-box-item d-sm-flex align-items-sm-center">
                              <figure class="mb-0 d-inline-block">
                                 <img src={img4} alt="fun-facts-icon1" class="img-fluid"/>
                              </figure>
                              <div class="fun-facts-item-content d-inline-block">
                                 <div class="position-relative fun-facts-item-title d-inline-block">
                                    <h2 class="count">00</h2>
                                    <span>%</span>
                                 </div>
                                 <p class="mb-0">Positive Feedback</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
{/* 
          <section>
         <div class="w-100 float-left fun-facts-con">
            <div class="container">
               <div class="row text-xl-left text-lg-left text-center">
                  <div class="col-lg-6">
                     <div class="fun-facts-heading ">
                        <h2>A Healing Touch to Heal
                           you Completely.
                        </h2>
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <div class="fun-facts-content">
                        <p class=" mb-0">This is a sample of dummy copy text often used to show page layout and design as sample layout text by Graphic designers, Web designers, People creating templates, and many other uses.</p>
                     </div>
                  </div>
               </div>
               <div class="fun-facts-box-con text-sm-left text-center">
                  <div class="row bg-white">
                     <div class="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                        <div class="fun-facts-box-item d-sm-flex align-items-sm-center">
                           <figure class="mb-0 d-inline-block">
                              <img src={img1} alt="fun-facts-icon1" class="img-fluid" />
                           </figure>
                           <div class="fun-facts-item-content d-inline-block">
                              <div class="position-relative fun-facts-item-title d-inline-block">
                                 <h2 class="count">00</h2>
                                 <span>+</span>
                              </div>
                              <p class="mb-0">Happy Patients</p>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                        <div class="fun-facts-box-item d-sm-flex align-items-sm-center">
                           <figure class="mb-0 d-inline-block">
                              <img src={img2} alt="fun-facts-icon1" class="img-fluid" />
                           </figure>
                           <div class="fun-facts-item-content d-inline-block">
                              <div class="position-relative fun-facts-item-title d-inline-block">
                                 <h2 class="count">00</h2>
                                 <span>+</span>
                              </div>
                              <p class="mb-0">Hospital Room</p>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                        <div class="fun-facts-box-item d-sm-flex align-items-sm-center">
                           <figure class="mb-0 d-inline-block">
                              <img src={img3} alt="fun-facts-icon1" class="img-fluid" />
                           </figure>
                           <div class="fun-facts-item-content d-inline-block">
                              <div class="position-relative fun-facts-item-title d-inline-block">
                                 <h2 class="count">00</h2>
                                 <span>+</span>
                              </div>
                              <p class="mb-0">Qualified Doctor</p>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-3 col-md-6 col-6 pl-0 pr-0">
                        <div class="fun-facts-box-item d-sm-flex align-items-sm-center">
                           <figure class="mb-0 d-inline-block">
                              <img src={img4} alt="fun-facts-icon1" class="img-fluid" />
                           </figure>
                           <div class="fun-facts-item-content d-inline-block">
                              <div class="position-relative fun-facts-item-title d-inline-block">
                                 <h2 class="count">00</h2>
                                 <span>%</span>
                              </div>
                              <p class="mb-0">Positive Feedback</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section> */}
    </div>
  )
}
