import React from 'react';
import Link from 'next/link';
//= Components
import StatementSplitter from '../Common/StatementSplitter';
//= Data
import data from '@/data/Main/services.json';

function Services({ lightMode }) {
  return (
    <section className="services section-padding" id='services'>
    <div className="container">
      <div className="sec-lg-head mb-80">
        <div className="row">
          <div className="col-lg-8">
            <div className="position-re">
              <h6 className="dot-titl-non colorbg-3 mb-10">Serviços em Destaque</h6>
              <h2 className="fz-60 fw-700">Nossos Serviços</h2>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-center">
            <div className="text">
              <p>Guiando-o pelo Mundo Digital: Maximizando seu Impacto Online com Soluções de TI.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
          {
            data.map((item, index) => (
              <div className="col-lg-4" key={item.id}>
                <div className={`item-bord2 radius-10 wow fadeIn ${index !== data.length - 1 ? 'md-mb50' : ''}`} data-wow-delay=".5s">
                  <div className="icon-img-60 mb-40">
                    <img src={`${'/dark/'}${item.image}`} alt="" />
                  </div>
                  <h6 className="mb-30"><StatementSplitter statement={item.title} /></h6>
                  <ul className="check-list rest opacity-8">
                    {
                      item.features.map((feature, idx) => (
                        <li className="mb-10" key={idx}>
                          <span className="fz-12 mr-5"><i className="fas fa-check"></i></span> {feature}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  </section>
  )
}

export default Services