import React from 'react'

import Team1 from "../../assets/images/team.jpeg"

export default function TeamSection() {
    return (
        <div>
            <section>
                <div class="w-100 float-left professional-con">
                    <div class="container">
                        <div class="professional-title text-center">
                            <h2> Our Team</h2>
                            <p>This is a sample of dummy copy text often used to show page layout and design as sample <br /> layout text by Graphic designers.
                            </p>
                        </div>
                        <div class="professional-box">
                            <div class="row">
                                <div class="col-lg-4 col-md-4">
                                    <div class="professional-box-item text-center">
                                        <a>
                                            <figure class="mb-0">
                                                <img src={Team1} alt="professional-box-img" class="img-fluid rounded-circle" />
                                            </figure>
                                            <h5>Dr. Yash Patil</h5>
                                            <small class="d-block">Sonographer</small>
                                            <span class="d-block">This is a sample of dummy copy text often used to show page layout and design as sample</span>
                                        </a><div class="professional-box-social-list"><a href="team-detail.html">
                                        </a>
                                        {/* <ul class="list-unstyled mb-0"><a href="team-detail.html">
                                        </a><li class="d-inline-block"><a href="team-detail.html"></a><a href="https://www.facebook.com/"><i class="fab fa-facebook-square d-flex align-items-center justify-content-center text-white pr-0"></i></a></li>
                                                <li class="d-inline-block"><a href="https://twitter.com/?lang=en"><i class="fab fa-twitter-square d-flex align-items-center justify-content-center text-white pr-0"></i></a></li>
                                                <li class="d-inline-block"><a href="https://www.linkedin.com/signup"><i class="fab fa-linkedin d-flex align-items-center justify-content-center text-white pr-0"></i></a></li>
                                                <li class="d-inline-block"><a href="https://www.pinterest.com/"><i class="fab fa-pinterest-square mr-0 d-flex align-items-center justify-content-center text-white pr-0"></i></a></li>
                                            </ul> */}
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-4 col-lg-4 col-md-4">
                                    <div class="professional-box-item text-center">

                                        <figure class="mb-0">
                                            <img src={Team1} alt="professional-box-img" class="img-fluid rounded-circle" />
                                        </figure>
                                        <h5>Dr. Yash Patil</h5>
                                        <small class="d-block">Sonographer</small>
                                        <span class="d-block">This is a sample of dummy copy text often used to show page layout and design as sample</span>
                                        <div class="professional-box-social-list"><a href="team-detail.html">
                                        </a>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-4 col-lg-4 col-md-4">
                                    <div class="professional-box-item text-center mb-0">

                                        <figure class="mb-0">
                                            <img src={Team1} alt="professional-box-img" class="img-fluid rounded-circle" />
                                        </figure>
                                        <h5>Dr. Yash Patil</h5>
                                        <small class="d-block">Sonographer</small>
                                        <span class="d-block">This is a sample of dummy copy text often used to show page layout and design as sample</span>
                                        <div class="professional-box-social-list"><a href="team-detail.html">
                                        </a>
                                        </div>

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
