import React, { useEffect } from 'react';
//= Data
import data from '@/data/app-data.json';

function Footer({ lightMode, subBg }) {
  useEffect(() => {
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 })
      const uncover = gsap.timeline({ paused: true })
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }
  }, []);

  return (
    <footer className={subBg ? 'sub-bg pt-80' : ''}>
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="row">
            <div className="col-lg-3">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Endereço</h6>
                </div>
                <div className="text">
                  <p>Brasil, R. Pedro Cunha, 364 - Capoeiras, Florianópolis - SC, 88070-500</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Diga um Oi</h6>
                </div>
                <div className="text">
                  <p className="mb-10">
                    <a href="mailto:kaioarakawa@gmail.com">kaioarakawa@gmail.com</a>
                  </p>
                  <h5>
                    <a href="tel:+5514998534448">+55 14 9 9853 4448</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6>Social</h6>
              </div>
              <ul className="rest social-text">
                {/* <li>
                  <a href="#0">Facebook</a>
                </li> */}
                {/* <li>
                  <a href="#0">Twitter</a>
                </li> */}
                <li>
                  <a href="https://www.linkedin.com/company/arakawas">LinkedIn</a>
                </li>
                {/* <li>
                  <a href="#0">Instagram</a>
                </li> */}
              </ul>
            </div>
            {/* <div className="col-lg-3">
              <div className="tit mb-20">
                <h6>Newsletter</h6>
              </div>
              <div className="subscribe">
                <form action="contact.php">
                  <div className="form-group rest">
                    <input type="email" placeholder="Type Your Email" />
                    <button type="submit">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
        <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="logo">
                  <a href="#0">
                    <img src={`/dark/assets/imgs/logo.png`} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="copyright d-flex">
                  <div className="ml-auto">
                    <p className="fz-13">© 2023 Arakawas LP is Powered by <span className="underline"><a href={data.author_link} target="_blank">{data.author}</a></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer