import React from 'react'
import { Link } from 'react-router-dom'

export default function BookApoint() {
  return (
    <div>
        <div class="w-100 float-left news-letter-con">
            <div class="container">
               <div class="news-letter-inner-con banner-overlay-img">
               <div class="row overlay-img align-items-center">
                     <div class="col-lg-6 col-md-5">
                        <div class="news-letter-title">
                           <h2  class="text-white mb-0 hummmarh2">Subscribe to our 
                              Newsletter
                           </h2>
                        </div>
                     </div>
                     <div class="col-lg-6 col-md-7">
                        <div class="news-letter-input-con position-relative">
                           <div class="news-letter-input-feild">
                              <input type="email" placeholder="Enter Your Email:" class="w-100"/>
                           </div>
                           <button>
                           <i class="far fa-envelope"></i>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </div>
  )
}
