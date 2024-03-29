import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      <div className="form-container"> {/* Aplica a classe .form-container */}
        <form className="form" onSubmit={handleSubmit}> {/* Aplica a classe .form */}
          <div>
            <label htmlFor="name">Seu Nome:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label htmlFor="email">Seu E-mail:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label htmlFor="message">Mensagem:</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
  );
}

export default Form;
