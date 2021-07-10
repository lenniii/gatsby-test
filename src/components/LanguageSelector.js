import { useI18next } from "gatsby-plugin-react-i18next"
import React from "react"

const LanguageSelector = () => {
  const { languages, language, changeLanguage } = useI18next()

  const handleChangeLanguage = e => changeLanguage(e.target.value)

  return (
    <select onChange={handleChangeLanguage} value={language}>
      {languages.map(lang => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  )
}

export default LanguageSelector
