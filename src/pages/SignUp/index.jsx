import React from 'react';
import './styles.css';

import mainLogo from '../../assets/logo/cyberLogo_1.png';

import InputT1 from '../../components/InputT1';
import { ButtonBlue, ButtonPurple } from '../../components/ButtonT1';

const SignUp = () => {
  return (
    <div className="main">
      <section className="main__content">
        <img
          src={mainLogo}
          alt="logo cyber dashboard"
          className="main__content__logo"
        />
        <form action="" className="main__content__formBlock">
          <InputT1 placeHolder="Name" type="text" />
          <InputT1 placeHolder="Email" type="email" />
          <InputT1 placeHolder="Password" type="password" />
          <InputT1 placeHolder="Repeat Password" type="password" />
          <div className="buttonPack">
            <ButtonPurple>SignUp</ButtonPurple>
            <ButtonBlue>SignIn</ButtonBlue>
          </div>
        </form>
      </section>
      <section className="main__wallpaper" />
    </div>
  );
};

export default SignUp;
