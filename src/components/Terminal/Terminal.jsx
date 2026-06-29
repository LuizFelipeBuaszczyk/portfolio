import { useContext, useState, useEffect, useRef } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'
import styles from './Terminal.module.css'

const translations = {
  "pt-br": {
    boot: {
      title: "[Terminal] v1.0.0",
      welcome: "Bem-vindo ao terminal de Luiz Felipe Buaszczyk!",
      hint: "Digite 'help' para ver os comandos disponíveis."
    },
    whoami: "Luiz Felipe Buaszczyk",
    unknown: (cmd) => `Comando não encontrado: '${cmd}'. Digite 'help' para ver os comandos disponíveis.`,
    help: [
      "Comandos disponíveis:",
      "  help       - Mostra esta mensagem",
      "  skills     - Mostrar minhas habilidades",
      "  contact    - Informacões de contato",
      "  whoami     - Exibir meu nome",
      "  lang       - Mostrar/alterar idioma (pt-br / en-us)",
      "  clear      - Limpar o terminal"
    ].join('\n'),
    skills: "CSS, HTML, Java, PostgreSQL, Python, FastAPI, Docker, JavaScript, Node.js",
    contact: "Email: luizfelipebuaszczyk@gmail.com\nGitHub: github.com/LuizFelipeBuaszczyk\nLinkedIn: linkedin.com/in/luiz-felipe-buaszczyk",
    lang: (current) => `Idioma atual: ${current}`,
    langChanged: (newLang) => `Idioma alterado para: ${newLang}`,
    invalidLang: (newLang) => `Idioma inválido: ${newLang}. Idiomas válidos são 'pt-br' e 'en-us'.`,
  },
  "en-us": {
    boot: {
      title: "[Terminal] v1.0.0",
      welcome: "Welcome to Luiz Felipe Buaszczyk's terminal!",
      hint: "Type 'help' to see available commands."
    },
    whoami: "Luiz Felipe Buaszczyk",
    unknown: (cmd) => `Command not found: '${cmd}'. Type 'help' to see available commands.`,
    help: [
      "Available commands:",
      "  help       - Show this message",
      "  skills     - Show my skills",
      "  contact    - Contact information",
      "  whoami     - Display my name",
      "  lang       - Show/change language (en-us / pt-br)",
      "  clear      - Clear terminal"
    ].join('\n'),
    skills: "CSS, HTML, Java, PostgreSQL, Python, FastAPI, Docker, JavaScript, Node.js",
    contact: "Email: luizfelipebuaszczyk@gmail.com\nGitHub: github.com/LuizFelipeBuaszczyk\nLinkedIn: linkedin.com/in/luiz-felipe-buaszczyk",
    lang: (current) => `Current language: ${current}`,
    langChanged: (newLang) => `Language changed to: ${newLang}`,
    invalidLang: (newLang) => `Invalid language: ${newLang}. Valid languages are 'en-us' and 'pt-br'.`,
  }
}

export default function Terminal() {
  const { language, setLanguage } = useContext(LanguageContext)
  const [output, setOutput] = useState([
    { type: 'system', text: translations[language].boot.title },
    { type: 'system', text: translations[language].boot.welcome },
    { type: 'system', text: translations[language].boot.hint }
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)
  const outputRef = useRef(null)

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: 'smooth' })
  }, [output])

  const processCommand = (cmd) => {
    const args = cmd.trim().split(' ')
    const command = args[0]?.toLowerCase()
    const rest = args.slice(1)
    const t = translations[language]

    switch (command) {
      case 'help':
        return [{ type: 'output', text: t.help }]

      case 'skills':
        return [{ type: 'output', text: t.skills }]

      case 'contact':
        return [{ type: 'output', text: t.contact }]

      case 'whoami':
        return [{ type: 'output', text: t.whoami }]

      case 'lang': {
        if (rest.length === 0) {
          const label = language === 'pt-br' ? 'pt-BR' : 'en-US'
          return [{ type: 'output', text: t.lang(label) }]
        }

        const newLang = rest[0].toLowerCase()
        if (newLang !== 'pt-br' && newLang !== 'en-us') {
          return [{ type: 'output', text: t.invalidLang(newLang) }]
        }

        setLanguage(newLang)
        const newT = translations[newLang]
        const label = newLang === 'pt-br' ? 'pt-BR' : 'en-US'
        return [{ type: 'system', text: newT.langChanged(label) }]
      }

      case 'clear':
        setOutput([
          { type: 'system', text: translations[language].boot.title },
          { type: 'system', text: translations[language].boot.welcome },
          { type: 'system', text: translations[language].boot.hint }
        ])
        return []

      default:
        return [{ type: 'output', text: t.unknown(command) }]
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const trimmed = input.trim()
      if (!trimmed) return

      setOutput(prev => [...prev, { type: 'input', text: `$ ${input}` }])
      setHistory(prev => [...prev, trimmed])
      setHistoryIndex(-1)
      setInput('')

      const response = processCommand(trimmed)
      if (response.length > 0) {
        setOutput(prev => [...prev, ...response])
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length === 0) return

      const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(newIndex)
      setInput(history[newIndex])
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex === -1) return
      const newIndex = historyIndex + 1

      if (newIndex >= history.length) {
        setHistoryIndex(-1)
        setInput('')
      } else {
        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      }
    }
  }

  const handleContainerClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div className={styles.terminal} onClick={handleContainerClick}>
      <div className={styles.outputArea} ref={outputRef}>
        {output.map((line, i) => (
          <div key={i} className={styles[line.type]}>{line.text}</div>
        ))}
        <div className={styles.inputLine}>
          <span className={styles.prompt}>$</span>
          <section>
            <span className={styles.inputText}>{input}</span>
            <span className={styles.cursor}>█</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className={styles.hiddenInput}
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </section>
        </div>
      </div>
    </div>
  )
}
