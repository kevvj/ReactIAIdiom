
const Aform = ({fun}) =>{
  const a = ()=>{

  }
    return (
    <form className="mx-auto text-center flex flex-wrap justify-center align-items-center w-96 gap-6">
    <p className="text-white" type="text" >Holp</p>
    <input placeholder="Texto" className="h-8 w-96"></input>
    <button className="bg-white" onClick={fun}>boton</button>
  </form>
  )
}

export default Aform