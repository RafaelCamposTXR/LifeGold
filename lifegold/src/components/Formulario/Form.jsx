import React, { useState, useRef  } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';


  const Form = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
      user_name: '',
      user_email: '',
      message: ''
    });
  
    const sendEmail = (e) => {
      e.preventDefault();
      console.log(formData); // Exemplo de exibição dos dados no console
      setFormData({
        name: '',
        email: '',
        message: ''
      });
  
      emailjs
        .sendForm('service_x33mzik', 'template_l1sxt3a', form.current, {
          publicKey: 'AF_-plHeZye3p9oc_',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData); // Exemplo de exibição dos dados no console
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    };

    return (
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail} className="form">
          <label className="label">Seu Nome</label>
          <input type="text" name="user_name" />
          <label className="label">Seu email</label>
          <input type="email" name="user_email" />
          <label className="label">Sua Mensagem</label>
          <textarea name="message" />
          <input type="submit" value="Enviar" className="form-button" />
        </form>
      </div>
    );
}

export default Form;
