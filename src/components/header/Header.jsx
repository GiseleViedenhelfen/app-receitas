import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Login from '../login/Login';
import Register from '../register/Register';
import CategoriesHeader from './CategoriesHeader';
import SearchHeader from './searchHeder/SearchHeader';
import './style.css';

function Header() {
  // const navigate = useNavigate();
  return (
    <div className="container-header">
      <section className="header">
        <h3>Nome Site Receitas</h3>
        <SearchHeader />
        <div className="button-header-container">
          <Popup
            trigger={(
              <button type="button">
                login
              </button>
            )}
            modal
          >
            <div className="login-button-modal">
              <Login />
            </div>
          </Popup>
          <Popup
            trigger={(
              <button type="button">
                cadastro
              </button>
            )}
            modal
          >
            <div className="register-button-modal">
              <Register />
            </div>
          </Popup>
        </div>
      </section>
      <CategoriesHeader />
    </div>
  );
}
export default Header;
