import { useState, useEffect } from 'react'

export default function useCountDown() {
  const countDownDate = new Date('Jan 1, 2022 0:0:0').getTime()
  const [countDown, setCountDown] = useState('')

  useEffect(() => {
    let handleCountDown = setInterval(() => {
      let now = new Date().getTime()
      let distance = countDownDate - now
      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setCountDown(`${days}d ${hours}h ${minutes}m ${seconds}s`)

      if (distance < 0) {
        clearInterval(handleCountDown)
        setCountDown('Happy new year~')
      }
    }, 1000)
    return () => clearInterval(handleCountDown)
  }, [countDownDate])

  return {
    countDown,
  }
}
