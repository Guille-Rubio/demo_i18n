import React from "react";
import Entry from './Entry/Entry';
import translation from '../../locales/en/translation.json'

const Main = () => {
  return <main>

    {translation.articles.map((article, i) => <Entry key={i} index={i}/>)}

  </main>;
};

export default Main;
