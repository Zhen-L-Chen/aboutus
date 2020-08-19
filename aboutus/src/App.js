import React from 'react';
import logo from './logo.png';
import './App.css';
import zhen from './zhen.png';
import peter from './peter.png';
import linkedin from './linkedin.png';

function App() {
  return (
    <div className={styles.App}>
        <nav className={`${styles.navbar} ${styles['navbar-expand-lg']} ${styles['navbar-light']} ${styles['fixed-top']}`}
        id={styles.mainNav}>
            <div className={styles.container}>
                <a className={`${styles['navbar-brand']} ${styles['js-scroll-trigger']}`} href="#page-top"><img className={styles.logo} data-bs-hover-animate="pulse" src={logo}/></a>
                <button className={`${styles['navbar-toggler']} ${styles['navbar-toggler-right']}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className={`${styles.fas} ${styles['fa-bars']}`}></i>
                </button>
                <div className={`${styles.collapse} ${styles['navbar-collapse']}`} id={styles.navbarResponsive}>
                    <ul className={`${styles['navbar-nav']} ${styles['ml-auto']}`}>
                        <li className={styles['nav-item']}><a className={`${styles['nav-link']} ${styles['js-scroll-trigger']}`} href="#about">Book Now</a></li>
                        <li className={styles['nav-item']}><a className={`${styles['nav-link']} ${styles['js-scroll-trigger']}`} href="#projects">How does it work</a></li>
                        <li className={styles['nav-item']}><a className={`${styles['nav-link']} ${styles['js-scroll-trigger']}`} href="#signup">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <header className={styles.masthead}>
            <div className={`${styles.container} ${styles['d-flex']} ${styles['h-100']} ${styles['align-items-center']}`}>
                <div className={`${styles['mx-auto']} ${styles['text-center']}`}>
                    <h1 className={`${styles['font-weight-bold']} ${styles['text-white']} ${styles['mx-auto']} ${styles['my-0']} ${styles['text-uppercase']}`}>Your Story is Unique</h1>
                    <h2 className={`${styles['font-weight-regular']} ${styles['text-white']} ${styles['mx-auto']} ${styles['mt-2']} ${styles['mb-5']}`}>
                    you deserve the best care by the right professional to help you overcome 
                    your pain and injuries. Wherever you are, whenever you need, we have 
                    the right person who can guide you.
                    </h2>
                </div>
            </div>
        </header>
        
        <section className={`${styles['about-section']} ${styles['text-center']}`} id={styles.about}>
            <div className={styles.container}> 
                <div className={styles.row}>
                    <div className={`${styles['col-lg-8']} ${styles['mx-auto']}`}>
                        <p className={`${styles['font-weight-light']} ${styles['text-white-100']}`}>
                        At Heka our mission is to make care inclusive, convenient and accessible
                        by leveraging the power of modern technology. We believe that by finding 
                        the professional who is the right match for you, the care you’ll receive 
                        will be much more effective.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className={styles.mastheadtwo}>
            <div className={`${styles.container} ${styles['d-flex']} ${styles['h-100']} ${styles['align-items-center']}`}>
                <div className={`${styles['mx-auto']} ${styles['text-center']}`}>
                    <h1 className={`${styles['text-white']} ${styles['mx-auto']} ${styles['my-0']} ${styles['text-uppercase']}`}>The Origin</h1>
                    <h3 className={`${styles['font-italic']} ${styles['text-white']} ${styles['mx-auto']} ${styles[mt-2]} ${styles[mb-5]}`}>
                    “Heka was the deification of magic and medicine in ancient Egypt”
                    </h3>
                    <h2 className={`${styles['text-white']} ${styles['mx-auto']} ${styles['mt-2']} ${styles['mb-5']}`}>
                    In ancient egypt, pharaoh would send their best caregivers to treat their loved ones. 
                    Home care was the best personalized experience. At Heka, we believe you deserve the royale treatment. Using technology, we bring you 
                    effective care to your home or anywhere via digital care.
                    </h2>
                </div>
            </div>
        </section>
       

        <section className={`${styles['projects-section']} ${styles['bg-black']}`} id={styles.projects}>
            <div className={styles.container}>
                <div class={styles['team-boxed']}>
                    <div class={styles.container}>
                        <div className={styles['text-center']}>
                            <h1 className={`${styles['font-weight-bold']} ${styles['text-white']}`}>Meet the Team</h1>
                        </div>
                        <div className={`${styles.row} ${styles.people}`}>
                            <div className={`${styles['col-md-6']} ${styles['col-lg-6']} ${styles.item}`}>
                                <div className={styles.box}><img className={styles[
                                    'rounded-circle']} data-bs-hover-animate="pulse" src={zhen}/>
                                    <h3 className={styles.name}>Zhen Chen</h3>
                                    <p className={styles.title}>CEO Co-Founder</p>
                                    <p className={styles.description}>Background is in physiotherapy from McGill University. 
                                    Self-taught graphic designer who was admitted to McGill School of Architecture. 
                                    Learned to code for research to apply AI. Python, JS/CSS/HTML</p>
                                    <div className={styles.social}><a href="https://www.linkedin.com/in/zhen-chen-6428b2160/"><img className={styles.linkedin} data-bs-hover-animate="pulse" src={linkedin}/></a></div>
                                </div>
                            </div>
                            <div className={`${styles['col-md-6']} ${styles['col-lg-6']} ${styles['item']}`}>
                                <div className={styles.box}><img className={styles['rounded-circle']} data-bs-hover-animate="pulse" src={peter}/>
                                    <h3 className={styles.name}>Peter Chen</h3>
                                    <p className={styles.title}>CTO Co-Founder</p>
                                    <p className={styles.description}>Background is in computer science from McGill University. 
                                    Interned at Plotly. Full stack developer and part-time photographer who grew a photography 
                                    blog to 20k+ followers on Twitter</p>
                                    <div className={styles.social}><a href="https://www.linkedin.com/in/peterzhidingchen/"><img className={styles.linkedin} data-bs-hover-animate="pulse" src={linkedin}/></a></div>
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
