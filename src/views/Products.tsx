import { Link } from "react-router-dom"

const Products = () => {
  return (
    <div className="flex justify-between"> 
      <h2 className="text-4xl text-slate-500 font-black">Listado de productos</h2>
      <Link
        to={'/productos/nuevo'}
        className="text-white bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded-md"
      >
        Registrar producto
      </Link>
    </div>
  )
}

export default Products