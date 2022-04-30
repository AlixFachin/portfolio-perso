import React from "react";
import { useTranslation } from "react-i18next";

const availableLanguages = {
    en: { nativeName: 'English'},
    ja: { nativeName: '日本語' },
}

export default function LanguageSwitcher() {

    const { i18n } = useTranslation();

    return <div>
        { Object.keys(availableLanguages).map( language => 
            <button key={language} onClick={ () => i18n.changeLanguage(language) }>
                { availableLanguages[language].nativeName }
            </button>
            )
        }
    </div>

}