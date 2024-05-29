https://medium.com/how-to-react/setup-multilingual-in-react-js-using-i18n-module-33b1bfbb57cd


1. Create project
2. Install dependencies `npm install react-i18next i18next`
3. Configure i18n. Create `i18n.js` file in /src 
    
4. create locales dir `mkdir src/locales`
    Create a folder for each translation `mkdir src/locales/en src/locales/es`
    Create a json for each language translation 
    `touch src/locales/en/translation.json src/locales/es/translation.json`

5. create translation files as json 

`es/translation.json`
`en/translation.json`

```json
{
    "language": "English",
    "selectLanguage":"Select your language",
    "articles": [
      {
        "heading": "Proven facts. Is the economy doing well or badly? ",
        "subheading": "Apocalyptic forecasts about"
    }
    ]
}
``` 


6. Import i18n en `main.jsx`

```js
import './i18n';
```

7. Import useTranslation 
```js
import { useTranslation } from "react-i18next";


const { t, i18n } = useTranslation();


 <p>{t('name')}</p> 
```


8. Use select to choose language


//https://react.i18next.com/latest/usetranslation-hook




//TODO ADD CONTEXT


### Interesting tools 

[Traductor JSON i18n](https://translate.i18next.com/)