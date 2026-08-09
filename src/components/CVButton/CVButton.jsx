import { useContext } from 'react'
import styles from './CVButton.module.css'
import cvUrl from '@/assets/data/cv.pdf'
import { LanguageContext } from '../../contexts/LanguageContext'

const translations = {
  "pt-br": "Abrir Currículo",
  "en-us": "Open CV"
}

export default function CVButton() {
  const { language } = useContext(LanguageContext)

  return (
    <a
      href={cvUrl}
      target="_blank"
      className={styles.cvButton}
    >
      {translations[language]}
    </a>
  )
}
