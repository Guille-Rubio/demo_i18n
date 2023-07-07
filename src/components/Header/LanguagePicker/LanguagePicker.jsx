import React from "react";
import { useTranslation } from "react-i18next";



const LanguagePicker = () => {

  //Calling t and i18n method from useTranslation hook 
  const { i18n } = useTranslation();

  //Creating a method to change the language onChange from select box
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
  return <div class="language-picker js-language-picker" data-trigger-class="li4-btn li4-btn--subtle js-tab-focus">
    <select name="language-picker-select" id="language-picker-select" onChange={changeLanguageHandler}>
  
      <option lang="es" value="es">Español</option>
      <option lang="en" value="en" selected>English</option>
    </select>

  </div>;
};

export default LanguagePicker;
