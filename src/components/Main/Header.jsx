import React, { useState, useEffect } from 'react';
import Link from 'next/link';

//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header({ lightMode }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  function openVideo(event) {
    event.preventDefault();
    setIsVideoOpen(true);
  }

  return (
    <header className="crev-header" id='header'>
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-9">
            <div className="caption">
              <h1>Criando <br /> <span className="stroke">Hoje</span> as Soluções do Amanhã </h1>
              <div className="row mt-30">
                <div className="col-lg-5 offset-lg-1">
                  <div className="text">
                    <p>Decodificando o Futuro Tecnológico com Expertise e Inovação.</p>
                  </div>
                  {/* <div className="crv-butn-vid mt-30">
                    <a href="https://youtu.be/AzwC6umvd1s" className="vid" onClick={openVideo}>
                      <span className="text sub-title">Watch</span>
                      <span className="icon main-colorbg4">
                        <svg className="default" width="13" height="20" viewBox="0 0 13 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 20L13 10L0 0V20Z"></path>
                        </svg>
                      </span>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-img">
        <img src="/dark/assets/imgs/main/header_home.jpg" alt="" />
      </div>
      <div className="bg-pattern bg-img" data-background={`/${'dark'}/assets/imgs/patterns/graph.png`}></div>
    </header>
  )
}

export default Header