import React from "react";
import { useTranslation } from "react-i18next";

const Entry = ({ index }) => {

  const { t } = useTranslation();

  

  return (
    <article>
      {/* call name of the variable from  the translation.json file to t() method */}
      <h1>{t(`articles.${index}.heading`)}</h1>
      <h2>{t(`articles.${index}.subheading`)}</h2>
      <p>{t(`articles.${index}.text`)}</p>

    </article>
  );
};

export default Entry;
