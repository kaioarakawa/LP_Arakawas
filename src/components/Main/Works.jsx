import React from 'react';
//= Data
import data from '@/data/Main/works.json';

function Works() {
  return (
    <section className="works thecontainer" id='projetos'>
      {
        data.map(item => (
          <div className="panel mt-30" key={item.id}>
            <div className="item">
              <div className="img" id="image-work">
                <img src={item.image} alt="" />
              </div>
              <div className="cont d-flex align-items-end">
                <div>
                  <span>{item.tag}</span>
                  <h5>{item.title}</h5>
                </div>
                <div className="ml-auto">
                  <h6>{item.date}</h6>
                </div>
              </div>
              <a href="#0" className="link-overlay"></a>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Works