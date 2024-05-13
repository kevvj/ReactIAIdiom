import ButtonHeader from "./components/ButtonHeader"
import Header from "./components/Header"


 function HomePage() {
  return (
    <div>
          <Header /> 
          <div className="mx-auto text-center mb-8 lg:mb-16">
            <p className="text-white" type="text" >Holp</p>
            <input placeholder="Texto" className="placeholder-black-400"></input>
          </div>
    </div>
  
  )
}

export default HomePage
