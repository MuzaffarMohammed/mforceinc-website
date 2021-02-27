!(function($) {
  "use strict";
  $(document).ready(function () {
    var URI = "";
    var DIR_BACK = "../";
    if(window.location.pathname.indexOf('index.html') !== -1){
      URI = "pages/";
      DIR_BACK = "";
    }
    $("#footer-div").html( `
    <!-- ======= Footer ======= -->
    <footer id="footer">
       <div class="footer-top">
         <div class="container">
           <div class="row">
             <div class="col-lg-3 col-md-6">
               <div class="footer-info">
                 <h3>MForce,INC</h3>
                 <p>
                   445 East FM Road 1382,<br>
                   Cedar Hill, Texas 75104, United States<br><br>
                   <strong>Phone:</strong> 469-743-1881<br>
                   <strong>Email:</strong> admin@mforceinc.com<br>
                 </p>
                 <div class="social-links mt-3">
                   <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                   <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                   <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                   <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                   <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                 </div>
               </div>
             </div>
   
             <div class="col-lg-2 col-md-6 footer-links">
               <h4>Useful Links</h4>
               <ul>
                 <li><i class="bx bx-chevron-right"></i> <a href="${DIR_BACK}index.html">Home</a></li>
                 <li><i class="bx bx-chevron-right"></i> <a href="${DIR_BACK}index.html#about">About us</a></li>
                 <li><i class="bx bx-chevron-right"></i> <a href="${DIR_BACK}index.html#services">Services</a></li>
                 <li><i class="bx bx-chevron-right"></i> <a href="${DIR_BACK}termsandservices.html">Terms of service</a></li>
                 <li><i class="bx bx-chevron-right"></i> <a href="${DIR_BACK}privacypolicy.html">Privacy policy</a></li>
               </ul>
             </div>
   
             <div class="col-lg-3 col-md-6 footer-links">
               <h4>Our Services</h4>
               <ul>
                 <li><i class="bx bx-chevron-right"></i> <a href="https://www.appseonit.com/pages/website_categories.html">Web Design</a></li>
                 <li><i class="bx bx-chevron-right"></i> <a href="https://www.appseonit.com/pages/software_development.html">Web Development</a></li>
                 <li><i class="bx bx-chevron-right"></i> <a href="https://www.appseonit.com/pages/software_development.html">Software Development</a></li>
                 <li><i class="bx bx-chevron-right"></i> <a href="${URI}services.html#software-testing">Software Testing</a></li>
                 <li><i class="bx bx-chevron-right"></i> <a href="${URI}services.html#cloud-computing">Cloud Computing</a></li>
                 <li><i class="bx bx-chevron-right"></i> <a href="${URI}erpservices.html#porting-migration">Porting And Migration</a></li>
                 <li><i class="bx bx-chevron-right"></i> <a href="${URI}erpservices.html#functional-consulting">Functional Consulting</a></li>
                 <li><i class="bx bx-chevron-right"></i> <a href="${URI}erpservices.html#business-process-analysis">Business Process Analysis</a></li>
               </ul>
             </div>
   
             <div class="col-lg-4 col-md-6 footer-newsletter">
               <h4>Our Newsletter</h4>
               <p>Join our newsletter For the latest updates and promotions.</p>
               <form action="" method="post">
                 <input type="email" name="email"><input type="submit" value="Subscribe">
               </form>
             </div>
           </div>
         </div>
       </div>
   
       <div class="container">
         <div class="copyright">
           &copy; Copyright <strong><span>MForce,INC</span></strong>. All Rights Reserved
         </div>
         <div class="credits">
           Designed by <a href="https://appseonit.com/">Appseonit Technologies Private Limited</a>
         </div>
       </div>
     </footer><!-- End Footer -->
     `)
  });
})(jQuery);