import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(resourcesToBackend((language, namespace, callback) => {
        console.log('Trying to import the proper language~~~~!!!!')
        import(`../locales/${language}/${namespace}.json`)
        .then(resources => {
            callback(null, resources)
        })
        .catch(error => {
            console.log('Error during loading of translation files')
            console.error(error);
            callback(error, null)
        })
    }))
    .init({
        fallbackLng: 'en',
        lng: 'en',

        ns: ['Home', 'Blog', 'Projects' ],
        defaultNS: 'Home',
        load: 'languageOnly',

        debug: true,
        interpolation: {
            escapeValue: false,
        },

    });

    export default i18n;