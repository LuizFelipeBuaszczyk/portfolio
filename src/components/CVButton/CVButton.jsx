import { useContext } from 'react'
import styles from './CVButton.module.css'
import cv_pt from '@/assets/data/cv/pt_cv.pdf'
import cv_en from '@/assets/data/cv/en_cv.pdf'
import { LanguageContext } from '../../contexts/LanguageContext'

const translations = {
  "pt-br": "Abrir Currículo",
  "en-us": "Open CV"
}

export default function CVButton() {
  const { language } = useContext(LanguageContext)

  return (
    <a
      href={ language == 'pt-br' ? cv_pt : cv_en }
      target="_blank"
      className={styles.cvButton}
    >
      {translations[language]}
    </a>
  )
}
