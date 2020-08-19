import React from 'react';
import logo from './logo.png';
import './App.css';
import zhen from './zhen.png';
import peter from './peter.png';
import linkedin from './linkedin.png';

function App() {
  return (
    <div className={styles.App}>
        <nav className={`${styles.navbar} ${styles[navbar-expand-lg ]} ${styles[navbar-light]} ${styles[fixed-top]}`}  
        id={styles.mainNav}>
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top"><img className="logo" data-bs-hover-animate="pulse" src={logo}/></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">Book Now</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">How does it work</a></li>
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
       

        <section className="projects-section bg-black" id="projects">
            <div className="container">
                <div class="team-boxed">
                    <div class="container">
                        <div className="text-center">
                            <h1 className="font-weight-bold text-white">Meet the Team</h1>
                        </div>
                        <div className="row people">
                            <div className="col-md-6 col-lg-6 item">
                                <div className="box"><img className="rounded-circle" data-bs-hover-animate="pulse" src={zhen}/>
                                    <h3 className="name">Zhen Chen</h3>
                                    <p className="title">CEO Co-Founder</p>
                                    <p className="description">Background is in physiotherapy from McGill University. 
                                    Self-taught graphic designer who was admitted to McGill School of Architecture. 
                                    Learned to code for research to apply AI. Python, JS/CSS/HTML</p>
                                    <div className="social"><a href="https://www.linkedin.com/in/zhen-chen-6428b2160/"><img className="linkedin" data-bs-hover-animate="pulse" src={linkedin}/></a></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 item">
                                <div className="box"><img className="rounded-circle" data-bs-hover-animate="pulse" src={peter}/>
                                    <h3 className="name">Peter Chen</h3>
                                    <p className="title">CTO Co-Founder</p>
                                    <p className="description">Background is in computer science from McGill University. 
                                    Interned at Plotly. Full stack developer and part-time photographer who grew a photography 
                                    blog to 20k+ followers on Twitter</p>
                                    <div className="social"><a href="https://www.linkedin.com/in/peterzhidingchen/"><img className="linkedin" data-bs-hover-animate="pulse" src={linkedin}/></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;
