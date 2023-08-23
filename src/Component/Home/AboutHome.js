import React, { useEffect, useState } from 'react'
import img1 from '../../assets/images/small-left-curve-img.png'
import img2 from '../../assets/images/run-20221119101612544.png'
import img3 from '../../assets/images/small-right-curve-img.png'
import { Link } from 'react-router-dom'
import data from '../../data.json'


export default function AboutHome() {
   const [jsonData, setJsonData] = useState({});
   const [funFactsData, setFunFactsData] = useState([]);


   useEffect(() => {
      setJsonData(data);
      setFunFactsData(data.funFacts);

   }, []);
  return (
    <div>
        <section>
         <div class="w-100 float-left py-5 quality-system-con">
            <div class="container">
               <div class="row">
                  <div class="col-lg-6 col-md-6 d-flex align-items-center">
                     <div class="quality-system-left-con">
                        <h2>{jsonData.section2?.title}
                        </h2>
                        <p class='mb-2'>{jsonData.section2?.description1}</p>
                        <p class='mb-2'>{jsonData.section2?.description2}</p>

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
                        <Link to="/about" class="appointment-btn">Read More</Link>
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
