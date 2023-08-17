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
    <footer className="sub-bg">
    <div className="sub-footer pt-40 pb-40 bord-thin-top">
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
  </footer>
  )
}

export default Footer