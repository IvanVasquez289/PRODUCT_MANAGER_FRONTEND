import { Link } from "react-router-dom"

const NewProduct = () => {
  return (
    <div className="flex justify-between"> 
      <h2 className="text-4xl text-slate-500 font-black">Registrar producto</h2>
      <Link
        to={'/'}
        className="text-white bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded-md"
      >
        Volver al listado de productos
      </Link>
    </div>
  )
}

export default NewProduct