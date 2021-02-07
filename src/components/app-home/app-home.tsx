import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    '../../assets/thozhan.json';
  
@Component({
    tag                         :   'app-home',
})
export class AppHome {

    @Prop() ngo                 :   any                 =   ngo;

    private coverSlideOptions   :   any                 =   {
        autoplay: {
            delay: 4000
        }
    };

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
                                    <a href="/" class="nav-link active">
                                        <span>o1</span>
                                        Home 
                                        {/* <i class='bx bx-chevron-down'></i> */}
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="/assets/pages/about.html" class="nav-link">
                                        <span>o2</span>
                                        About Us
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="/assets/pages/press-coverage.html" class="nav-link">
                                                Press Coverage
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="/assets/pages/legal.html" class="nav-link">
                                                Legal
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="/assets/pages/projects.html" class="nav-link">
                                        <span>o3</span>
                                        Projects
                                        {/* <i class='bx bx-chevron-down'></i> */}
                                    </a>
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

        {/* <!-- Start Home Banner Three Area --> */}
        <ion-slides style={{ 'height': '100%' }} id='coverSlides' options={this.coverSlideOptions} >
                        { this.ngo.photos.map(p => (
                            <ion-slide>
                                <img src={p} style={{ 'width': '100%', 'object-fit': 'cover' }} />
                            </ion-slide>
                        )) }

        </ion-slides>
        {/* <!-- End Home Banner Three Area --> */}

        {/* <!-- Start Top Feature Area --> */}
        <section class="causes-section pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-ribbon"></i>
                        Our Causes
                    </span>
                    <h2>The causes we care about</h2>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    {this.ngo.sdg.map((goal) => (
                    <div class="col-lg-4 col-md-6 col-sm-6 p-0">
                        <div class="feature-card">
                            <div class="goal-image">
                                <img src={goal.photo.url} alt="image"/>
                            </div>
                            
                            <h3>{goal.name}</h3>
                            <p>{goal.description}</p>

                            <a href={goal.link} class="feature-btn">
                                See More +
                            </a>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* <!-- End Top Feature Area --> */}
        
        <section class="solve-section pt-100 pb-70">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-4 col-md-offset-1">
                        <div class="row justify-content-center">
                            <div class="col-md-12 text-center heading-section animate-box">
                                <h3> Why Volunteer here? </h3>
                            </div>
                        </div>
                        <br/>
                        { this.ngo.whyVolunteerHere.map(w => (
                            <div class="feature-text">
                                <p>
                                    <ion-icon name={ w.icon } style={{'margin-right': '8px'}}></ion-icon>
                                    { w.text }
                                </p>
                            </div>
                        )) }
                    </div>

                    <div class="col-md-4 col-md-offset-2">
                        <div class="row justify-content-center">
                            <div class="col-md-12 text-center heading-section animate-box">
                                <h3> Why your help matters? </h3>
                            </div>
                        </div>
                        <br/>
                        { this.ngo.whyHelpMatters.map(w => (
                            <div class="feature-text">
                                <p>
                                    <ion-icon name={ w.icon } style={{'margin-right': '8px'}}></ion-icon>
                                    { w.text }
                                </p>
                            </div>
                        )) }
                    </div>

                </div>
            </div>
        </section>

        {/*<!-- Start Donor Area --> */}
        {/* <!-- End Donor Area -->

        <!-- Start Solve Area --> */}
        {/* <!-- End Solve Area -->

        <!-- Start Mission Area --> */}
        <section class="mission-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 p-0">
                        <div>
                            <img src={this.ngo.photos[0]} alt="image"/>
                        </div>
                    </div>

                    <div class="col-lg-6">
                            <div class="mission-tab">
                                <span>
                                    <i class="flaticon-target"></i>
                                    Our Mission
                                </span>
                                <h2>Concern about Our Mission</h2>
                                <div class="tab mission-list-tab">
                                    <ul class="tabs">
                                        <li>
                                            <a href="#">
                                                Our Mission
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Our Vision
                                            </a>
                                        </li>
                                    </ul>
                                    
                                    <div class="tab_content">
                                        <div class="tabs_item">
                                            <p>{this.ngo.mission}</p>  
                                        </div>

                                        <div class="tabs_item">
                                            <p>{this.ngo.vision}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Mission Area -->

        

        <!-- Start Events Area --> */}
        {/* <!-- End Events Area -->

        <!-- Start Testimonials Area --> */}
        <section class="testimonials-section pt-140 pb-100">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-testimonial"></i>
                        Testimonials
                    </span>
                    <h2>See Review</h2>
                </div>
                <div class="testimonials-slider owl-carousel owl-theme">
                {this.ngo.review.map((volunteer) => (
                    <div class="testimonials-item">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="testimonials-info">
                                    <img src={volunteer.volunteer.photo.url} alt="image"/>
                                    <h3>{volunteer.name}</h3>
                                    <ul class="social-info">
                                    {(function (rows, i, len) {
                                        while (++i <= len) {
                                        rows.push(<li><i class='bx bxs-star'></i></li>)
                                        }
                                        return rows;
                                    })([], 0, volunteer.rating)}
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <h3>Event Name : {volunteer.event.name}</h3>
                                <p>{volunteer.feedback}</p>
                            </div>
                        </div>
                    </div>
                    ))}                
                </div>
            </div>

            <div class="testimonials-shape">
                <img src="assets/img/testimonials/shape.png" alt="image"/>
            </div>
        </section>
        {/* <!-- End Testimonials Area -->

        <!-- Start Donate Area --> */}
        {/* <!-- End Donate Area -->

        <!-- Start Blog Area --> */}
        
        {/* <!-- End Blog Area -->

        <!-- Start Footer Area --> */}
        <footer class="footer-section pt-100">
            <div class="copyright-area">
                <div class="container">
                    <div class="copyright-area-content">
                        <div class="row align-items-center">
                            <div class="col-lg-4">
                                <div class="copyright-logo">
                                    <img src="assets/img/white-logo.png" alt="image"/>
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
