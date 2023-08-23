import React, { useEffect, useState } from 'react'
import Banner_ani1 from '../../assets/images/small-left-curve-img.png'
import Banner_ani2 from '../../assets/images/1 (7).jpg'
import Banner_ani3 from '../../assets/images/small-right-curve-img.png'
import { Link } from 'react-router-dom'
import data from '../../data.json'

export default function Banner() {
   const [jsonData, setJsonData] = useState({});

   useEffect(() => {
      setJsonData(data);
   }, []);
   return (
      <div>
         <section>
            <div class="w-100 float-left banner-con text-xl-left text-lg-left text-center header-and-banner-con banner-overlay-img">
               <div class="container">

                  <div class="row ">
                     <div class="col-lg-6 order-xl-0 order-lg-0 order-2">
                        <div class="banner-left-con">
                           {/* <figure class="mb-0 left-curve-img wow slideInLeft">
                                    <img src={Banner_ani1} alt="" class="img-fluid" />
                                 </figure> */}
                           <figure class="mb-0">
                              <img src={Banner_ani2} alt="banner-left-img" class="img-fluid banner-left-img" />
                           </figure>
                           {/* <figure class="mb-0 right-curve-img wow slideInRight">
                                    <img src={Banner_ani3} alt="" class="img-fluid" />
                                 </figure> */}
                        </div>
                     </div>
                     <div class="col-lg-6">
                        <div class="banner-right-content text-white">
                           <h5 style={{ color: '#00bcad' }}>{jsonData.section1?.title} </h5>
                           <h1 class='banner_headingh1'>{jsonData.section1?.heading}
                           </h1>
                           <p class="text-white col-lg-10 col-md-9 ml-xl-0 mr-xl-0 ml-lg-0 mr-lg-0 ml-auto mr-auto pl-0 pr-0">{jsonData.section1?.description}</p>
                           <Link to="/about" class="appointment-btn ">Read More</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}
