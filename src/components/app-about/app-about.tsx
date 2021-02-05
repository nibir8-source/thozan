import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    '../../assets/thozhan.json';
  
 @Component({
    tag                         :   'app-about',
})
export class AppAbout {

    @Prop() ngo                 :   any                 =   ngo;

    // private coverSlideOptions   :   any                 =   {
    //     autoplay: {
    //         delay: 4000
    //     }
    // };

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
           {/* <!-- Start Header Area --> */}
            <div class="preloader">
                <div class="preloader">
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* <!-- End Header Area -->

            <!-- Start Navbar Area --> */}
            <div class="navbar-area  navbar-style-three">
                <div class="huruma-responsive-nav">
                    <div class="container">
                        <div class="huruma-responsive-menu">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="../img/logo-3.png" class="white-logo" alt="logo"/>
                                    <img src="../img/logo-2.png" class="black-logo" alt="image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="huruma-nav">
                    <div class="container">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <a class="navbar-brand" href="index.html">
                                <img src="../img/logo-3.png" class="white-logo" alt="logo"/>
                                <img src="../img/logo-2.png" class="black-logo" alt="image"/>
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
                                    <a href="/assets/pages/about.html" class="nav-link active">
                                        <span>o2</span>
                                        About Us
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                Press Coverage
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                Legal
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <span>o3</span>
                                        Projects
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        {this.ngo.projects.map((project) => (
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    {project.name}
                                                </a>
                                            </li>
                                        ))};
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <span>o4</span>
                                        Donate 
                                        {/* <i class='bx bx-chevron-down'></i> */}
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
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
                                            <img src="../img/flag/france-flag.jpg" class="shadow" alt="image"/>
                                            <span>Eng <i class='bx bx-chevron-down'></i></span>
                                        </button>

                                        <div class="dropdown-menu">
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="../img/flag/germany-flag.jpg" class="shadow-sm" alt="flag"/>
                                                <span>Ger</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="../img/flag/italy-flag.jpg" class="shadow-sm" alt="flag"/>
                                                <span>Fre</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="../img/flag/spain-flag.jpg" class="shadow-sm" alt="flag"/>
                                                <span>Spa</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="../img/flag/russia-flag.jpg" class="shadow-sm" alt="flag"/>
                                                <span>Rus</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="../img/flag/us-flag.jpg" class="shadow-sm" alt="flag"/>
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
            {/* <!-- End Navbar Area -->

            <!-- Sidebar Modal --> */}
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
                                    <img src="../img/sidebar/1.jpg" alt="image"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../img/sidebar/2.jpg" alt="image"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../img/sidebar/3.jpg" alt="image"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../img/sidebar/4.jpg" alt="image"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../img/sidebar/5.jpg" alt="image"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../img/sidebar/6.jpg" alt="image"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../img/sidebar/7.jpg" alt="image"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../img/sidebar/8.jpg" alt="image"/>
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
            {/* <!-- End Sidebar Modal -->
            
            <!-- Start Page Title Area --> */}
            <div class="page-title-area">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="page-title-content">
                                <h2>About</h2>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>About</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Page Title Area -->

            <!-- Start About Area --> */}
            <section class="about-section about-page pt-100 pb-100">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="about-item">
                                <span>
                                    <i class="flaticon-care-about-plants"></i>
                                    About us
                                </span>
                                <h3>{this.ngo.name}</h3>
                                <p> {this.ngo.description}</p>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="about-image">
                                <img src={this.ngo.photos[0]} class="shadow about-page-img" alt="image"/>
                                <img src={this.ngo.photos[1]} class="shadow" alt="image"/>
                            </div>

                            <div class="about-video">
                                <a href={this.ngo.video.url} class="video-btn popup-youtube">
                                    <i class="bx bx-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End About Area -->

            <!-- Start Mission Area --> */}
            {/* <!-- End Mission Area -->  

            <!-- Start Team Area --> */}
            <section class="team-section pt-100 pb-70">
                <div class="container">
                    <div class="team-title-area">
                        <div class="row align-items-center">
                            <div class="col-lg-7">
                                <div class="section-title text-left">
                                    <span>
                                        <i class="flaticon-support"></i>
                                        Meet Our Team
                                    </span>
                                    <h2>Talented Team behind {this.ngo.name}</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        {this.ngo.team.map((member) => (
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="team-item">
                                <div class="image">
                                    <img src={member.photo.url} class="member-image" alt="image"/>
        
                                    <ul class="social">
                                        <li>
                                            <a href={member.reachOut.facebook} target="_blank">
                                                <i class="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={member.reachOut.twitter} target="_blank">
                                                <i class="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={member.reachOut.linkedin} target="_blank">
                                                <i class="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={member.reachOut.instagram} target="_blank">
                                                <i class="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
        
                                <div class="content">
                                    <h3>{member.name}</h3>
                                    <span>{member.role}</span>
                                </div>
                            </div>
                        </div>
                        
                        ))};
                        
                    </div>
                </div>
            </section>
            {/* <!-- End Team Area -->

            <!-- Start Instagram Area --> */}
            <div class="instagram-area">
                <div class="instagram-slides owl-carousel owl-theme">
                    <div class="instagram-box">
                        <img src={this.ngo.photos[0]} class="instagram-image" alt="image"/>

                        <div class="icon">
                            <i class="flaticon-instagram"></i>
                        </div>

                        <a href="https://www.instagram.com/" target="_blank"></a>
                    </div>

                    <div class="instagram-box">
                        <img src={this.ngo.photos[1]} class="instagram-image" alt="image"/>

                        <div class="icon">
                            <i class="flaticon-instagram"></i>
                        </div>

                        <a href="https://www.instagram.com/" target="_blank"></a>
                    </div>

                    <div class="instagram-box">
                        <img src={this.ngo.photos[2]} class="instagram-image" alt="image"/>

                        <div class="icon">
                            <i class="flaticon-instagram"></i>
                        </div>

                        <a href="https://www.instagram.com/" target="_blank"></a>
                    </div>

                    <div class="instagram-box">
                        <img src="../img/instagram/4.jpg" alt="image"/>

                        <div class="icon">
                            <i class="flaticon-instagram"></i>
                        </div>

                        <a href="https://www.instagram.com/" target="_blank"></a>
                    </div>

                    <div class="instagram-box">
                        <img src="../img/instagram/5.jpg" alt="image"/>

                        <div class="icon">
                            <i class="flaticon-instagram"></i>
                        </div>

                        <a href="https://www.instagram.com/" target="_blank"></a>
                    </div>
                </div>
            </div>
            {/* <!-- End Instagram Area -->
            
            <!-- Start Footer Area --> */}
            <footer class="footer-section pt-100">
                <div class="copyright-area">
                    <div class="container">
                        <div class="copyright-area-content">
                            <div class="row align-items-center">
                                <div class="col-lg-4">
                                    <div class="copyright-logo">
                                        <img src="../img/white-logo.png" alt="image"/>
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
            {/* <!-- End Go Top Section -->*/}
       </ion-content> 
      ];
    }
}
