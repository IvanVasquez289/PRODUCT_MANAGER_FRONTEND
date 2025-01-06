import { Link, useLoaderData } from "react-router-dom"
import { getProducts } from "../services/ProductService"
import type { Product } from "../types"
import ProductDetails from "../components/ProductDetails"

export const loader = async () => {
  const products = await getProducts()
  return products
}
const Products = () => {
  const products: Product[] = useLoaderData()
  console.log(products)
  return (
    <>
      <div className="flex justify-between"> 
        <h2 className="text-4xl text-slate-500 font-black">Listado de productos</h2>
        <Link
          to={'/productos/nuevo'}
          className="text-white bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded-md"
        >
          Registrar producto
        </Link>
      </div>
      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
                <th className="p-2">Producto</th>
                <th className="p-2">Precio</th>
                <th className="p-2">Disponibilidad</th>
                <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <ProductDetails product={product} key={product.id}/>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Products