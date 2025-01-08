import { useNavigate } from "react-router-dom";
import { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailsProps = {
  product: Product;
};
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
            className="text-white w-full bg-indigo-600 hover:bg-indigo-800 p-2 font-bold text-xsz rounded-md uppercase text-center"
          >
            Editar
          </button>      
        </div>
      </td>
    </tr>
  );
};

export default ProductDetails;
