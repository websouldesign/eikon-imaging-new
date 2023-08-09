import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderTop() {
  return (
    <div> 
    <div class="w-100 float-left top-bar-main-con text-white text-xl-left text-lg-left text-md-left text-center">
       <div class="container">
          <div class="row">
             <div class="col-lg-6 col-md-6 col-12">
                <div class="top-bar-left-con ">
                   <i class="fas fa-map-marker-alt mx-1"></i>
                   <span>504, 5-B, Manasarovar Complex Sector-34, Kamothe Navi Mumbai-410209</span>
                </div>
             </div>
             <div class="col-lg-6 col-md-6 col-12 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
                <div class="top-bar-right-con d-flex">
                   <span>Get Social:</span>
                      <ul class="list-unstyled mb-0">
                         <li class="float-left"><Link target='_blank' to="https://www.facebook.com/" class="text-white"><i class="fab fa-facebook-square"></i></Link></li>
                         <li class="float-left"><Link target='_blank' to="https://twitter.com/?lang=en" class="text-white"><i class="fab fa-twitter-square"></i></Link></li>
                         <li class="float-left"><Link target='_blank' to="https://www.pinterest.com/" class="text-white"><i class="fab fa-pinterest-square"></i></Link></li>
                         <li class="float-left"><Link target='_blank' to="https://www.youtube.com/" class="text-white"><i class="fab fa-youtube-square"></i></Link></li>
                      </ul>
                </div>
             </div>
          </div>
       </div>
    </div></div>
  )
}
