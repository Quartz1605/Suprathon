import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-amber-400 text-4xl">Lets get this shit done !</h1>
      <Button>Welcome</Button>
    </div>
  )
}

export default App
