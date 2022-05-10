import React from "react";
import { useTranslation } from "react-i18next";

const availableLanguages = {
    en: { nativeName: 'English'},
    ja: { nativeName: '日本語' },
}

export default function LanguageSwitcher({ mode }) {

    const { i18n } = useTranslation();
    if (mode === 'hero') {
        return <>
            { Object.keys(availableLanguages).filter(language => language !== i18n.language).map(language => 
                <h2 className="link" onClick={ () => i18n.changeLanguage(language) }>
                    { availableLanguages[language].nativeName }
                </h2>
                )[0]
            }
            </>
    } else {
        return <div>
            { Object.keys(availableLanguages).map( language => 
                <button key={language} onClick={ () => i18n.changeLanguage(language) }>
                    { availableLanguages[language].nativeName }
                </button>
                )[0]
            }
        </div>
    }


}