import { useContext, useState, useEffect } from 'react'
import styles from './Hero.module.css'
import responsive from "./Hero.responsive.module.css"
import Terminal from '../../../../components/Terminal/Terminal'
import { LanguageContext } from '../../../../contexts/LanguageContext'

const translations = {
  "pt-br": "Olá! Eu sou Luiz Felipe Buaszczyk",
  "en-us": "Hi! I'm Luiz Felipe Buaszczyk"
}

export default function Hero() {
  const { language } = useContext(LanguageContext)
  const fullText = translations[language]
  const [charCount, setCharCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    setCharCount(0)
    setDone(false)
  }, [language])

  useEffect(() => {
    if (charCount < fullText.length) {
      const timer = setTimeout(() => {
        setCharCount(prev => prev + 1)
      }, 60)
      return () => clearTimeout(timer)
    } else {
      setDone(true)
    }
  }, [charCount])

  return (
    <section id="hero" className={`${styles.hero} ${responsive.hero}`}>
      <div className={styles.namePanel}>
        <h1 className={styles.name}>
          {fullText.slice(0, charCount)}
          {!done && <span className={styles.typingCursor}>|</span>}
        </h1>
      </div>
      <Terminal />
    </section>
  )
}
