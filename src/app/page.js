"use client"
import { useState } from 'react'
import ButtonHeader from "./components/ButtonHeader"
import Header from "./components/Header"


function HomePage() {

  const [textinput, setTextinput] = useState('')
  const [textResponse, setTextResponse] = useState([])

  const handleSumit = () => {
    event.preventDefault()
    setTextResponse([...textResponse, textinput])
    setTextinput('')
  }

  const handleChange = (event) => {
    setTextinput(event.target.value)
  }

  return (
    <div>
      <Header />
      <form className="mx-auto text-center flex flex-wrap justify-center align-items-center w-96 gap-6" onSubmit={handleSumit}>

        <p className="text-white" type="text" >Holp</p>

        <div className="flex items-center">

        <input placeholder="Texto" className="h-8 w-96" onChange={handleChange}></input>

        <button className="bg-white h-full" >boton</button>

        </div>

      </form>

      {textResponse.map((TR, index) => (
          <p className="text-white text-center" key={index}>{TR}</p>
        ))}
    </div>

  )
}

export default HomePage
