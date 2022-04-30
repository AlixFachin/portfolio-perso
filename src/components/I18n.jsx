import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(resourcesToBackend((language, namespace, callback) => {
        import(`../locales/${language}/${namespace}.json`)
        .then(resources => {
            console.log('Success during oading of translation files')
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

        // have a common namespace used around the full app
        ns: 'Hero',
        load: 'languageOnly',

        debug: true,
        interpolation: {
            escapeValue: false,
        },

    });

    export default i18n;