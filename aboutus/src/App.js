import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#signup">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <h1 className="font-weight-bold text-white mx-auto my-0 text-uppercase">Your Story is Unique</h1>
                    <h2 className="font-weight-regular text-white mx-auto mt-2 mb-5">
                    you deserve the best care by the right professional to help you overcome 
                    your pain and injuries. Wherever you are, whenever you need, we have 
                    the right person who can guide you.
                    </h2>
                </div>
            </div>
        </header>
        
        <section className="about-section text-center" id="about">
            <div className="container"> 
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <p className="font-weight-light text-white-100">
                        At Heka our mission is to make care inclusive, convenient and accessible
                        by leveraging the power of modern technology. We believe that by finding 
                        the professional who is the right match for you, the care you’ll receive 
                        will be much more effective.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="mastheadtwo">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <h1 className="text-white mx-auto my-0 text-uppercase">The Origin</h1>
                    <h3 className="font-italic text-white mx-auto mt-2 mb-5">
                    “Heka was the deification of magic and medicine in ancient Egypt”
                    </h3>
                    <h2 className="text-white mx-auto mt-2 mb-5">
                    In ancient egypt, pharaoh would send their best caregivers to treat their loved ones. 
                    Home care was the best personalized experience. At Heka, we believe you deserve the royale treatment. Using technology, we bring you 
                    effective care to your home or anywhere via digital care.
                    </h2>
                </div>
            </div>
        </section>
       

        <section className="projects-section bg-light" id="projects">
            <div className="container">
                <div className="text-center">
                    <h1 className="font-weight-bold">Meet the Team</h1>
                </div>
                <div className="row people">
                    <div className="col-md-6 col-lg-6 item">
                        <div className="box"><img className="rounded-circle" data-bs-hover-animate="pulse" src="https://i.imgur.com/nAcoHRf.jpg"/>
                            <h3 className="name">Boris Simga</h3>
                            <p className="title">Designer</p>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            <div className="social"><a href="#"><i className="fa fa-facebook-official"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 item">
                        <div className="box"><img className="rounded-circle" data-bs-hover-animate="pulse" src="https://i.imgur.com/xELPaag.jpg"/>
                            <h3 className="name">Andy row</h3>
                            <p className="title">Graphics designer</p>
                            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ismal</p>
                            <div className="social"><a href="#"><i className="fa fa-facebook-official"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        <section className="contact-section bg-black">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Address</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">4923 Market Street, Orlando FL</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">+1 (555) 902-8832</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social d-flex justify-content-center">
                    <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;
