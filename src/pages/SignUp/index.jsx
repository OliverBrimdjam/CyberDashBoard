import React from 'react';
import './styles.css';

import mainLogo from '../../assets/logo/cyberLogo_1.png';
// import moldura from '../../assets/inputs/input_2.png';

import InputT1 from '../../components/InputT1';

const SignUp = () => {
  return (
    <div className="main">
      <section className="main__content">
        <img src={mainLogo} alt="logo cyber dashboard" className="logo" />
        <form action="" className="formBlock">
          {/* <div className="inputContainer">
            <input
              type="text"
              className="inputContainer__input"
              placeholder="Nome"
            />
          </div>
          <div className="inputContainer">
            <input
              type="email"
              className="inputContainer__input"
              placeholder="E-mail"
            />
          </div>
          <div className="inputContainer">
            <input
              type="password"
              className="inputContainer__input"
              placeholder="Senha"
            />
          </div>
          <div className="inputContainer">
            <input
              type="password"
              className="inputContainer__input"
              placeholder="Confirmar Senha"
            />
          </div> */}
          <InputT1 placeHolder="Name" type="text" />
          <InputT1 placeHolder="Email" type="email" />
          <InputT1 placeHolder="Password" type="password" />
          <InputT1 placeHolder="Repeat Password" type="password" />

          <div className="buttonContainer">
            <button type="submit" className="confirm">
              Cadastrar
            </button>
          </div>
        </form>
      </section>
      <section className="wallpaper" />
    </div>
  );
};

export default SignUp;
