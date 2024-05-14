"use client"
import { useState } from 'react'
import ButtonHeader from "./components/ButtonHeader"
import Header from "./components/Header"


function HomePage() {

  const [info, setInfo] = useState('')
  const [numero, setNumero] = useState(0)

  const handleSumit = () => {
    event.preventDefault()
    setNumero(numero+1)
  }

  const handleChange = (event) => {
    setInfo(event.target.value)
  }

  return (
    <div>
      <Header />
      <form className="mx-auto text-center flex flex-wrap justify-center align-items-center w-96 gap-6" onSubmit={handleSumit}>
        <p className="text-white" type="text" >Holp</p>
        <input placeholder="Texto" className="h-8 w-96" onChange={handleChange}></input>
        <button className="bg-white" >boton</button>
      </form>
      <p className="text-white" >{info}</p>
      <p className="text-white" >{numero}</p>
    </div>

  )
}

export default HomePage
