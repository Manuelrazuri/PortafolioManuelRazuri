import { useState } from "react";
import { helpHttp } from "../../src/helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      alert("Formulario enviado correctamente");
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/manuel.r.seminario@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "applitacion/json",
            Accept: "applitacion/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
