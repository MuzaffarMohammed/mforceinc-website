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
                            <li><a href="${URI}erpservices.html#functional-consulting">Functional Consulting</a></li>
                            <li><a href="${URI}erpservices.html#implementation">Implementation</a></li>
                            <li><a href="${URI}erpservices.html#upgrade-consolidate">Upgrade and Consolidate</a></li>
                            <li><a href="${URI}erpservices.html#extension-integration">Extension and Integration</a></li>
                            <li><a href="${URI}erpservices.html#porting-migration">Porting and Migration</a></li>
                            <li><a href="${URI}erpservices.html#post-implementation-support">Post Implementation Support</a></li>
                            <li><a href="${URI}erpservices.html#business-process-analysis">Business Process Analysis</a></li>
                            <li><a href="${URI}erpservices.html#functional-app-ext">Functional Application Extensions</a></li>
                        </ul>
                    </li>
                    <li><a href="${URI}client.html">Our Clients</a></li>
                    <li><a href="${URI}team.html">Team</a></li>
                    <li><a href="${URI}career.html">Careers</a></li>
                    <li><a href="${URI}contactus.html">Contact Us</a></li>
                    </ul>
               
       `)
    });
  })(jQuery);

