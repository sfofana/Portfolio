(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"main\">\r\n    <!-- Header -->\r\n    <mdb-navbar SideClass=\"navbar navbar-expand-lg mdb-color lighten-1\">\r\n        <mdb-navbar-brand>\r\n            <a href=\"#\" class=\"navbar-brand\"></a>\r\n        </mdb-navbar-brand>\r\n      </mdb-navbar>\r\n\r\n      <div class=\"container panel my-5 py-5 z-depth-1\">\r\n \r\n \r\n        <!--Section: Content-->\r\n        <section class=\"px-md-5 mx-md-5 text-center text-lg-left text-light\">   \r\n          <!--Grid row-->\r\n          <div class=\"row\"> \r\n            <!--Grid column-->\r\n            <div class=\"col-md-6 mb-4 mb-md-0 space\"> \r\n              <h3 class=\"font-weight-bold text-center\" [@animator]=\"followLeft\">Sufyan Fofana</h3>\r\n                <!-- <h5 class=\"font-weight-bold\">Software Developer</h3> -->   \r\n              <p class=\"text-light paragraph\" [@animator]=\"leadLeft\">I am a Software developer with experience building full-stack applications. \r\n                  Developed applications using various technologies such as HTML, TypeScript, Java, Spring, Hibernate, and SQL. \r\n                  Applications were developed using methodologies such as Agile and SCRUM to efficiently work in team \r\n                  environments and achieve project goals.</p>   \r\n            </div>\r\n            <!--Grid column-->\r\n    \r\n            <!--Grid column-->\r\n            <div class=\"col-md-6 mb-4 mb-md-0 space\" [@animator]=\"zoomIn\">\r\n              <!--Image-->\r\n              <div class=\"view display overlay z-depth-1-half\">\r\n                <img src=\"assets/images/pro.png\" class=\"img-fluid\"\r\n                  alt=\"\">             \r\n                  <div class=\"mask rgba-white-light\"></div>               \r\n              </div> \r\n            </div>\r\n            <!--Grid column--> \r\n             <!--Grid column-->\r\n             <div class=\"col-md-6 mb-4 mb-md-0 space\" [@animator]=\"zoomIn\">\r\n              <!--Image-->\r\n              <div class=\"view overlay z-depth-1-half\">\r\n                <img src=\"assets/images/aboutme.jpg\" class=\"img-fluid\"\r\n                  alt=\"\">             \r\n                  <div class=\"mask rgba-white-light\"></div>               \r\n              </div> \r\n            </div>\r\n            <!--Grid column--> \r\n            <!--Grid column-->\r\n            <div class=\"col-md-6 mb-4 mb-md-0 space\"> \r\n              <h3 class=\"font-weight-bold text-center\" [@animator]=\"followRight\">About Me</h3>\r\n                <!-- <h5 class=\"font-weight-bold\">Software Developer</h3> -->   \r\n              <p class=\"text-light paragraph\" [@animator]=\"leadRight\">I enjoy traveling, long days by the beach, the outdoors, \r\n                exploring and riding my dirt bike through the woods, and quality time with family. \r\n                I also enjoy watching sports, tinkering with mechanical and electrical components, \r\n                caring for my house plants, art drawing and painting.</p>   \r\n            </div>\r\n            <!--Grid column-->    \r\n          </div>\r\n          <!--Grid row--> \r\n        </section>\r\n        <!--Section: Content-->   \r\n      </div>\r\n\r\n\r\n      <nav class=\"navbar navbar-expand-lg mdb-color lighten-1\">\r\n\r\n      <!-- Collapse button -->\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#basicExampleNav\"\r\n        aria-controls=\"basicExampleNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n    \r\n      <!-- Collapsible content -->\r\n      <div class=\"collapse navbar-collapse\" id=\"basicExampleNav\">\r\n        <div class=\"container\">\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link waves-light text-light\" routerLink=\"/home\" mdbWavesEffect\r\n                [@animator]=\"home\" (@animator.done)=\"homeAnimate('stop')\" \r\n                (mouseover)=\"homeAnimate('start')\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link waves-light text-light\" routerLink=\"/work\" mdbWavesEffect\r\n                [@animator]=\"work\" (@animator.done)=\"workAnimate('stop')\" \r\n                (mouseover)=\"workAnimate('start')\">Work Experience</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link waves-light text-light\" routerLink=\"/freelance\" mdbWavesEffect\r\n              [@animator]=\"free\" (@animator.done)=\"freeAnimate('stop')\" \r\n              (mouseover)=\"freeAnimate('start')\">Freelance</a>\r\n          </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link waves-light text-light\" routerLink=\"/projects\"\r\n                [@animator]=\"project\" (@animator.done)=\"projectAnimate('stop')\" \r\n                (mouseover)=\"projectAnimate('start')\" mdbWavesEffect>Projects</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link waves-light text-light\" routerLink=\"/skills\" mdbWavesEffect\r\n              [@animator]=\"skill\" (@animator.done)=\"skillAnimate('stop')\" \r\n              (mouseover)=\"skillAnimate('start')\">Technologies</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link waves-light text-light\" routerLink=\"/contact\" mdbWavesEffect\r\n            [@animator]=\"contact\" (@animator.done)=\"contactAnimate('stop')\" \r\n            (mouseover)=\"contactAnimate('start')\">Contact <mdb-icon fas icon=\"envelope\" class=\"white-text\"></mdb-icon></a>\r\n        </li>\r\n        </ul>\r\n        </div>\r\n      </div>\r\n      <!-- Collapsible content -->\r\n      \r\n    </nav>\r\n\r\n<!-- <div>\r\n<mdb-navbar SideClass=\"navbar navbar-expand-lg mdb-color lighten-1\">\r\n  <mdb-navbar-brand>\r\n      <a class=\"navbar-brand\"></a>\r\n  </mdb-navbar-brand>\r\n  <links>\r\n      <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item active\">\r\n              <a class=\"nav-link waves-light text-light\" routerLink=\"/home\" mdbWavesEffect>Home<span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link waves-light text-light\" routerLink=\"/work\" mdbWavesEffect>Work Experience</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link waves-light text-light\" routerLink=\"/freelance\" mdbWavesEffect>Freelance</a>\r\n        </li>\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link waves-light text-light\" routerLink=\"/projects\" mdbWavesEffect>Projects</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link waves-light text-light\" routerLink=\"/skills\" mdbWavesEffect>Technologies</a>\r\n        </li>\r\n      </ul>\r\n  </links>\r\n</mdb-navbar>\r\n</div> -->\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!-- Footer -->\r\n<footer class=\"page-footer font-small mdb-color darken-3\">\r\n \r\n    <!-- Footer Elements -->\r\n    <div class=\"container1\">\r\n  \r\n      <!-- Grid row-->\r\n      <div class=\"row\">\r\n  \r\n        <!-- Grid column -->\r\n        <div class=\"col-md-12 py-5\">\r\n          <div class=\"mb-5 flex-center\">\r\n            <!--Linkedin -->\r\n            <a class=\"li-ic\" href=\"http://linkedin.com/in/sufyan-fofana-2a743584\" target=\"_blank\"\r\n              [@animator]=\"linkedin\" (@animator.done)=\"linkedinAnimate('stop')\" \r\n              (mouseover)=\"linkedinAnimate('start')\">\r\n              <i class=\"fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\r\n            </a>\r\n            <!--GitHub-->\r\n            <a class=\"ins-ic\" href=\"https://github.com/sfofana\" target=\"_blank\"\r\n              [@animator]=\"git\" (@animator.done)=\"gitAnimate('stop')\" \r\n              (mouseover)=\"gitAnimate('start')\">\r\n              <i class=\"fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\r\n            </a>\r\n            <!--Youtube-->\r\n            <a class=\"pin-ic\" href=\"https://www.youtube.com/channel/UCQlhey4SbBsnpIRtrvaEJ6g\" target=\"_blank\"\r\n              [@animator]=\"youtube\" (@animator.done)=\"youtubeAnimate('stop')\" \r\n              (mouseover)=\"youtubeAnimate('start')\">\r\n              <i class=\"fab fa-youtube fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\r\n            </a>\r\n            <!--Email-->\r\n            <a class=\"pin-ic\" routerLink=\"/contact\">\r\n              <i class=\"fas fa-envelope fa-lg white-text mr-md-5 mr-3 fa-2x\"\r\n              [@animator]=\"email\" (@animator.done)=\"emailAnimate('stop')\" \r\n              (mouseover)=\"emailAnimate('start')\"> </i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <!-- Grid column -->\r\n  \r\n      </div>\r\n      <!-- Grid row-->\r\n  \r\n    </div>\r\n    <!-- Footer Elements -->\r\n  \r\n    <!-- Copyright -->\r\n    <div class=\"footer-copyright text-center mdb-color py-3\">\r\n    </div>\r\n    <!-- Copyright -->\r\n  \r\n  </footer>\r\n  <!-- Footer -->\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container z-depth-1 my-5 px-0\" [@animator]=\"slideUp\">\r\n\r\n    <!--Section: Content-->\r\n    <section class=\"p-5 my-md-5 text-center\">\r\n  \r\n      <!-- Section heading -->\r\n      <h3 class=\"text-center font-weight-bold text-white mt-5 mb-3\">Contact Me</h3>\r\n\r\n      <form class=\"mb-5 mx-md-5\" action=\"\">\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"col-md-4 mb-4\">\r\n  \r\n            <!-- Name -->\r\n            <input type=\"text\" id=\"name\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\">\r\n  \r\n          </div>\r\n          <div class=\"col-md-4 mb-4\">\r\n  \r\n            <!-- Email -->\r\n            <input type=\"email\" id=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\r\n  \r\n          </div>\r\n          <div class=\"col-md-4 mb-4\">\r\n  \r\n            <!-- Phone -->\r\n            <input type=\"number\" id=\"phone\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Phone (optional)\">\r\n  \r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 mb-4\">\r\n  \r\n            <!-- Subject -->\r\n            <input type=\"text\" id=\"subject\" [(ngModel)]=\"subject\" name=\"subject\" class=\"form-control\" placeholder=\"Subject\">\r\n  \r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n  \r\n            <div class=\"form-group mb-4\">\r\n              <textarea class=\"form-control rounded\" id=\"message\" rows=\"3\" (keyup.enter)=\"submit()\" [(ngModel)]=\"message\" name=\"message\" placeholder=\"Message\"></textarea>\r\n            </div>\r\n  \r\n            <div class=\"text-center\">\r\n              <button type=\"submit\" mdbBtn color=\"primary\" class=\"waves-light\" \r\n              [@animator]=\"button\" (@animator.done)=\"btnAnimate('stop')\" \r\n              (click)=\"submit(); btnAnimate('start')\">\r\n              Submit</button>\r\n            </div>\r\n\r\n            <div *ngIf=\"isSpinning\" class=\"spinner-border my-3 text-light\" role=\"status\"></div>\r\n\r\n            <div class=\"spacer d-flex justify-content-center\">\r\n              <p class=\"success\" *ngIf=\"success\">{{success}}</p>\r\n              <p class=\"invalid\" *ngIf=\"invalid\">{{invalid}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n      </form>\r\n  \r\n    </section>\r\n    <!--Section: Content-->\r\n  \r\n  \r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/free/free.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/free/free.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container panel my-5 py-5 z-depth-1\">\r\n    <section class=\"px-md-5 mx-md-5 text-center text-lg-left text-light\">   \r\n      <div class=\"row\"> \r\n        <div class=\"col-md-6 mb-4 mb-md-0\" [@animator]=\"leadRight\"> \r\n            <div class=\"view overlay z-depth-1-half\">\r\n                <img src=\"assets/images/clinic.png\" class=\"img-fluid\">\r\n                <a href=\"http://jffclinicsamplev1.s3-website.us-east-2.amazonaws.com\" target=\"_blank\">\r\n                  <div class=\"mask rgba-white-light\"></div>\r\n                </a>\r\n              </div>         \r\n        </div>\r\n        <div class=\"col-md-6 mb-4 mb-md-0\" [@animator]=\"followRight\">         \r\n          <h3 class=\"font-weight-bold\">JFF Clinic</h3>\r\n            <!-- <h5 class=\"font-weight-bold\">Software Developer</h3> -->   \r\n          <p class=\"text-light\">Sierra Leone Clinic for locals. Designed a website for the \r\n              locals including information of services and contact support</p>  \r\n        </div>  \r\n      </div>\r\n    </section>  \r\n  </div>\r\n\r\n  <div class=\"container panel my-5 py-5 z-depth-1\">\r\n    <section class=\"px-md-5 mx-md-5 text-center text-lg-left text-light\">   \r\n      <div class=\"row\"> \r\n        <div class=\"col-md-6 mb-4 mb-md-0\" [@animator]=\"leadRight\"> \r\n            <div class=\"view overlay z-depth-1-half\">\r\n                <img src=\"assets/images/sfac.png\" class=\"img-fluid\">\r\n                <a href=\"http://sfofana-ac.s3-website.us-east-2.amazonaws.com\" target=\"_blank\">\r\n                  <div class=\"mask rgba-white-light\"></div>\r\n                </a>\r\n              </div>         \r\n        </div>\r\n        <div class=\"col-md-6 mb-4 mb-md-0\" [@animator]=\"followRight\">         \r\n          <h3 class=\"font-weight-bold\">Sfofana Arts & Crafts</h3>\r\n            <!-- <h5 class=\"font-weight-bold\">Software Developer</h3> -->   \r\n          <p class=\"text-light\">My personal eCommerce website. Designed a eCommerce website for my \r\n            arts and crafts</p>  \r\n        </div>  \r\n      </div>\r\n    </section>  \r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-5 py-5\"\r\n[@animator]=\"slideDown\">\r\n<div class=\"px-md-5 mx-md-5\">\r\n<mdb-carousel class=\"carousel slide carousel-fade\" [animation]=\"'fade'\">\r\n    <mdb-carousel-item>\r\n      <div class=\"view w-100\">\r\n        <img class=\"d-block w-100\" src=\"assets/images/revwork.png\" alt=\"First slide\">\r\n        <a href=\"http://sufyan-fofana-portfolio.s3-website.us-east-2.amazonaws.com//work\">\r\n        <div class=\"mask rgba-black-strong waves-light\" mdbWavesEffect></div>\r\n        </a>\r\n      </div>\r\n      <div class=\"carousel-caption\">\r\n        <h3 class=\"h3-responsive\">Work Experience</h3>\r\n        <p>Java Full Stack Developer</p>\r\n      </div>\r\n    </mdb-carousel-item>\r\n    <mdb-carousel-item>\r\n      <div class=\"view w-100\">\r\n        <img class=\"d-block w-100\" src=\"assets/images/clinic.png\" alt=\"Second slide\">\r\n        <a href=\"http://sufyan-fofana-portfolio.s3-website.us-east-2.amazonaws.com//freelance\">\r\n          <div class=\"mask rgba-black-strong waves-light\" mdbWavesEffect></div>\r\n          </a>\r\n      </div>\r\n      <div class=\"carousel-caption\">\r\n        <h3 class=\"h3-responsive\">Freelance</h3>\r\n        <p>Clinic Homepage</p>\r\n      </div>\r\n    </mdb-carousel-item>\r\n    <mdb-carousel-item>\r\n      <div class=\"view w-100\">\r\n        <img class=\"d-block w-100\" src=\"assets/images/project.png\" alt=\"Third slide\">\r\n        <a href=\"http://sufyan-fofana-portfolio.s3-website.us-east-2.amazonaws.com//projects\">\r\n          <div class=\"mask rgba-black-strong waves-light\" mdbWavesEffect></div>\r\n          </a>\r\n      </div>\r\n      <div class=\"carousel-caption\">\r\n        <h3 class=\"h3-responsive\">Projects</h3>\r\n        <p>Online Bank</p>\r\n      </div>\r\n    </mdb-carousel-item>\r\n    <mdb-carousel-item>\r\n      <div class=\"view w-100\">\r\n        <img class=\"d-block w-100\" src=\"assets/images/project.png\" alt=\"Third slide\">\r\n        <a href=\"http://sufyan-fofana-portfolio.s3-website.us-east-2.amazonaws.com//projects\">\r\n          <div class=\"mask rgba-black-strong waves-light\" mdbWavesEffect></div>\r\n          </a>\r\n      </div>\r\n      <div class=\"carousel-caption\">\r\n        <h3 class=\"h3-responsive\">Technologies</h3>\r\n        <p>Frontend, Backend, Cloud</p>\r\n      </div>\r\n    </mdb-carousel-item>\r\n    <mdb-carousel-item>\r\n      <div class=\"view w-100\">\r\n        <img class=\"d-block w-100\" src=\"assets/images/project.png\" alt=\"Third slide\">\r\n        <a href=\"http://sufyan-fofana-portfolio.s3-website.us-east-2.amazonaws.com//projects\">\r\n          <div class=\"mask rgba-black-strong waves-light\" mdbWavesEffect></div>\r\n          </a>\r\n      </div>\r\n      <div class=\"carousel-caption\">\r\n        <h3 class=\"h3-responsive\">Education</h3>\r\n        <p>Mechanical Engineering Technology</p>\r\n      </div>\r\n    </mdb-carousel-item>\r\n  </mdb-carousel>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/projects/projects.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/projects/projects.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <table class=\"table-responsive\">\r\n    <tbody>\r\n      <tr>\r\n        <th>\r\n          <mdb-card \r\n          [@animator]=\"freddieCard\" (mouseover)=\"freddieCardAnimate('start')\"> \r\n            <mdb-card-img src=\"assets/images/fredpage.png\" alt=\"Card image cap\"></mdb-card-img>\r\n          <mdb-card-body>\r\n            <mdb-card-title>\r\n              <h4>Freddie Mac Enhancements</h4>\r\n            </mdb-card-title>\r\n            <mdb-card-text class=\"text-light\">Role: Implemented consumption of microservices and persisting data with in-house apps. \r\n              Technologies used: Angular, JSP, HTML, CSS, NodeJS, Java, Spring Boot, Jenkins.\r\n            </mdb-card-text>\r\n            <a type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" mdbWavesEffect\r\n            [@animator]=\"freddieLnch\" (@animator.done)=\"freddieLnchAnimate('stop')\" \r\n            (click)=\"freddieLnchAnimate('pulse')\" (mouseover)=\"freddieLnchAnimate('heartBeat')\"\r\n            href=\"http://www.freddiemac.com\" target=\"_blank\">EXPLORE</a>\r\n          </mdb-card-body>\r\n        </mdb-card>\r\n        </th>\r\n        <th>\r\n          <mdb-card  \r\n            [@animator]=\"rekCard\" (mouseover)=\"rekCardAnimate('start')\">\r\n              <mdb-card-img src=\"assets/images/rek.png\" alt=\"Card image cap\"></mdb-card-img>\r\n              <mdb-card-body>\r\n                <mdb-card-title>\r\n                  <h4>Aws Rekognition App</h4>\r\n                </mdb-card-title>\r\n                <mdb-card-text class=\"text-light\">Face rekognition app using AWS allows user to upload images and compare similarity between different faces. \r\n                  Technologies used: Angular, Material Design Bootstrap, Java, C#, AWS EC2, AWS S3, Jenkins.\r\n                </mdb-card-text>\r\n                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\" data-target=\"#basicExample\" (click)=\"rek.show()\"\r\n                mdbWavesEffect\r\n                [@animator]=\"rekLnch\" (@animator.done)=\"rekLnchAnimate('stop')\" \r\n                (click)=\"rekLnchAnimate('pulse')\" (mouseover)=\"rekLnchAnimate('heartBeat')\">LAUNCH DEMO</button>\r\n              </mdb-card-body>\r\n            </mdb-card>\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <th>\r\n          <mdb-card \r\n          [@animator]=\"bankCard\" (mouseover)=\"bankCardAnimate('start')\"> \r\n            <mdb-card-img src=\"assets/images/bank2-1.png\" alt=\"Card image cap\"></mdb-card-img>\r\n          <mdb-card-body>\r\n            <mdb-card-title>\r\n              <h4>JS.Fofana Bank V2.1</h4>\r\n            </mdb-card-title>\r\n            <mdb-card-text class=\"text-light\">Online Banking app with features such as signin, deposit, withdraw, transferfunds, etc. \r\n              Technologies used: Angular, Material Design Bootstrap, HTML, CSS, NodeJS, Express, MongoDB, AWS S3, Heroku.\r\n            </mdb-card-text>\r\n            <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\" data-target=\"#basicExample\" (click)=\"bankv21.show()\"\r\n            mdbWavesEffect\r\n            [@animator]=\"bankLnch\" (@animator.done)=\"bankLnchAnimate('stop')\" \r\n            (click)=\"bankLnchAnimate('pulse')\" (mouseover)=\"bankLnchAnimate('heartBeat')\">LAUNCH DEMO</button>\r\n          </mdb-card-body>\r\n        </mdb-card>\r\n        </th>\r\n        <th>\r\n          <mdb-card  \r\n            [@animator]=\"newsCard\" (mouseover)=\"newsCardAnimate('start')\">\r\n              <mdb-card-img src=\"assets/images/news.png\" alt=\"Card image cap\"></mdb-card-img>\r\n              <mdb-card-body>\r\n                <mdb-card-title>\r\n                  <h4>JSF News</h4>\r\n                </mdb-card-title>\r\n                <mdb-card-text class=\"text-light\">News app which allows user to toggle through current news as well as filter specific news channels. \r\n                  Technologies used: Angular, Angular Material, HTML, CSS, AWS S3, NewsAPI.\r\n                </mdb-card-text>\r\n                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\" data-target=\"#basicExample\" (click)=\"news.show()\"\r\n                mdbWavesEffect\r\n                [@animator]=\"newsLnch\" (@animator.done)=\"newsLnchAnimate('stop')\" \r\n                (click)=\"newsLnchAnimate('pulse')\" (mouseover)=\"newsLnchAnimate('heartBeat')\">LAUNCH DEMO</button>\r\n              </mdb-card-body>\r\n            </mdb-card>\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <th>\r\n          <mdb-card  \r\n            [@animator]=\"healthCard\" (mouseover)=\"healthCardAnimate('start')\"> \r\n              <mdb-card-img src=\"assets/images/jhealth.png\" alt=\"Card image cap\"></mdb-card-img>\r\n            <mdb-card-body>\r\n              <mdb-card-title>\r\n                <h4>JS.Fofana Health</h4>\r\n              </mdb-card-title>\r\n              <mdb-card-text class=\"text-light\">Insurace record browser with features such as sign in and searching for an individuals record current status. \r\n                Technologies used: Angular, Material Design Bootstrap, HTML, CSS, Google Firebase, AWS S3.\r\n              </mdb-card-text>\r\n              <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\" data-target=\"#basicExample\" (click)=\"health.show()\"\r\n              mdbWavesEffect\r\n              [@animator]=\"healthLnch\" (@animator.done)=\"healthLnchAnimate('stop')\" \r\n                (click)=\"healthLnchAnimate('pulse')\" (mouseover)=\"healthLnchAnimate('heartBeat')\">LAUNCH DEMO</button>\r\n            </mdb-card-body>\r\n          </mdb-card>\r\n        </th>\r\n        <th>\r\n          <mdb-card  \r\n          [@animator]=\"axionCard\" (mouseover)=\"axionCardAnimate('start')\">\r\n              <mdb-card-img src=\"assets/images/a3.png\" alt=\"Card image cap\"></mdb-card-img>\r\n              <mdb-card-body>\r\n            \r\n                <!--Title-->\r\n                <mdb-card-title>\r\n                  <h4>Axion-All-Access V1.1</h4>\r\n                </mdb-card-title>\r\n            \r\n                <!--Text-->\r\n                <mdb-card-text class=\"text-light\">Superhero App designed to maintain a fictional database of \r\n                  superheroes and villains. Technologies used: Angular, Bootstrap, HTML, CSS, Java, Spring Framework, \r\n                  Spring H2, Heroku.\r\n                </mdb-card-text>\r\n            \r\n                <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\" data-target=\"#basicExample\" (click)=\"axion.show()\"\r\n                mdbWavesEffect\r\n                [@animator]=\"axionLnch\" (@animator.done)=\"axionLnchAnimate('stop')\" \r\n                (click)=\"axionLnchAnimate('pulse')\" (mouseover)=\"axionLnchAnimate('heartBeat')\">LAUNCH DEMO</button>\r\n              </mdb-card-body>\r\n            </mdb-card>\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <th>\r\n          <mdb-card  \r\n            [@animator]=\"jaggedCard\" (mouseover)=\"jaggedCardAnimate('start')\"> \r\n              <mdb-card-img src=\"assets/images/jagged.png\" alt=\"Card image cap\"></mdb-card-img>\r\n            <mdb-card-body>\r\n              <mdb-card-title>\r\n                <h4>Jagged Edge V1.1</h4>\r\n              </mdb-card-title>\r\n              <mdb-card-text class=\"text-light\">First person knife throwing game. Enless runner style with \r\n                levels, secrete items, and a leaderboard. Powered by Unity.\r\n              </mdb-card-text>\r\n              <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\" data-target=\"#basicExample\" (click)=\"jagged.show()\"\r\n              mdbWavesEffect\r\n              [@animator]=\"jaggedLnch\" (@animator.done)=\"jaggedLnchAnimate('stop')\" \r\n                (click)=\"jaggedLnchAnimate('pulse')\" (mouseover)=\"jaggedLnchAnimate('heartBeat')\">LAUNCH DEMO</button>\r\n            </mdb-card-body>\r\n          </mdb-card>\r\n        </th>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n\r\n<!-- JS.Fofana Bank V2.1 Modal -->\r\n<div mdbModal #bankv21=\"mdbModal\" class=\"modal fade\" id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <!--Body-->\r\n      <div class=\"modal-body mb-0 p-0\">\r\n        <div class=\"embed-responsive embed-responsive-16by9 z-depth-1-half\">\r\n          <iframe class=\"embed-responsive-item\" src=\"https://youtube.com/embed/6CXNfudatCQ\" allowfullscreen></iframe>\r\n        </div>\r\n      </div>\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center flex-column flex-md-row\">\r\n        <span>Share!</span>\r\n        <div>\r\n           <!--Linkedin-->\r\n           <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n           href=\"http://linkedin.com/in/sufyan-fofana-2a743584\" target=\"_blank\">\r\n           <mdb-icon fab icon=\"linkedin-in\"></mdb-icon>\r\n         </a>\r\n         <!--GitHub-->\r\n         <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n           href=\"https://github.com/sfofana/JS.Fofana-Bank-V2.1\" target=\"_blank\">\r\n           <mdb-icon fab icon=\"github\"></mdb-icon>\r\n         </a>\r\n         <!--Youtube-->\r\n         <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n           href=\"https://www.youtube.com/channel/UCQlhey4SbBsnpIRtrvaEJ6g\" target=\"_blank\">\r\n           <mdb-icon fab icon=\"youtube\"></mdb-icon>\r\n         </a>\r\n        </div>\r\n        <a type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect\r\n          [@animator]=\"try\" (@animator.done)=\"tryAnimate('stop')\" \r\n          (click)=\"tryAnimate('pulse')\" (mouseover)=\"tryAnimate('heartBeat')\"\r\n          href=\"http://jsfofana-bank-v2-1.s3-website.us-east-2.amazonaws.com\" target=\"_blank\">TRY</a>\r\n        <button type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect data-dismiss=\"modal\"\r\n          (click)=\"bankv21.hide()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- JSF News Modal -->\r\n<div mdbModal #news=\"mdbModal\" class=\"modal fade\" id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\naria-hidden=\"true\">\r\n<div class=\"modal-dialog modal-lg\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <!--Body-->\r\n    <div class=\"modal-body mb-0 p-0\">\r\n      <div class=\"embed-responsive embed-responsive-16by9 z-depth-1-half\">\r\n        <iframe class=\"embed-responsive-item\" src=\"https://youtube.com/embed/DooUONYY4K0\" allowfullscreen></iframe>\r\n      </div>\r\n    </div>\r\n    <!--Footer-->\r\n    <div class=\"modal-footer justify-content-center flex-column flex-md-row\">\r\n      <span>Share!</span>\r\n      <div>\r\n         <!--Linkedin-->\r\n         <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n         href=\"http://linkedin.com/in/sufyan-fofana-2a743584\" target=\"_blank\">\r\n         <mdb-icon fab icon=\"linkedin-in\"></mdb-icon>\r\n       </a>\r\n       <!--GitHub-->\r\n       <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n         href=\"https://github.com/sfofana/JSF-News\" target=\"_blank\">\r\n         <mdb-icon fab icon=\"github\"></mdb-icon>\r\n       </a>\r\n       <!--Youtube-->\r\n       <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n         href=\"https://www.youtube.com/watch?v=DooUONYY4K0&feature=youtu.be\" target=\"_blank\">\r\n         <mdb-icon fab icon=\"youtube\"></mdb-icon>\r\n       </a>\r\n      </div>\r\n      <a type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect\r\n        [@animator]=\"try\" (@animator.done)=\"tryAnimate('stop')\" \r\n        (click)=\"tryAnimate('pulse')\" (mouseover)=\"tryAnimate('heartBeat')\"\r\n        href=\"http://currentnewsappv1.1.s3-website.us-east-2.amazonaws.com\" target=\"_blank\">TRY</a>\r\n      <button type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect data-dismiss=\"modal\"\r\n        (click)=\"news.hide()\">Close</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<!-- AWS Rekognition Modal -->\r\n<div mdbModal #rek=\"mdbModal\" class=\"modal fade\" id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\naria-hidden=\"true\">\r\n<div class=\"modal-dialog modal-lg\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <!--Body-->\r\n    <div class=\"modal-body mb-0 p-0\">\r\n      <div class=\"embed-responsive embed-responsive-16by9 z-depth-1-half\">\r\n        <iframe class=\"embed-responsive-item\" src=\"https://youtube.com/embed/spZ6H84fEsA\" allowfullscreen></iframe>\r\n      </div>\r\n    </div>\r\n    <!--Footer-->\r\n    <div class=\"modal-footer justify-content-center flex-column flex-md-row\">\r\n      <span>Contact me to run backend: \r\n          sufyanfofana@yahoo.com</span>\r\n      <div>\r\n         <!--Linkedin-->\r\n         <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n         href=\"http://linkedin.com/in/sufyan-fofana-2a743584\" target=\"_blank\">\r\n         <mdb-icon fab icon=\"linkedin-in\"></mdb-icon>\r\n       </a>\r\n       <!--GitHub-->\r\n       <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n         href=\"https://github.com/sfofana/AwsImgRekJava\" target=\"_blank\">\r\n         <mdb-icon fab icon=\"github\"></mdb-icon>\r\n       </a>\r\n       <!--Youtube-->\r\n       <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n         href=\"https://www.youtube.com/channel/UCQlhey4SbBsnpIRtrvaEJ6g\" target=\"_blank\">\r\n         <mdb-icon fab icon=\"youtube\"></mdb-icon>\r\n       </a>\r\n      </div>\r\n      <a type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect\r\n        [@animator]=\"try\" (@animator.done)=\"tryAnimate('stop')\" \r\n        (click)=\"tryAnimate('pulse')\" (mouseover)=\"tryAnimate('heartBeat')\"\r\n        href=\"http://awsrekfrontendsfofana.s3-website.us-east-2.amazonaws.com\" target=\"_blank\">TRY</a>\r\n      <button type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect data-dismiss=\"modal\"\r\n        (click)=\"rek.hide()\">Close</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<!-- Node-Dictionary Modal -->\r\n<div mdbModal #dictionary=\"mdbModal\" class=\"modal fade\" id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\naria-hidden=\"true\">\r\n<div class=\"modal-dialog modal-lg\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <!--Body-->\r\n    <div class=\"modal-body mb-0 p-0\">\r\n      <div class=\"embed-responsive embed-responsive-16by9 z-depth-1-half\">\r\n        <iframe class=\"embed-responsive-item\" src=\"https://youtube.com/embed/EUMeu1krjNU\" allowfullscreen></iframe>\r\n      </div>\r\n    </div>\r\n    <!--Footer-->\r\n    <div class=\"modal-footer justify-content-center flex-column flex-md-row\">\r\n      <span>Share!</span>\r\n      <div>\r\n         <!--Linkedin-->\r\n         <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n         href=\"http://linkedin.com/in/sufyan-fofana-2a743584\" target=\"_blank\">\r\n         <mdb-icon fab icon=\"linkedin-in\"></mdb-icon>\r\n       </a>\r\n       <!--GitHub-->\r\n       <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n         href=\"https://github.com/sfofana/Node-Fofana-Dictionary\" target=\"_blank\">\r\n         <mdb-icon fab icon=\"github\"></mdb-icon>\r\n       </a>\r\n       <!--Youtube-->\r\n       <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n         href=\"https://www.youtube.com/watch?v=EUMeu1krjNU\" target=\"_blank\">\r\n         <mdb-icon fab icon=\"youtube\"></mdb-icon>\r\n       </a>\r\n      </div>\r\n      <button type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect\r\n        [@animator]=\"animationState\" (@animator.done)=\"resetAnimation()\" \r\n        (click)=\"startAnimation('pulse')\" (mouseover)=\"startAnimation('heartBeat')\">\r\n        <a href=\"http://node-fofanadictionary.s3-website.us-east-2.amazonaws.com\" target=\"_blank\">TRY</a>\r\n      </button>\r\n      <button type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect data-dismiss=\"modal\"\r\n        (click)=\"dictionary.hide()\">Close</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<!-- Hospital Modal -->\r\n<div mdbModal #hospital=\"mdbModal\" class=\"modal fade\" id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\naria-hidden=\"true\">\r\n<div class=\"modal-dialog modal-lg\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <!--Body-->\r\n    <div class=\"modal-body mb-0 p-0\">\r\n      <div class=\"embed-responsive embed-responsive-16by9 z-depth-1-half\">\r\n        <iframe class=\"embed-responsive-item\" src=\"https://youtube.com/embed/spZ6H84fEsA\" allowfullscreen></iframe>\r\n      </div>\r\n    </div>\r\n    <!--Footer-->\r\n    <div class=\"modal-footer justify-content-center flex-column flex-md-row\">\r\n      <span>Contact me to run an instance of the backend: \r\n          sufyanfofana@yahoo.com</span>\r\n      <div>\r\n         <!--Linkedin-->\r\n         <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n         href=\"http://linkedin.com/in/sufyan-fofana-2a743584\" target=\"_blank\">\r\n         <mdb-icon fab icon=\"linkedin-in\"></mdb-icon>\r\n       </a>\r\n       <!--GitHub-->\r\n       <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n         href=\"https://github.com/sfofana/JS.Fofana-Bank-V2.2\" target=\"_blank\">\r\n         <mdb-icon fab icon=\"github\"></mdb-icon>\r\n       </a>\r\n       <!--Youtube-->\r\n       <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n         href=\"https://www.youtube.com/channel/UCQlhey4SbBsnpIRtrvaEJ6g\" target=\"_blank\">\r\n         <mdb-icon fab icon=\"youtube\"></mdb-icon>\r\n       </a>\r\n      </div>\r\n      <button type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect>TRY</button>\r\n      <button type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect data-dismiss=\"modal\"\r\n        (click)=\"hospital.hide()\">Close</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<!-- Axion-All-Access V1.1 Modal -->\r\n<div mdbModal #axion=\"mdbModal\" class=\"modal fade\" id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\naria-hidden=\"true\">\r\n<div class=\"modal-dialog modal-lg\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <!--Body-->\r\n    <div class=\"modal-body mb-0 p-0\">\r\n      <div class=\"embed-responsive embed-responsive-16by9 z-depth-1-half\">\r\n        <iframe class=\"embed-responsive-item\" src=\"https://youtube.com/embed/twTD0J4xmFo\" allowfullscreen></iframe>\r\n      </div>\r\n    </div>\r\n    <!--Footer-->\r\n    <div class=\"modal-footer justify-content-center flex-column flex-md-row\">\r\n      <span>Share!</span>\r\n      <div>\r\n         <!--Linkedin-->\r\n         <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n         href=\"http://linkedin.com/in/sufyan-fofana-2a743584\" target=\"_blank\">\r\n         <mdb-icon fab icon=\"linkedin-in\"></mdb-icon>\r\n       </a>\r\n       <!--GitHub-->\r\n       <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n         href=\"https://github.com/sfofana/JS.Fofana-Bank-V2.2\" target=\"_blank\">\r\n         <mdb-icon fab icon=\"github\"></mdb-icon>\r\n       </a>\r\n       <!--Youtube-->\r\n       <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n         href=\"https://www.youtube.com/channel/UCQlhey4SbBsnpIRtrvaEJ6g\" target=\"_blank\">\r\n         <mdb-icon fab icon=\"youtube\"></mdb-icon>\r\n       </a>\r\n      </div>\r\n      <a type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect\r\n        [@animator]=\"try\" (@animator.done)=\"tryAnimate('stop')\" \r\n        (click)=\"tryAnimate('pulse')\" (mouseover)=\"tryAnimate('heartBeat')\"\r\n        href=\"https://axion-all-access-v1.herokuapp.com/\" target=\"_blank\">TRY</a>\r\n      <button type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect data-dismiss=\"modal\"\r\n        (click)=\"axion.hide()\">Close</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<!-- Jagged Edge V1.1 -->\r\n<div mdbModal #jagged=\"mdbModal\" class=\"modal fade\" id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <!--Body-->\r\n      <div class=\"modal-body mb-0 p-0\">\r\n        <div class=\"embed-responsive embed-responsive-16by9 z-depth-1-half\">\r\n          <iframe class=\"embed-responsive-item\" src=\"https://youtube.com/embed/x78v4qRCRbE\" allowfullscreen></iframe>\r\n        </div>\r\n      </div>\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center flex-column flex-md-row\">\r\n        <span>Share!</span>\r\n        <div>\r\n           <!--Linkedin-->\r\n           <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n           href=\"http://linkedin.com/in/sufyan-fofana-2a743584\" target=\"_blank\">\r\n           <mdb-icon fab icon=\"linkedin-in\"></mdb-icon>\r\n         </a>\r\n         <!--GitHub-->\r\n         <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n           href=\"https://github.com/sfofana/Jagged-Edge-V1.1\" target=\"_blank\">\r\n           <mdb-icon fab icon=\"github\"></mdb-icon>\r\n         </a>\r\n         <!--Youtube-->\r\n         <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n           href=\"https://www.youtube.com/channel/UCQlhey4SbBsnpIRtrvaEJ6g\" target=\"_blank\">\r\n           <mdb-icon fab icon=\"youtube\"></mdb-icon>\r\n         </a>\r\n        </div>\r\n        <button type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect data-dismiss=\"modal\"\r\n          (click)=\"jagged.hide()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- JS.Fofana Health -->\r\n<div mdbModal #health=\"mdbModal\" class=\"modal fade\" id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <!--Body-->\r\n      <div class=\"modal-body mb-0 p-0\">\r\n        <div class=\"embed-responsive embed-responsive-16by9 z-depth-1-half\">\r\n          <iframe class=\"embed-responsive-item\" src=\"https://youtube.com/embed/xICgc1elnJo\" allowfullscreen></iframe>\r\n        </div>\r\n      </div>\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center flex-column flex-md-row\">\r\n        <span>Share!</span>\r\n        <div>\r\n           <!--Linkedin-->\r\n           <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n           href=\"http://linkedin.com/in/sufyan-fofana-2a743584\" target=\"_blank\">\r\n           <mdb-icon fab icon=\"linkedin-in\"></mdb-icon>\r\n         </a>\r\n         <!--GitHub-->\r\n         <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n           href=\"https://github.com/sfofana/JS.Fofana-Health\" target=\"_blank\">\r\n           <mdb-icon fab icon=\"github\"></mdb-icon>\r\n         </a>\r\n         <!--Youtube-->\r\n         <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n           href=\"https://www.youtube.com/watch?v=spZ6H84fEsA&feature=youtu.be\" target=\"_blank\">\r\n           <mdb-icon fab icon=\"youtube\"></mdb-icon>\r\n         </a>\r\n        </div>\r\n        <a type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect\r\n          [@animator]=\"try\" (@animator.done)=\"tryAnimate('stop')\" \r\n          (click)=\"tryAnimate('pulse')\" (mouseover)=\"tryAnimate('heartBeat')\"\r\n          href=\"http://jsfofana-health.s3-website.us-east-2.amazonaws.com\" target=\"_blank\">TRY</a>\r\n        <button type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect data-dismiss=\"modal\"\r\n          (click)=\"health.hide()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Poly-Personl Advisor -->\r\n<div mdbModal #poly=\"mdbModal\" class=\"modal fade\" id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <!--Body-->\r\n      <div class=\"modal-body mb-0 p-0\">\r\n        <div class=\"embed-responsive embed-responsive-16by9 z-depth-1-half\">\r\n          <iframe class=\"embed-responsive-item\" src=\"https://youtube.com/embed/spZ6H84fEsA\" allowfullscreen></iframe>\r\n        </div>\r\n      </div>\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center flex-column flex-md-row\">\r\n        <span>Share!</span>\r\n        <div>\r\n           <!--Linkedin-->\r\n           <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n           href=\"http://linkedin.com/in/sufyan-fofana-2a743584\" target=\"_blank\">\r\n           <mdb-icon fab icon=\"linkedin-in\"></mdb-icon>\r\n         </a>\r\n         <!--GitHub-->\r\n         <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n           href=\"https://github.com/sfofana/JS.Fofana-Health\" target=\"_blank\">\r\n           <mdb-icon fab icon=\"github\"></mdb-icon>\r\n         </a>\r\n         <!--Youtube-->\r\n         <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect\r\n           href=\"https://www.youtube.com/watch?v=spZ6H84fEsA&feature=youtu.be\" target=\"_blank\">\r\n           <mdb-icon fab icon=\"youtube\"></mdb-icon>\r\n         </a>\r\n        </div>\r\n        <button type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect\r\n          [@animator]=\"animationState\" (@animator.done)=\"resetAnimation()\" \r\n          (click)=\"startAnimation('pulse')\" (mouseover)=\"startAnimation('heartBeat')\">\r\n          <a href=\"http://poly-personal-advisor.s3-website.us-east-2.amazonaws.com\" target=\"_blank\">TRY</a>\r\n        </button>\r\n        <button type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect data-dismiss=\"modal\"\r\n          (click)=\"poly.hide()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/skill/skill.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/skill/skill.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <table class=\"table-responsive\">\r\n    <tbody>\r\n      <tr>\r\n        <th>\r\n          <mdb-card [@animator]=\"webCard\" (mouseover)=\"webCardAnimate('start')\">\r\n            <mdb-card-body>\r\n              <mdb-card-title>\r\n                <h4>Web Technologies</h4>\r\n              </mdb-card-title>\r\n              <canvas mdbChart\r\n              [chartType]=\"chartType\"\r\n              [datasets]=\"webData\"\r\n              [labels]=\"webLabel\"\r\n              [colors]=\"chartColors\"\r\n              [options]=\"chartOptions\"\r\n              [legend]=\"true\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\">\r\n            </canvas>\r\n            </mdb-card-body>\r\n          </mdb-card>\r\n        </th>\r\n        <th>\r\n          <mdb-card [@animator]=\"coreCard\" (mouseover)=\"coreCardAnimate('start')\">\r\n            <mdb-card-body>\r\n              <mdb-card-title>\r\n                <h4>Core Framework</h4>\r\n              </mdb-card-title>\r\n              <canvas mdbChart\r\n              [chartType]=\"chartType\"\r\n              [datasets]=\"coreData\"\r\n              [labels]=\"coreLabel\"\r\n              [colors]=\"chartColors\"\r\n              [options]=\"chartOptions\"\r\n              [legend]=\"true\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\">\r\n            </canvas>\r\n            </mdb-card-body>\r\n          </mdb-card>\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <th>\r\n          <mdb-card [@animator]=\"serverCard\" (mouseover)=\"serverCardAnimate('start')\">\r\n            <mdb-card-body>\r\n              <mdb-card-title>\r\n                <h4>Server-Side</h4>\r\n              </mdb-card-title>\r\n              <canvas mdbChart\r\n              [chartType]=\"chartType\"\r\n              [datasets]=\"serverData\"\r\n              [labels]=\"serverLabel\"\r\n              [colors]=\"chartColors\"\r\n              [options]=\"chartOptions\"\r\n              [legend]=\"true\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\">\r\n            </canvas>\r\n            </mdb-card-body>\r\n          </mdb-card>\r\n        </th>\r\n        <th>\r\n          <mdb-card [@animator]=\"testCard\" (mouseover)=\"testCardAnimate('start')\">\r\n            <mdb-card-body>\r\n              <mdb-card-title>\r\n                <h4>Testing Tools</h4>\r\n              </mdb-card-title>\r\n              <canvas mdbChart \r\n              [chartType]=\"chartType\"\r\n              [datasets]=\"testData\"\r\n              [labels]=\"testLabel\"\r\n              [colors]=\"chartColors\"\r\n              [options]=\"chartOptions\"\r\n              [legend]=\"true\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\">\r\n            </canvas>\r\n            </mdb-card-body>\r\n          </mdb-card>\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <th>\r\n          <mdb-card [@animator]=\"devCard\" (mouseover)=\"devCardAnimate('start')\">\r\n            <mdb-card-body>\r\n              <mdb-card-title>\r\n                <h4>DevOps</h4>\r\n              </mdb-card-title>\r\n              <canvas mdbChart\r\n              [chartType]=\"chartType\"\r\n              [datasets]=\"devData\"\r\n              [labels]=\"devLabel\"\r\n              [colors]=\"chartColors\"\r\n              [options]=\"chartOptions\"\r\n              [legend]=\"true\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\">\r\n            </canvas>\r\n            </mdb-card-body>\r\n          </mdb-card>\r\n        </th>\r\n        <th>\r\n          <mdb-card [@animator]=\"servicesCard\" (mouseover)=\"servicesCardAnimate('start')\">\r\n            <mdb-card-body>\r\n              <mdb-card-title>\r\n                <h4>Web & Micro services</h4>\r\n              </mdb-card-title>\r\n              <canvas mdbChart\r\n              [chartType]=\"chartType\"\r\n              [datasets]=\"servicesData\"\r\n              [labels]=\"servicesLabel\"\r\n              [colors]=\"chartColors\"\r\n              [options]=\"chartOptions\"\r\n              [legend]=\"true\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\">\r\n            </canvas>\r\n            </mdb-card-body>\r\n          </mdb-card>\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <th>\r\n          <mdb-card [@animator]=\"langCard\" (mouseover)=\"langCardAnimate('start')\">\r\n            <mdb-card-body>\r\n              <mdb-card-title>\r\n                <h4>Languages</h4>\r\n              </mdb-card-title>\r\n              <canvas mdbChart\r\n              [chartType]=\"chartType\"\r\n              [datasets]=\"langData\"\r\n              [labels]=\"langLabel\"\r\n              [colors]=\"chartColors\"\r\n              [options]=\"chartOptions\"\r\n              [legend]=\"true\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\">\r\n            </canvas>\r\n            </mdb-card-body>\r\n          </mdb-card>\r\n        </th>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/work/work.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/work/work.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container panel my-5 py-5 z-depth-1\">\r\n  <section class=\"px-md-5 mx-md-5 text-center text-lg-left text-light\">   \r\n    <div class=\"row\"> \r\n      <div class=\"col-md-6 mb-4 mb-md-0\" [@animator]=\"leadRight\"> \r\n          <div class=\"view overlay z-depth-1-half\">\r\n              <img src=\"assets/images/freddie.png\" class=\"img-fluid\">\r\n              <a href=\"https://revature.com\" target=\"_blank\">\r\n                <div class=\"mask rgba-white-light\"></div>\r\n              </a>\r\n            </div>         \r\n      </div>\r\n      <div class=\"col-md-6 mb-4 mb-md-0\" [@animator]=\"followRight\">         \r\n        <h3 class=\"font-weight-bold\">Mar. 2020 - Current</h3>\r\n          <!-- <h5 class=\"font-weight-bold\">Software Developer</h3> -->   \r\n        <p class=\"text-light\">Designed UI using Angular 8, Angular Material API, CSS, HTML, and TypeScript. \r\n          Implemented Front Controller Design which received HTTP requests using Angular's HTTP Client. \r\n          Performed CRUD operations with JPA Repository and JDBC to persist data to AWS RDS. CI/CD using \r\n          Jenkins Pipeline through Git Hub. Utilized AWS S3 and EC2 to host a static web pages and Spring \r\n          Boot Projects. Utilized Asana for team management of Scrum scheduling.</p>  \r\n      </div>  \r\n    </div>\r\n  </section>  \r\n</div>\r\n\r\n<div class=\"container panel my-5 py-5 z-depth-1\">\r\n    <section class=\"px-md-5 mx-md-5 text-center text-lg-left text-light\">   \r\n      <div class=\"row\"> \r\n        <div class=\"col-md-6 mb-4 mb-md-0\" [@animator]=\"leadRight\"> \r\n            <div class=\"view overlay z-depth-1-half\">\r\n                <img src=\"assets/images/revlogo.png\" class=\"img-fluid\">\r\n                <a href=\"https://revature.com\" target=\"_blank\">\r\n                  <div class=\"mask rgba-white-light\"></div>\r\n                </a>\r\n              </div>         \r\n        </div>\r\n        <div class=\"col-md-6 mb-4 mb-md-0\" [@animator]=\"followRight\">         \r\n          <h3 class=\"font-weight-bold\">Dec. 2019 - Current</h3>\r\n            <!-- <h5 class=\"font-weight-bold\">Software Developer</h3> -->   \r\n          <p class=\"text-light\">Designed UI using Angular 8, Angular Material API, CSS, HTML, and TypeScript. \r\n            Implemented Front Controller Design which received HTTP requests using Angular's HTTP Client. \r\n            Performed CRUD operations with JPA Repository and JDBC to persist data to AWS RDS. CI/CD using \r\n            Jenkins Pipeline through Git Hub. Utilized AWS S3 and EC2 to host a static web pages and Spring \r\n            Boot Projects. Utilized Asana for team management of Scrum scheduling.</p>  \r\n        </div>  \r\n      </div>\r\n    </section>  \r\n  </div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations/animation.ts":
/*!*****************************************!*\
  !*** ./src/app/animations/animation.ts ***!
  \*****************************************/
/*! exports provided: pulse, fadeInLeft, fadeInRight, flipInY, heartBeat, moveUp, slideInDown, slideInUp, zoomIn, bounce, shake, tada, rotateIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pulse", function() { return pulse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInLeft", function() { return fadeInLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRight", function() { return fadeInRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipInY", function() { return flipInY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heartBeat", function() { return heartBeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveUp", function() { return moveUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInDown", function() { return slideInDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInUp", function() { return slideInUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomIn", function() { return zoomIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounce", function() { return bounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shake", function() { return shake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tada", function() { return tada; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateIn", function() { return rotateIn; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var pulse = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.15, 1.15, 1.15)', offset: 0.5 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', offset: 1 })
];
var fadeInLeft = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(-25%, 0, 0)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var fadeInRight = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(25%, 0, 0)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var flipInY = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', offset: 0.6 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', offset: 0.8 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px)', offset: 1 })
];
var heartBeat = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1.3)', offset: 0.14 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', offset: 0.28 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1.3)', offset: 0.42 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', offset: .70 })
];
var moveUp = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -75%, 0)', offset: 1 })
];
var slideInDown = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -15%, 0)', visibility: 'visible', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var slideInUp = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 15%, 0)', visibility: 'visible', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var zoomIn = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale3d(0, 0, 0)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: 1 })
];
var bounce = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', offset: .2 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -15px, 0) scaleY(1.1)', offset: .4 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -15px, 0) scaleY(1.1)', offset: .43 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', offset: .53 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -7px, 0) scaleY(1.05)', offset: .7 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0) scaleY(0.95)', offset: .8 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -4px, 0) scaleY(1.02)', offset: .9 }),
];
var shake = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-10px, 0, 0)', offset: .1 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(10px, 0, 0)', offset: .2 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-10px, 0, 0)', offset: .3 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(10px, 0, 0)', offset: .4 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-10px, 0, 0)', offset: .5 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(10px, 0, 0)', offset: .6 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-10px, 0, 0)', offset: .7 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(10px, 0, 0)', offset: .8 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-10px, 0, 0)', offset: .9 })
];
var tada = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', offset: .1 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', offset: .2 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: .3 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: .4 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: .5 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: .6 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: .7 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: .8 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: .9 })
];
var rotateIn = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .5, transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/skill/skill.component */ "./src/app/components/skill/skill.component.ts");
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/work/work.component */ "./src/app/components/work/work.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_free_free_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/free/free.component */ "./src/app/components/free/free.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'skills', component: _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_3__["SkillComponent"] },
    { path: 'projects', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] },
    { path: 'work', component: _components_work_work_component__WEBPACK_IMPORTED_MODULE_4__["WorkComponent"] },
    { path: 'freelance', component: _components_free_free_component__WEBPACK_IMPORTED_MODULE_6__["FreeComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\n  background: linear-gradient(to bottom, #45526e, #3b465e); }\n\n.display {\n  max-width: 90%; }\n\n.space {\n  margin: 3% 0% 3%; }\n\n.paragraph {\n  margin-top: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxzdWZ5YVxcRG9jdW1lbnRzXFxSZXBvc2l0b3J5XFxQb3J0Zm9saW9cXFBvcnRmb2xpb1xcUG9ydGZvbGlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx3REFBd0QsRUFBQTs7QUFFNUQ7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLm5hdntcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNkMGQ2ZTIsICM5MjlmYmEpICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLnBhbmVse1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQ1NTI2ZSwgIzNiNDY1ZSk7XHJcbn1cclxuLmRpc3BsYXl7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxufVxyXG4uc3BhY2V7XHJcbiAgICBtYXJnaW46IDMlIDAlIDMlO1xyXG5cclxufVxyXG4ucGFyYWdyYXBoe1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var _services_animation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/animation.service */ "./src/app/services/animation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(animation) {
        this.animation = animation;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.leadRight = 'leadRight';
        this.leadLeft = 'leadLeft';
        this.followRight = 'followRight';
        this.followLeft = 'followLeft';
        this.zoomIn = 'zoomIn';
    };
    AppComponent.prototype.homeAnimate = function (state) {
        this.home = this.animation.dashAnimate(state);
    };
    AppComponent.prototype.workAnimate = function (state) {
        this.work = this.animation.dashAnimate(state);
    };
    AppComponent.prototype.freeAnimate = function (state) {
        this.free = this.animation.dashAnimate(state);
    };
    AppComponent.prototype.projectAnimate = function (state) {
        this.project = this.animation.dashAnimate(state);
    };
    AppComponent.prototype.skillAnimate = function (state) {
        this.skill = this.animation.dashAnimate(state);
    };
    AppComponent.prototype.contactAnimate = function (state) {
        this.contact = this.animation.dashAnimate(state);
    };
    AppComponent.prototype.linkedinAnimate = function (state) {
        this.linkedin = this.animation.linkAnimate(state);
    };
    AppComponent.prototype.gitAnimate = function (state) {
        this.git = this.animation.linkAnimate(state);
    };
    AppComponent.prototype.youtubeAnimate = function (state) {
        this.youtube = this.animation.linkAnimate(state);
    };
    AppComponent.prototype.emailAnimate = function (state) {
        this.email = this.animation.linkAnimate(state);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => leadRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInRight"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => leadLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInLeft"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => followRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInRight"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => followLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInLeft"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => zoomIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["zoomIn"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => pulse', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["pulse"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["moveUp"])))
                ])
            ],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/work/work.component */ "./src/app/components/work/work.component.ts");
/* harmony import */ var _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/skill/skill.component */ "./src/app/components/skill/skill.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_free_free_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/free/free.component */ "./src/app/components/free/free.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _services_animation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/animation.service */ "./src/app/services/animation.service.ts");
/* harmony import */ var _services_chart_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/chart.service */ "./src/app/services/chart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_work_work_component__WEBPACK_IMPORTED_MODULE_7__["WorkComponent"],
                _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_8__["SkillComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                _components_free_free_component__WEBPACK_IMPORTED_MODULE_10__["FreeComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["NavbarModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CardsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ModalModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["PopoverModule"],
            ],
            providers: [
                _services_email_service__WEBPACK_IMPORTED_MODULE_13__["EmailService"],
                _services_chart_service__WEBPACK_IMPORTED_MODULE_18__["ChartService"],
                _services_validation_service__WEBPACK_IMPORTED_MODULE_16__["ValidationService"],
                _services_subject_service__WEBPACK_IMPORTED_MODULE_15__["SubjectService"],
                _services_animation_service__WEBPACK_IMPORTED_MODULE_17__["AnimationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background: linear-gradient(to bottom, #7283a7, #45526e); }\n\n.btn {\n  background: linear-gradient(to bottom, #4285F4, #0d47a1); }\n\n.success {\n  color: green; }\n\n.invalid {\n  color: red; }\n\n.spacer {\n  margin: 2% 0% 2% 0%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxVc2Vyc1xcc3VmeWFcXERvY3VtZW50c1xcUmVwb3NpdG9yeVxcUG9ydGZvbGlvXFxQb3J0Zm9saW9cXFBvcnRmb2xpby9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdEQUF3RCxFQUFBOztBQUc1RDtFQUNJLHdEQUF3RCxFQUFBOztBQUc1RDtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3MjgzYTcsICM0NTUyNmUpO1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQyODVGNCwgIzBkNDdhMSk7XHJcbn1cclxuXHJcbi5zdWNjZXNze1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5pbnZhbGlke1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4uc3BhY2Vye1xyXG4gICAgbWFyZ2luOiAyJSAwJSAyJSAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/email */ "./src/app/models/email.ts");
/* harmony import */ var src_app_services_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var _services_animation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/animation.service */ "./src/app/services/animation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ContactComponent = /** @class */ (function () {
    function ContactComponent(mailer, memory, validate, animation) {
        this.mailer = mailer;
        this.memory = memory;
        this.validate = validate;
        this.animation = animation;
        this.mail = new src_app_models_email__WEBPACK_IMPORTED_MODULE_1__["Email"]();
        this.validMail = new src_app_models_email__WEBPACK_IMPORTED_MODULE_1__["Email"]();
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.slideUp = 'slideUp';
        this.isSpinning = false;
        this.formData = new FormData();
        this.override = new Blob();
    };
    ContactComponent.prototype.setMail = function () {
        this.mail.name = this.name;
        this.mail.email = this.email;
        this.mail.phone = this.phone;
        this.mail.subject = this.subject;
        this.mail.message = this.message;
        this.validMail = this.validate.validRequest(this.mail);
    };
    ContactComponent.prototype.setBlob = function (mail) {
        this.override = new Blob([
            JSON.stringify(mail)
        ], {
            type: 'application/json'
        });
        this.formData.append('override', this.override);
    };
    ContactComponent.prototype.submit = function () {
        var _this = this;
        this.setMail();
        this.reset();
        if (this.validMail) {
            this.isSpinning = true;
            this.setBlob(this.validMail);
            this.mailer.sendEmail(this.formData)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.memory.unsubscribe))
                .subscribe(function () {
                _this.success = "Message Sent";
                _this.isSpinning = false;
            });
        }
        this.override = new Blob();
        this.formData = new FormData();
    };
    ContactComponent.prototype.reset = function () {
        this.name = "";
        this.email = "";
        this.phone = "";
        this.subject = "";
        this.message = "";
        this.success = "";
        this.invalid = "";
    };
    ContactComponent.prototype.btnAnimate = function (state) {
        this.button = this.animation.btnAnimate(state);
    };
    ContactComponent.prototype.ngOnDestroy = function () {
        this.memory.unsubscribe.next();
        this.memory.unsubscribe.complete();
    };
    ContactComponent.ctorParameters = function () { return [
        { type: src_app_services_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"] },
        { type: src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"] },
        { type: src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"] },
        { type: _services_animation_service__WEBPACK_IMPORTED_MODULE_8__["AnimationService"] }
    ]; };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('animator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => slideUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_7__["slideInUp"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => pulse', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_7__["pulse"])))
                ])
            ],
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"],
            src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"],
            src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"],
            _services_animation_service__WEBPACK_IMPORTED_MODULE_8__["AnimationService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/free/free.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/free/free.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  height: 200px;\n  width: 400; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mcmVlL0M6XFxVc2Vyc1xcc3VmeWFcXERvY3VtZW50c1xcUmVwb3NpdG9yeVxcUG9ydGZvbGlvXFxQb3J0Zm9saW9cXFBvcnRmb2xpby9zcmNcXGFwcFxcY29tcG9uZW50c1xcZnJlZVxcZnJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZyZWUvZnJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3e1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiA0MDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/free/free.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/free/free.component.ts ***!
  \***************************************************/
/*! exports provided: FreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeComponent", function() { return FreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FreeComponent = /** @class */ (function () {
    function FreeComponent() {
    }
    FreeComponent.prototype.ngOnInit = function () {
        this.leadRight = 'leadRight';
        this.followRight = 'followRight';
    };
    FreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-free',
            template: __webpack_require__(/*! raw-loader!./free.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/free/free.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => leadRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInRight"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => followRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInRight"])))
                ])
            ],
            styles: [__webpack_require__(/*! ./free.component.scss */ "./src/app/components/free/free.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FreeComponent);
    return FreeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdb-carousel-item {\n  width: 60%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcc3VmeWFcXERvY3VtZW50c1xcUmVwb3NpdG9yeVxcUG9ydGZvbGlvXFxQb3J0Zm9saW9cXFBvcnRmb2xpby9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kYi1jYXJvdXNlbC1pdGVte1xyXG4gICAgd2lkdGg6IDYwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.slideDown = 'slideDown';
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["slideInDown"])))
                ])
            ],
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-left: 10%;\n  margin-right: 10%;\n  text-align: center; }\n\nmdb-card {\n  margin: 10%;\n  background: linear-gradient(to bottom, #7283a7, #45526e);\n  color: #d0d6e2;\n  min-width: 400px; }\n\nmdb-card-text {\n  color: #d0d6e2; }\n\n.tr, th {\n  padding: 3%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9DOlxcVXNlcnNcXHN1ZnlhXFxEb2N1bWVudHNcXFJlcG9zaXRvcnlcXFBvcnRmb2xpb1xcUG9ydGZvbGlvXFxQb3J0Zm9saW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2plY3RzXFxwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLHdEQUF3RDtFQUN4RCxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tZGItY2FyZHtcclxuICAgIG1hcmdpbjogMTAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzcyODNhNywgIzQ1NTI2ZSk7XHJcbiAgICBjb2xvcjogI2QwZDZlMjtcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbm1kYi1jYXJkLXRleHR7XHJcbiAgICBjb2xvcjogI2QwZDZlMjtcclxufVxyXG5cclxuLnRyLCB0aHtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var _services_animation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/animation.service */ "./src/app/services/animation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(animation) {
        this.animation = animation;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.bankCard = "left";
        this.newsCard = "left";
        this.healthCard = "left";
        this.freddieCard = "left";
        this.axionCard = "left";
        this.jaggedCard = "left";
        this.rekCard = "left";
    };
    ProjectsComponent.prototype.tryAnimate = function (state) {
        this.try = this.animation.actionBtnAnimate(state);
    };
    ProjectsComponent.prototype.bankCardAnimate = function (state) {
        this.bankCard = this.animation.cardAnimate(state);
    };
    ProjectsComponent.prototype.newsCardAnimate = function (state) {
        this.newsCard = this.animation.cardAnimate(state);
    };
    ProjectsComponent.prototype.healthCardAnimate = function (state) {
        this.healthCard = this.animation.cardAnimate(state);
    };
    ProjectsComponent.prototype.freddieCardAnimate = function (state) {
        this.freddieCard = this.animation.cardAnimate(state);
    };
    ProjectsComponent.prototype.axionCardAnimate = function (state) {
        this.axionCard = this.animation.cardAnimate(state);
    };
    ProjectsComponent.prototype.jaggedCardAnimate = function (state) {
        this.jaggedCard = this.animation.cardAnimate(state);
    };
    ProjectsComponent.prototype.rekCardAnimate = function (state) {
        this.rekCard = this.animation.cardAnimate(state);
    };
    ProjectsComponent.prototype.bankLnchAnimate = function (state) {
        this.bankLnch = this.animation.actionBtnAnimate(state);
    };
    ProjectsComponent.prototype.newsLnchAnimate = function (state) {
        this.newsLnch = this.animation.actionBtnAnimate(state);
    };
    ProjectsComponent.prototype.healthLnchAnimate = function (state) {
        this.healthLnch = this.animation.actionBtnAnimate(state);
    };
    ProjectsComponent.prototype.freddieLnchAnimate = function (state) {
        this.freddieLnch = this.animation.actionBtnAnimate(state);
    };
    ProjectsComponent.prototype.axionLnchAnimate = function (state) {
        this.axionLnch = this.animation.actionBtnAnimate(state);
    };
    ProjectsComponent.prototype.jaggedLnchAnimate = function (state) {
        this.jaggedLnch = this.animation.actionBtnAnimate(state);
    };
    ProjectsComponent.prototype.rekLnchAnimate = function (state) {
        this.rekLnch = this.animation.actionBtnAnimate(state);
    };
    ProjectsComponent.ctorParameters = function () { return [
        { type: _services_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"] }
    ]; };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/projects/projects.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => flipInY', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["flipInY"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => heartBeat', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1750, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["heartBeat"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => pulse', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["pulse"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInLeft"])))
                ])
            ],
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/components/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/skill/skill.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/skill/skill.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-left: 10%;\n  margin-right: 10%;\n  text-align: center; }\n\nmdb-card {\n  margin: 10%;\n  background: linear-gradient(to bottom, #7283a7, #45526e);\n  color: #d0d6e2;\n  min-width: 400px; }\n\nmdb-card-text {\n  color: #d0d6e2; }\n\n.tr, th {\n  padding: 3%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbC9DOlxcVXNlcnNcXHN1ZnlhXFxEb2N1bWVudHNcXFJlcG9zaXRvcnlcXFBvcnRmb2xpb1xcUG9ydGZvbGlvXFxQb3J0Zm9saW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNraWxsXFxza2lsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLHdEQUF3RDtFQUN4RCxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGwvc2tpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tZGItY2FyZHtcclxuICAgIG1hcmdpbjogMTAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzcyODNhNywgIzQ1NTI2ZSk7XHJcbiAgICBjb2xvcjogI2QwZDZlMjtcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbm1kYi1jYXJkLXRleHR7XHJcbiAgICBjb2xvcjogI2QwZDZlMjtcclxufVxyXG5cclxuLnRyLCB0aHtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/skill/skill.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/skill/skill.component.ts ***!
  \*****************************************************/
/*! exports provided: SkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillComponent", function() { return SkillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var _services_animation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/animation.service */ "./src/app/services/animation.service.ts");
/* harmony import */ var _services_chart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/chart.service */ "./src/app/services/chart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SkillComponent = /** @class */ (function () {
    function SkillComponent(animation, data) {
        this.animation = animation;
        this.data = data;
        this.chartOptions = {
            responsive: true,
            defaultFontColor: '#d0d6e2'
        };
    }
    SkillComponent.prototype.ngOnInit = function () {
        this.animateFlip = 'flipInY';
        this.chartType = this.data.chartType;
        this.webData = this.data.webData;
        this.coreData = this.data.coreData;
        this.serverData = this.data.serverData;
        this.testData = this.data.testData;
        this.langData = this.data.langData;
        this.devData = this.data.devData;
        this.servicesData = this.data.servicesData;
        this.webLabel = this.data.webLabel;
        this.coreLabel = this.data.coreLabel;
        this.serverLabel = this.data.serverLabel;
        this.testLabel = this.data.testLabel;
        this.langLabel = this.data.langLabel;
        this.devLabel = this.data.devLabel;
        this.servicesLabel = this.data.servicesLabel;
        this.chartColors = this.data.chartColors;
        this.webCard = "inLeft";
        this.coreCard = "inLeft";
        this.serverCard = "inLeft";
        this.testCard = "inLeft";
        this.langCard = "inLeft";
        this.devCard = "inLeft";
        this.servicesCard = "inLeft";
    };
    SkillComponent.prototype.chartClicked = function (e) { };
    SkillComponent.prototype.chartHovered = function (e) { };
    SkillComponent.prototype.webCardAnimate = function (state) {
        this.webCard = this.animation.cardAnimate(state);
    };
    SkillComponent.prototype.coreCardAnimate = function (state) {
        this.coreCard = this.animation.cardAnimate(state);
    };
    SkillComponent.prototype.serverCardAnimate = function (state) {
        this.serverCard = this.animation.cardAnimate(state);
    };
    SkillComponent.prototype.testCardAnimate = function (state) {
        this.testCard = this.animation.cardAnimate(state);
    };
    SkillComponent.prototype.langCardAnimate = function (state) {
        this.langCard = this.animation.cardAnimate(state);
    };
    SkillComponent.prototype.devCardAnimate = function (state) {
        this.devCard = this.animation.cardAnimate(state);
    };
    SkillComponent.prototype.servicesCardAnimate = function (state) {
        this.servicesCard = this.animation.cardAnimate(state);
    };
    SkillComponent.ctorParameters = function () { return [
        { type: _services_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"] },
        { type: _services_chart_service__WEBPACK_IMPORTED_MODULE_4__["ChartService"] }
    ]; };
    SkillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skill',
            template: __webpack_require__(/*! raw-loader!./skill.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/skill/skill.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => flipInY', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["flipInY"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => inLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInLeft"])))
                ])
            ],
            styles: [__webpack_require__(/*! ./skill.component.scss */ "./src/app/components/skill/skill.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"], _services_chart_service__WEBPACK_IMPORTED_MODULE_4__["ChartService"]])
    ], SkillComponent);
    return SkillComponent;
}());



/***/ }),

/***/ "./src/app/components/work/work.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/work/work.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  height: 250px;\n  width: 250px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3JrL0M6XFxVc2Vyc1xcc3VmeWFcXERvY3VtZW50c1xcUmVwb3NpdG9yeVxcUG9ydGZvbGlvXFxQb3J0Zm9saW9cXFBvcnRmb2xpby9zcmNcXGFwcFxcY29tcG9uZW50c1xcd29ya1xcd29yay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dvcmsvd29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3e1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/work/work.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/work/work.component.ts ***!
  \***************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
        this.leadRight = 'leadRight';
        this.followRight = 'followRight';
    };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/work/work.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => leadRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInRight"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => followRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInRight"])))
                ])
            ],
            styles: [__webpack_require__(/*! ./work.component.scss */ "./src/app/components/work/work.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/models/email.ts":
/*!*********************************!*\
  !*** ./src/app/models/email.ts ***!
  \*********************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
var Email = /** @class */ (function () {
    function Email() {
    }
    return Email;
}());



/***/ }),

/***/ "./src/app/services/animation.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/animation.service.ts ***!
  \***********************************************/
/*! exports provided: AnimationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationService", function() { return AnimationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimationService = /** @class */ (function () {
    function AnimationService() {
    }
    AnimationService.prototype.dashAnimate = function (state) {
        if (state == "start") {
            return "pulse";
        }
        if (state == "stop") {
            return "";
        }
    };
    AnimationService.prototype.btnAnimate = function (state) {
        if (state == "start") {
            return "pulse";
        }
        if (state == "stop") {
            return "";
        }
    };
    AnimationService.prototype.linkAnimate = function (state) {
        if (state == "start") {
            return "up";
        }
        if (state == "stop") {
            return "";
        }
    };
    AnimationService.prototype.actionBtnAnimate = function (state) {
        if (state == "heartBeat") {
            return "heartBeat";
        }
        if (state == "pulse") {
            return "pulse";
        }
        if (state == "stop") {
            return "";
        }
    };
    AnimationService.prototype.cardAnimate = function (state) {
        if (state == "start") {
            return "flipInY";
        }
        if (state == "stop") {
            return "";
        }
    };
    AnimationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AnimationService);
    return AnimationService;
}());



/***/ }),

/***/ "./src/app/services/chart.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/chart.service.ts ***!
  \*******************************************/
/*! exports provided: ChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return ChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartService = /** @class */ (function () {
    function ChartService() {
        this.chartType = 'doughnut';
        //skillmatrix data sets
        this.webData = [
            { data: [120, 120, 120, 120, 120], label: 'Web Technologies' }
        ];
        this.coreData = [
            { data: [180, 180, 180, 120, 90], label: 'Core Framework' }
        ];
        this.serverData = [
            { data: [120, 120, 120, 120, 120], label: 'Server-Side' }
        ];
        this.testData = [
            { data: [120, 120, 90, 90, 120], label: 'Testing Tools' }
        ];
        this.langData = [
            { data: [540, 120, 120, 120, 120], label: 'Languages' }
        ];
        this.devData = [
            { data: [90, 90, 90, 180, 90], label: 'DevOps' }
        ];
        this.servicesData = [
            { data: [90, 90, 90, 90, 90], label: 'Web & Micro Services' }
        ];
        //labels
        this.webLabel = ['Angular', 'HTML', 'CSS', 'JavaScript', 'AJAX'];
        this.coreLabel = ['Spring MVC', 'Spring ORM', 'Spring Cloud', 'Servlet', 'Hibernate'];
        this.serverLabel = ['Apache Tomcat', 'NodeJS', 'JDBC', 'Oracle SQL', 'JSON'];
        this.testLabel = ['JUnit', 'Postman', 'Jasmine', 'Karma', 'Mockito'];
        this.langLabel = ['Java', 'HTML', 'JavaScript', 'TypeScript', 'XML'];
        this.devLabel = ['Jenkins', 'AWS EC2', 'AWS S3', 'Maven', 'Docker'];
        this.servicesLabel = ['Netflix Eureka', 'Netflix Hystrix', 'Netflix Zuul', 'REST', 'SOAP'];
        this.chartColors = [
            {
                backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
                borderWidth: 2,
                fontColor: '#d0d6e2'
            }
        ];
    }
    ChartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ChartService);
    return ChartService;
}());



/***/ }),

/***/ "./src/app/services/email.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/email.service.ts ***!
  \*******************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].emailUrl;
    }
    EmailService.prototype.sendEmail = function (message) {
        return this.http.post(this.url, message);
    };
    EmailService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    EmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/services/subject.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/subject.service.ts ***!
  \*********************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubjectService = /** @class */ (function () {
    function SubjectService() {
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    SubjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SubjectService);
    return SubjectService;
}());



/***/ }),

/***/ "./src/app/services/validation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/validation.service.ts ***!
  \************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/email */ "./src/app/models/email.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.validRequest = function (message) {
        var validMessage = new _models_email__WEBPACK_IMPORTED_MODULE_1__["Email"]();
        validMessage = null;
        if (!(message.name || message.email || message.phone || message.subject || message.message)) {
            validMessage = null;
        }
        if (message.name && message.email && message.subject && message.message) {
            validMessage = message;
        }
        return validMessage;
    };
    ValidationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    emailUrl: 'https://node-jsfofana-bank-v2.herokuapp.com/api/v1/email/send'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sufya\Documents\Repository\Portfolio\Portfolio\Portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map