import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationEnglish from "./Translation/English/translation.json";
import translationThailand from "./Translation/Thailand/translation.json";

//Import translation2 file
import translationEnglishSecondFile from "./Translation/English/translation2.json";

//---Using translation
// const resources = {
//     en: {
//         translation: translationEnglish,
//     },
//     es: {
//         translation: translationSpanish,
//     },
//     fr: {
//         translation: translationFrench,
//     },
// }

//---Using different namespaces
const resources = {
    en: {
        home: translationEnglish,
        main: translationEnglishSecondFile,
    },
    th: {
        home: translationThailand,
    }
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng:"en", //default language
});

export default i18next;