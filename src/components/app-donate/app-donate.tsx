import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    '../../assets/thozhan.json';
  
@Component({
    tag                         :   'app-donate',
})
export class AppDonate {

    @Prop() ngo                 :   any                 =   ngo;

    constructor () {
        console.log('Home :: Constructor');
    }

    async componentWillLoad() {
        console.log('Home :: Component will load');
    }

    async componentDidLoad() {
        console.log('Home :: Component did load');
    }
    render() {

      console.log('Home :: Render');

      return [


      
       <ion-content overflow-scroll="true">
                {/* <!-- Start Preloader Area --> */}
        <div class="preloader">
            <div class="preloader">
                <span></span>
                <span></span>
            </div>
        </div>
        {/* <!-- End Preloader Area --> */}

        {/* <!-- Start Header Area --> */}
          <div class="header-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        {/* <div class="header-content">
                            <p>
                                <a href="#">The fund will go to the poor... <span>Donate Now</span></a>
                            </p>
                        </div> */}
                    </div>

                    <div class="col-lg-6">
                        <div class="top-header-social">
                            <span>Follow us:</span>
                            <a href={this.ngo.reachOut.facebook} target="_blank">
                                <i class='flaticon-facebook'></i>
                            </a>

                            <a href={this.ngo.reachOut.twitter} target="_blank">
                                <i class='flaticon-twitter'></i>
                            </a>

                            <a href={this.ngo.reachOut.instagram} target="_blank">
                                <i class='flaticon-instagram'></i>
                            </a>

                            <a href={this.ngo.reachOut.linkedin} target="_blank">
                                <i class='flaticon-linkedin'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        {/* <!-- End Header Area --> */}

        {/* <!-- Start Navbar Area --> */}
         <div class="navbar-area fixed-top">
            <div class="huruma-responsive-nav">
                <div class="container">
                    <div class="huruma-responsive-menu">
                        <div class="logo">
                            <a href="index.html">
                                <img src="assets/img/logo.png" class="white-logo" alt="logo"/>
                                <img src="assets/img/logo-2.png" class="black-logo" alt="image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="huruma-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="index.html">
                            <img src={this.ngo.logo.url} class="white-logo logo-image" alt="logo"/>
                            <img src="assets/img/logo-2.png" class="black-logo" alt="image"/>
                        </a>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="../../" class="nav-link">
                                        <span>o1</span>
                                        Home 
                                        {/* <i class='bx bx-chevron-down'></i> */}
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="about.html" class="nav-link">
                                        <span>o2</span>
                                        About Us
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="press-coverage.html" class="nav-link">
                                                Press Coverage
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="legal.html" class="nav-link">
                                                Legal
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="projects.html" class="nav-link">
                                        <span>o3</span>
                                        Projects
                                        {/* <i class='bx bx-chevron-down'></i> */}
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="donate.html" class="nav-link active">
                                        <span>o4</span>
                                        Donate 
                                        {/* <i class='bx bx-chevron-down'></i> */}
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="volunteer.html" class="nav-link">
                                        <span>o5</span>
                                        Volunteer 
                                        {/* <i class='bx bx-chevron-down'></i> */}
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="contact.html" class="nav-link">
                                        <span>o6</span>
                                        Contact Us
                                    </a>
                                </li>
                            </ul>

                            <div class="others-options">
                                <div class="dropdown language-switcher d-inline-block">
                                    <button class="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="assets/img/flag/france-flag.jpg" class="shadow" alt="image"/>
                                        <span>Eng <i class='bx bx-chevron-down'></i></span>
                                    </button>

                                    <div class="dropdown-menu">
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/germany-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Ger</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/italy-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Fre</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/spain-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Spa</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/russia-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Rus</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/us-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Ita</span>
                                        </a>
                                    </div>
                                </div>

                                <div class="option-item"><i class="search-btn bx bx-search"></i>
                                    <i class="close-btn bx bx-x"></i>
                                    <div class="search-overlay search-popup">
                                        <div class='search-box'>
                                            <form class="search-form">
                                                <input class="search-input" name="search" placeholder="Search" type="text"/>

                                                <button class="search-button" type="submit">
                                                    <i class="bx bx-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="burger-menu">
                                    <i class="flaticon-menu"></i>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div> 
        {/* <!-- End Navbar Area --> */}

        {/* <!-- Sidebar Modal --> */}
         <div class="sidebar-modal">
            <div class="sidebar-modal-inner">
                <div class="sidebar-about-area">
                    <div class="title">
                        <h2>About Us</h2>
                        <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                    </div>
                </div>

                <div class="sidebar-instagram-feed">
                    <h2>Instagram</h2>
                    <ul>
                        <li>
                            <a href="#">
                              <img src="assets/img/sidebar/1.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/2.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/3.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/4.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/5.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/6.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/7.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/8.jpg" alt="image"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="sidebar-contact-area">
                    <div class="contact-info">
                        <div class="contact-info-content">
                            <h2>
                                <a href="tel:+0881306298615">
                                    +088 130 629 8615
                                </a>
                                <span>OR</span>
                                <a href="mailto:huruma@gmail.com">
                                    huruma@gmail.com
                                </a>
                            </h2>

                            <ul class="social">
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="flaticon-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="flaticon-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="flaticon-pinterest"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <span class="close-btn sidebar-modal-close-btn">
                    <i class="flaticon-close"></i>
                </span>
            </div>
        </div> 
        {/* <!-- End Sidebar Modal --> */}
                {/* <!-- End Sidebar Modal -->
                
                <!-- Start Page Title Area --> */}
                <div class="page-title-area">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="container">
                                {/* <div class="page-title-content">
                                    <h2>Contact</h2>
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li>Contact</li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Page Title Area -->

                <!-- Start Contact Area --> */}
                <section class="contact-section ptb-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                            <img src="/assets/img/donate-001x600.jpg" style={{ 'width': '100%' }} />
                                    <br/>
                                    <br/>
                                    <br/>

                                        
                            </div>

                            <div class="col-lg-8">
                                <div class="contact-area">
                                    <div class="contact-content">
                                        <div class="col-lg-12">
                                            <div class="send-btn">
                                                <button type="submit" class="default-btn">
                                                    Login With Gmail
                                                    <i class="flaticon-right"></i>
                                                    <span></span>
                                                </button>
                                            </div>
                                            <div id="msgSubmit" class="h3 text-center hidden"></div>
                                            <div class="clearfix"></div>
                                        </div>
                                        
                                    </div>
                                    <div class="contact-form">
                                        <form id="contactForm">
                                            <div class="row">
                                            
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <input type="text" name="name" id="name" class="form-control" required data-error="Please enter your name" placeholder="Mobile"/>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-md-6">
                                                   
                                                        <button type="submit" class="default-btn">
                                                            Send OTP
                                                            <i class="flaticon-right"></i>
                                                            <span></span>
                                                        </button>
                                                    
                                                </div>
                
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <input type="email" name="email" id="email" class="form-control" required data-error="Please enter your email" placeholder="OTP"/>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                
                                                <div class="col-lg-6 col-md-6">
                                                    
                                                        <button type="submit" class="default-btn">
                                                            Verify OTP
                                                            <i class="flaticon-right"></i>
                                                            <span></span>
                                                        </button>
                                                    
                                                    
                                                </div>
                                                
                                            </div>
                                        </form>
                                    </div>
                                    <br/>
                                    <div class="contact-content">
                                        <h3>Donation Details</h3>
                                        
                                    </div>

                                    <div class="contact-form">
                                        <form id="contactForm">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <input type="text" name="name" id="name" class="form-control" required data-error="Please enter your name" placeholder="Fundraiser"/>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" class="form-control" placeholder="Amount"/>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <input type="email" name="email" id="email" class="form-control" required data-error="Please enter your email" placeholder="Referred By"/>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <input type="text" name="msg_website" id="msg_website" class="form-control" required data-error="Please enter your website" placeholder="Make Anonymous"/>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                
                                                <div class="col-lg-12 col-md-12">
                                                    <div class="form-group">
                                                        <textarea name="message" class="form-control" id="message" required data-error="Write your message" placeholder="What am I donating?"></textarea>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>

                                               
                                            </div>
                                        </form>
                                    </div>
                                    <div class="contact-content">
                                        <div class="col-lg-12">
                                            <div class="send-btn">
                                                <button type="submit" class="default-btn">
                                                    Donate
                                                    <i class="flaticon-right"></i>
                                                    <span></span>
                                                </button>
                                            </div>
                                            <div id="msgSubmit" class="h3 text-center hidden"></div>
                                            <div class="clearfix"></div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Contact Area -->

                <!-- Start Map Area --> */}
                {/* <!-- End Map Area -->

                <!-- Start Footer Area --> */}
               <footer class="footer-section pt-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="single-footer-widget">
                            <h3>Contact info</h3>

                            <div class="footer-info-contact">
                                <i class="flaticon-pin"></i>
                                <h3>Location</h3>
                                <span>{this.ngo.address}</span>
                            </div>

                            
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="single-footer-widget">
                        <div class="footer-info-contact">
                            <i class="flaticon-call"></i>
                            <h3>Call Us</h3>
                            <span><a href="tel:+882-569-756">{this.ngo.reachOut.phone1}</a></span>
                            <br/>
                            <span><a href="tel:+882-569-756">{this.ngo.reachOut.phone2}</a></span>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="single-footer-widget">
                        <div class="footer-info-contact">
                            <i class="flaticon-email"></i>
                            <h3>Email Us</h3>
                            <span>
                                <a href="mailto:hello@huruma.com">
                                    {this.ngo.reachOut.email}
                                </a>
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="copyright-area">
                <div class="container">
                    <div class="copyright-area-content">
                        <div class="row align-items-center">
                            <div class="col-lg-4">
                                <div class="copyright-logo">
                                    <img src={this.ngo.logo.url} class="logo-image" alt="image"/>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <p>
                                    <i class="far fa-copyright"></i> 
                                    2020 Huruma. All Rights Reserved by
                                    <a href="https://envytheme.com/" target="_blank">
                                        EnvyTheme
                                    </a>
                                </p>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <ul>
                                    <li>
                                        <a href="terms-condition.html">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy.html">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
                {/* <!-- End Footer Area -->

                <!-- Start Go Top Section --> */}
                <div class="go-top">
                    <i class="bx bx-chevron-up"></i>
                    <i class="bx bx-chevron-up"></i>
                </div>
                {/* <!-- End Go Top Section --> */}
       </ion-content> 
      ];
    }
}
