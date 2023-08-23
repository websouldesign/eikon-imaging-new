import React from 'react'
import img1 from '../../assets/images/small-left-curve-img.png'
import img2 from '../../assets/images/run-20221119101612544.png'
import img3 from '../../assets/images/small-right-curve-img.png'

export default function AboutSection() {
  return (
    <div>
       <section>
         <div class="w-100 float-left py-5 quality-system-con About_just">
            <div class="container">
               <div class="row">
               <div class="col-lg-6 col-md-6">
                     <div class="quality-system-right-con position-relative text-center">
                        {/* <figure class="mb-0 left-curve-img wow slideInLeft" style={{visibility: 'visible', animationName: 'slideInLeft'}}>
                           <img src={img1} alt="" class="img-fluid" />
                        </figure> */}
                        <figure class="mb-4">
                           <img src={img2} alt="quality-system-img" class="img-fluid human-img"/>
                        </figure>
                        {/* <figure class="mb-0 right-curve-img wow slideInRight" style={{visibility: 'visible', animationName: 'slideInRight'}}>
                           <img src={img3} alt="" class="img-fluid" />
                        </figure> */}
                     </div>
                  </div>
                  <div class="col-lg-6 col-md-6 d-flex align-items-center">
                     <div class="quality-system-left-con">
                        <h2>WelCome to Eikon
                        </h2>
                        <p class='mb-2'>We at Eikon provide our services to different industries like Healtchare, NDT, Home Security to name a few.</p>
                        <p class='mb-2'>Our product IDEATOR, is an AI enabled system and software solution. It has been successfully installed and perfoming well in hospitals and at OEMs in India. Our product is mainly used by endo-spine surgeons, urologists, orthopaedics, neurologists and radiologists. IDEATOR's main USP is the best image quality at lower X-ray Dose and seamless UI/UX.</p>
                        <p class='mb-2'>Eikon provides a complete, customized E2E product development from ideation to realization. Our expertise in product development use state-of-the-art AI/ML solutions to address the exact pain points and requirements from end-users & market.</p>
                        <p class='mb-0'>Once associated, Eikon assures the quality products and timely services.</p>
                        
                        {/* <Link to="#" class="appointment-btn">Read More</Link> */}
                     </div>
                  </div>
                
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
