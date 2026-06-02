import { useEffect, useMemo, useState } from 'react'

const TYPING_SPEED = 95
const ERASING_SPEED = 65
const PAUSE_AFTER_WORD = 1200

export const useTypewriter = (words) => {
  const safeWords = useMemo(() => words.filter(Boolean), [words])
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!safeWords.length) {
      return undefined
    }

    const currentWord = safeWords[wordIndex % safeWords.length]
    const shouldPause = !isDeleting && text === currentWord

    let timeoutDelay = isDeleting ? ERASING_SPEED : TYPING_SPEED
    if (shouldPause) timeoutDelay = PAUSE_AFTER_WORD

    const timeoutId = window.setTimeout(() => {
      if (shouldPause) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && text.length === 0) {
        setIsDeleting(false)
        setWordIndex((currentIndex) => currentIndex + 1)
        return
      }

      const nextText = isDeleting
        ? currentWord.slice(0, text.length - 1)
        : currentWord.slice(0, text.length + 1)

      setText(nextText)
    }, timeoutDelay)

    return () => window.clearTimeout(timeoutId)
  }, [isDeleting, safeWords, text, wordIndex])

  return text
}
