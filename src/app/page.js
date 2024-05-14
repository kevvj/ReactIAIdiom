"use client"
import {useState} from 'react'
import Aform from "./components/askForm"
import ButtonHeader from "./components/ButtonHeader"
import Header from "./components/Header"


 function HomePage() {
  
const [info, setInfo] = useState('')

const HandleClick = () =>{
  event.preventDefault();
  setInfo('holp')
  console.log(info)
}
  
  return (
    <div>
          <Header /> 
          <Aform fun={HandleClick}/>

    </div>
  
  )
}

export default HomePage
