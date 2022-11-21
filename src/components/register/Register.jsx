import React from 'react';

function Register() {
  return (
    <div>
      <form className="form-user-container">
        <label htmlFor="email-register" className="label-input">
          email:
          <input
            id="email-register"
            type="email"
            placeholder="nome@email.com"
          />
        </label>
        <label htmlFor="password-register" className="label-input">
          senha:
          <input
            id="password-register"
            type="password"
            placeholder="senha"
          />
        </label>
        <label htmlFor="confirm-password-register" className="label-input">
          confirme sua senha:
          <input
            id="confirm-password-register"
            type="password"
            placeholder="senha"
          />
        </label>
        <div className="login-buttons-container">
          <button type="button">enviar</button>
        </div>
      </form>
    </div>
  );
}
export default Register;
