import React, { useState } from "react";
import "./contact.scss";
import Lottie from "react-lottie";
import contactlogoData from "../../assets/lotties/contact-chat.json";

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
              width={320}
              height={320}
            />
          </div>
          <div>
            <p>Lima, Perú</p>
            <p>manuel.r.seminario@gmail.com</p>
            <p>963-002-441</p>
          </div>
        </div>
        <div className="contact__container-formRegister">
          <h1>Contact</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nombre">Nombres y Apellidos</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre y apellido"
                value={form.nombre}
                onChange={handleChange}
              />
              <label htmlFor="email">Correo Electronico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo Electronico"
                value={form.email}
                onChange={handleChange}
              />
              <label htmlFor="phone">Numero de celular</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+51"
                value={form.phone}
                onChange={handleChange}
              />
              <p>Escoge tu genero</p>
              <select name="genero" onChange={handleChange} defaultValue="">
                <option value="">---</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </select>
              <label htmlFor="textarea">Mensaje</label>
              <textarea
                value={form.textarea}
                onChange={handleChange}
                name="texarea"
              />
              <input type="submit" />
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
