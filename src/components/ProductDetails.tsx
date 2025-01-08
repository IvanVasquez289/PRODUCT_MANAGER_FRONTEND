import { ActionFunctionArgs, Form, redirect, useNavigate } from "react-router-dom";
import { Product } from "../types";
import { formatCurrency } from "../utils";
import { deleteProduct } from "../services/ProductService";

type ProductDetailsProps = {
  product: Product;
};

export async function action({  params }: ActionFunctionArgs) {
  const { id } = params;
  if(id !== undefined){
    await deleteProduct(+id)
  }
  return redirect('/')
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const isAvailable = product.availability ? "Disponible" : "No disponible";
  const navigate = useNavigate();
  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-gray-800">{formatCurrency(product.price)}</td>
      <td className="p-3 text-lg text-gray-800">{isAvailable}</td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex items-center gap-2">   
          <button 
            onClick={() => navigate(`/productos/${product.id}/editar`)}
            className="text-white w-full bg-indigo-600 hover:bg-indigo-800 p-2 font-bold text-xs rounded-md uppercase text-center"
          >
            Editar
          </button>      
          <Form
            className="w-full"
            method="POST"
            action={`productos/${product.id}/eliminar`}
            onSubmit={(e) => {
              if(!confirm('¿Estás seguro de eliminar el producto?')) {
                e.preventDefault();
              }
            }}
          >
            <input 
              type="submit" 
              value="Eliminar"
              className="text-white cursor-pointer w-full bg-red-600 hover:bg-red-800 p-2 font-bold text-xs rounded-md uppercase text-center"
            />
          </Form>
        </div>
      </td>
    </tr>
  );
};

export default ProductDetails;
