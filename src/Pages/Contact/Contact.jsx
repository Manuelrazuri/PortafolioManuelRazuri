import React, { useState } from "react";
import "./contact.scss";
import Lottie from "react-lottie";
import contactlogoData from "../../assets/lotties/contact-chat.json";
import map from "../../IMG/ubicacion.png";
import mail from "../../IMG/gmail.svg";
import cell from "../../IMG/celular.png";

export const Contact = () => {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const handleChecked= e=>{
  // setForm({
  //   ...form,
  //   [e.target.name]:e.target.cheked,
  // });
  // };

  // console.log([state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El Formulario fue enviado");
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    animationData: contactlogoData,
  };

  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__container-info">
          <div>
            <Lottie
              options={{ animationData: contactlogoData }}
              width={300}
              height={300}
            />
          </div>
          <div>
            <div className="contact__container-info-map">
              <div className="contact__container-info-map-planet">
                <img src={map} alt="IconoMapa" width="40px" height="40px" />
              </div>
              <p>Lima, Perú</p>
            </div>
            <div className="contact__container-info-mail">
              <div className="contact__container-info-mail-gmail">
                <img src={mail} alt="IconoGmail" width="40px" height="40px" />
              </div>
              <p>manuel.r.seminario@gmail.com</p>
            </div>
            <div className="contact__container-info-mail">
              <div className="contact__container-info-mail-gmail">
                <img src={cell} alt="IconoGmail" width="40px" height="40px" />
              </div>
              <p>963-002-441</p>
            </div>
          </div>
        </div>
        <div className="contact__container-formRegister">
          <h1>Contact</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nombre">Nombres y Apellidos</label>
                <br></br>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre y apellido"
                  value={form.nombre}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Correo Electronico</label>
                <br></br>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Correo Electronico"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone">Numero de celular</label>
                <br></br>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+51"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <p>Escoge tu genero</p>
                <select name="genero" onChange={handleChange} defaultValue="">
                  <option value="">---</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </select>
              </div>
              <div>
                <label htmlFor="textarea">Mensaje</label>
                <br></br>
                <textarea
                  value={form.textarea}
                  onChange={handleChange}
                  name="texarea"
                  placeholder="Escribe tu comentario"
                />
              </div>
              <div>
                <br></br>
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
// }
// };
// export default App;
