import ButtonHeader from "./ButtonHeader"

function Header() {
    return (
      <header className = "py-8 px-4 mx-auto max-w-xl lg:py-16 lg:px-6">
        <div className="mx-auto text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-white">IA ASSISTANT 🤓</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Cualquier cosa no se</p>

          <ButtonHeader props = "Seccion 1"/>
          <ButtonHeader props = "Seccion 2"/>
          <ButtonHeader props = "Seccion 3"/>
  
      </div>
      </header>
    )
  }

  export default Header