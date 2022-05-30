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
      errors.name = "The NAME field is required";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "The NAME field only accepts letters and blank spaces";
    }

    if (!form.email.trim()) {
      errors.email = "The EMAIL field is required";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "The EMAIL field is incorrect";
    }

    if (!form.phone.trim()) {
      errors.phone = "The PHONE field is required";
    } else if (!regexPhone.test(form.phone.trim())) {
      errors.phone = "The PHONE field only accepts numbers";
    }

    if (!form.gener.trim()) {
      errors.gener = "The GENDER field is required";
    }
    if (!form.comments.trim()) {
      errors.comments = "The COMMENTS field is required";
    } else if (!regexComments.test(form.comments.trim())) {
      errors.comments = "The COMMENTS field must not exceed 255 characters";
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
    <div className="contact" id="contact">
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
                <label htmlFor="name">Name and Last Name</label>
                <br></br>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Write your Name and Lastname"
                  onBlur={handleBlur}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p style={styles}>{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <br></br>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Write your Email"
                  onBlur={handleBlur}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p style={styles}>{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone">Phone Number </label>
                <br></br>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Write your phone number "
                  onBlur={handleBlur}
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <p style={styles}>{errors.phone}</p>}
              </div>
              <div>
                <p>Choose your gender</p>
                <select
                  name="gener"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.gener}
                  required
                >
                  <option value="">---</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gener && <p style={styles}>{errors.gener}</p>}
              </div>
              <div>
                <label htmlFor="textarea">Message</label>
                <br></br>
                <textarea
                  name="comments"
                  placeholder="Write your comment"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.comments}
                  required
                />
                {errors.comments && <p style={styles}>{errors.comments}</p>}
              </div>
              <div className="contact__container-formRegister-submit">
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
