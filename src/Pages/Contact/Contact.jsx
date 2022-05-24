// import React, { useState } from "react";
import "./contact.scss";
import Lottie from "react-lottie";
import contactlogoData from "../../assets/lotties/contact-chat.json";
import map from "../../IMG/ubicacion.png";
import mail from "../../IMG/gmail.svg";
import cell from "../../IMG/celular.png";
import { useForm } from "../../hooks/useForm";

export const Contact = () => {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    gener: "",
    comments: "",
  };
  const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPhone = /^[0-9]+$/;
    let regexComments = /^.{1,255}$/;

    if (!form.name.trim()) {
      errors.name = "El campo NOMBRE es requerido";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "El campo Nombre sólo acepta letras y espacios en blanco";
    }

    if (!form.email.trim()) {
      errors.email = "El campo EMAIL es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "El campo Email es incorrecto";
    }

    if (!form.phone.trim()) {
      errors.phone = "El campo CELULAR es requerido";
    } else if (!regexPhone.test(form.phone.trim())) {
      errors.phone = "El campo Celular solo acepta numeros";
    }

    if (!form.gener.trim()) {
      errors.gener = "El campo GENERO es requerido";
    }
    if (!form.comments.trim()) {
      errors.comments = "El campo COMENTARIOS es requerido";
    } else if (!regexComments.test(form.comments.trim())) {
      errors.comments =
        "El campo Comentarios no debe exeder los 255 caracteres";
    }

    return errors;
  };
  let styles = {
    fontWeight: "bold",
    color: "#dc3545",
  };
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  // const [form, setForm] = useState({});
  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleChecked= e=>{
  // setForm({
  //   ...form,
  //   [e.target.name]:e.target.cheked,
  // });
  // };

  // console.log([state]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("El Formulario fue enviado");
  // };
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
                <label htmlFor="name">Nombres y Apellidos</label>
                <br></br>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre y apellido"
                  onBlur={handleBlur}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p style={styles}>{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email">Correo Electronico</label>
                <br></br>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Correo Electronico"
                  onBlur={handleBlur}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p style={styles}>{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone">Numero de celular</label>
                <br></br>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Coloca tu codigo + numero "
                  onBlur={handleBlur}
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <p style={styles}>{errors.phone}</p>}
              </div>
              <div>
                <p>Escoge tu genero</p>
                <select
                  name="gener"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  defaultValue=""
                  required
                >
                  <option value="">---</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </select>
                {errors.gener && <p style={styles}>{errors.gener}</p>}
              </div>
              <div>
                <label htmlFor="textarea">Mensaje</label>
                <br></br>
                <textarea
                  value={form.textarea}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="comments"
                  placeholder="Escribe tu comentario"
                  required
                />
                {errors.comments && <p style={styles}>{errors.comments}</p>}
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
