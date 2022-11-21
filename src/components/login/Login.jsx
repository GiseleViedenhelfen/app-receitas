import React from 'react';

function Login() {
  return (
    <div>
      <form className="form-user-container">
        <label htmlFor="id-email-login" className="label-input">
          e-mail:
          <input
            type="email"
            id="id-email-login"
            placeholder="nome@email.com"
          />
        </label>
        <label htmlFor="id-password-login" className="label-input">
          senha:
          <input
            type="password"
            id="id-password-login"
            placeholder="senha"
          />
        </label>
        <div className="login-buttons-container">
          <button type="button">Login</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
