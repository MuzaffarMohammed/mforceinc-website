!(function($) {
    "use strict";
    $(document).ready(function () {
      var URI = "";
      var BACK_DIR = "../";
      var BACK_DIR_INDEX = "../index.html";
      if(window.location.pathname.indexOf('index.html') !== -1){
        URI = "pages/";
        BACK_DIR = "";
        BACK_DIR_INDEX = "index.html";
      }

      $("#header-div").html( `
                
                <div class="container-fluid d-flex align-items-center justify-content-between">
                <!-- <h1 class="logo"><a href="${BACK_DIR_INDEX}">MForce</a></h1> -->
                <!-- Uncomment below if you prefer to use an image logo -->
                <a href="${BACK_DIR_INDEX}" class="logo"><img src="${BACK_DIR}assets/img/MForce_logo_White.svg" alt="" class="img-fluid"></a>
                <nav class="nav-menu d-none d-lg-block">
                    <ul>
                    <li><a href="${BACK_DIR_INDEX}">Home</a></li>
                    <li><a href="${BACK_DIR_INDEX}#about">About</a></li>
                        <li class="drop-down"><a href="${BACK_DIR_INDEX}#services">Services</a>
                        <ul>
                        <li class="drop-down"><a href="${URI}website_design.html">Web Design</a>
                            <ul>
                            <li><a href="${URI}website_design.html">Static Website Development</a></li>
                            <li><a href="${URI}website_design.html">Dynamic Website Development</a></li>
                            <li><a href="${URI}website_design.html">E-commerce Website Development</a></li>
                            </ul>
                        </li>
                        <li class="drop-down">
                            <a href="${URI}software_development.html">Software Development</a>
                            <ul>
                            <li><a href="${URI}software_development.html">Software Product Development</a></li>
                            <li><a href="${URI}software_development.html">Custom  Software Development</a></li>
                            <li><a href="${URI}software_development.html">Enterprise Application Development</a></li>
                            <li><a href="${URI}software_development.html">Desktop Application Development</a></li>
                            <li><a href="${URI}software_development.html">Web Application Development</a></li>
                            <li><a href="${URI}software_development.html">Cloud Application Development</a></li>
                            </ul>
                        </li>
                        <li><a href="${URI}services.html#cloud-computing">Cloud Computing</a></li>
                        <li class="drop-down"><a href="#software-testing">Software Testing</a>
                            <ul>
                            <li><a href="${URI}services.html#software-testing">Functional Testing</a></li>
                            <li><a href="${URI}services.html#software-testing">Test Automation</a></li>
                            <li><a href="${URI}services.html#software-testing">Performance Testing</a></li>
                            <li><a href="${URI}services.html#software-testing">Regression Testing</a></li>
                            <li><a href="${URI}services.html#software-testing">Component Testing</a></li>                  
                            <li><a href="${URI}services.html#software-testing">Risk-Based Testing</a></li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                        <li class="drop-down"><a href="#services">ERP Services</a>
                        <ul>
                            <li><a href="${URI}erpservices.html#functional-consulting">Functional consulting</a></li>
                            <li><a href="#">Implementation</a></li>
                            <li><a href="#">Upgrade and Consolidate</a></li>
                            <li><a href="#">Extension and integration</a></li>
                            <li><a href="#">Porting and migration</a></li>
                            <li><a href="#">Post implementation support</a></li>
                            <li><a href="#">Business process analysis</a></li>
                            <li><a href="#">Functional application extensions</a></li>
                        </ul>
                    </li>
                    <li><a href="${URI}client.html">Our Clients</a></li>
                    <li><a href="${URI}team.html">Team</a></li>
                    <li><a href="${URI}career.html">Careers</a></li>
                    <li><a href="${URI}contactus.html">Contact Us</a></li>
                    </ul>
                </nav><!-- .nav-menu -->
                <a href="${BACK_DIR_INDEX}#about" class="get-started-btn scrollto">Get Started</a>
                </div>
       `)
    });
  })(jQuery);

