"use client"
import { useState } from 'react'
import ButtonHeader from "./components/ButtonHeader"
import Header from "./components/Header"


function HomePage() {

  const [textinput, setTextinput] = useState('')
  const [textResponse, setTextResponse] = useState([])

  const handleSumit = () => {
    event.preventDefault()

    console.log(textinput)

    if(textinput != ""){
      setTextResponse([...textResponse, textinput])
      setTextinput('')
    }
   
  }

  const handleChange = (event) => {
    setTextinput(event.target.value)
  }

  return (
    <div>
      <Header />
      <form className="mx-auto text-center flex flex-wrap justify-center align-items-center w-96 gap-6" onSubmit={handleSumit}>

        <p className="text-white" type="text" >Holp</p>

        <div className="flex items-center text-white">

          <input placeholder="Texto" className="h-8 w-96 bg-transparent border border-gray-300 p-2" onChange={handleChange}></input>

          <button className="h-full" >ENVIAR</button>

        </div>

      </form>
      <div>
        {textResponse.map((TR, index) => (
          <p className="text-white text-center" key={index}>{TR}</p>
        ))}
       
      </div>


    </div>

  )
}

export default HomePage
