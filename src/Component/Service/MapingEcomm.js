import React from 'react'
import Medical12 from '../../assets/images/Medical12.jpeg'


export default function MapingEcomm() {
  return (
    <div>
         <section>
         <div class="w-100 float-left py-5 quality-system-con">
            <div class="container">
               <div class="row">

               <div class="col-lg-6 col-md-6">
                     <div class=" position-relative text-center">
                        {/* <figure class="mb-0 left-curve-img wow slideInLeft" style={{visibility: 'visible', animationName: 'slideInLeft'}}>
                           <img src={img1} alt="" class="img-fluid" />
                        </figure> */}
                        <figure class="mb-4">
                           <img src={Medical12} alt="quality-system-img" class="img-fluid human-img"/>
                        </figure>
                        {/* <figure class="mb-0 right-curve-img wow slideInRight" style={{visibility: 'visible', animationName: 'slideInRight'}}>
                           <img src={img3} alt="" class="img-fluid" />
                        </figure> */}
                     </div>
                  </div>

                  <div class="col-lg-6 col-md-6 d-flex align-items-center">
                     <div class="quality-system-left-con">
                       
                        <p class='mb-2'>This is a sample of dummy copy text often used to show page layout and design as sample layout text by Graphic designers, Web designers, People creating templates, and many other uses.This is a sample of dummy copy text often used to show page layout and design as sample layout text by Graphic designers, Web designers, People creating templates, and many other uses.</p>
                        <p class=''>This is a sample of dummy copy text often used to show page layout and design as sample layout text by Graphic designers, Web designers, People creating templates, and many other uses.This is a sample of dummy copy text often used to show page layout and design as sample layout text by Graphic designers, Web designers, People creating templates, and many other uses</p>

                       
                      
                        
                     </div>
                  </div>
                 
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
