import { data } from "autoprefixer";
import React, { useState } from "react";
import { toast } from 'react-toastify';
// import Spinner from '../../../public/dark/assets/imgs/svg-assets/spinner.svg'

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = (e) => {
    setLoading(true)
    if(name == "" || email == "" || telefone == "" || message == ""){
      setLoading(false)

      return null
    }
    var fullMessage =
      `<h4>Nome: </h4><p>${name}</p><br>` +
      `<h4>Email</h4><p>${email}</p><br>` +
      `<h4>Telefone</h4><p>${telefone}</p>` +
      `<p>${message}</p>`;

    e.preventDefault();
    fetch("https://9g6fpezhbb.execute-api.us-east-1.amazonaws.com/sendEmail", {
      mode: "no-cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderName: "kaioarakawa@gmail.com",
        senderEmail: "kaioarakawa@gmail.com",
        subject: "Nova mensagem do site ",
        message: fullMessage,
        date: new Date(),
      }),
    })
      .then((res) => res.json())
      .then(() => {
        toast("Mensagem enviada!");
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  };

  return (
    <section className="contact-crev section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-lg-head mb-80">
              <h6 className="dot-titl-non mb-10">Contato</h6>
              <h2 className="fz-50">
                Entre em <br /> contato conosco.
              </h2>
              <p className="fz-15 mt-10">
                Se você deseja trabalhar conosco ou apenas entrar em contato,
                ficaremos muito felizes em ouvir você! Sinta-se à vontade para
                nos contatar; estamos ansiosos para receber sua mensagem!
              </p>
              <div className="phone fz-30 fw-600 mt-30 underline">
                <a href="tel:+5514998534448">+55 14 9 9853 4448</a>
              </div>
              <ul className="rest social-text d-flex mt-60">
                <li>
                  <a href="https://www.linkedin.com/company/arakawas">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <form id="contact-form" method="post">
                <div className="messages"></div>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Nome"
                        required="required"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="telefone"
                        name="telefone"
                        placeholder="Telefone"
                        onChange={(event) => setTelefone(event.target.value)}
                        value={telefone}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                        onChange={(event) => setMessage(event.target.value)}
                        value={message}
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="butn butn-md butn-bord radius-30"
                        disabled={loading}
                      >
                        
                          {loading ? (
                            <img src="/dark/assets/imgs/svg-assets/spinner.svg" className="spinner"/>
                          ) : (
                            "Vamos conversar"
                          )}
                        
                      </button>
                      
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
