import { useState } from 'preact/hooks'
import Button from './components/Button/Button'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button />
    </>
  )
}
