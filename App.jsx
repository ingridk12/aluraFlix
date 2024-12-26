import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <Header />
        <Footer/>
      
      </div>
      
    </>
  )
}

export default App
