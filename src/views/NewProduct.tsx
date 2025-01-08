import { Link, useActionData, ActionFunctionArgs, redirect, Form} from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { addProduct } from "../services/ProductService";
import FormProduct from "../components/Form";

export async function action({request}: ActionFunctionArgs){
  const data = Object.fromEntries(await request.formData())
  let error = ''

  if(Object.values(data).includes('')) {
    error = 'Todos los campos son obligatorios'
  }

  if(error.length) {
    return error
  }

  await addProduct(data)

  return redirect('/')
}

const NewProduct = () => {
  const error = useActionData() as string
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl text-slate-500 font-black">
          Registrar producto
        </h2>
        <Link
          to={"/"}
          className="text-white bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded-md"
          >
          Volver al listado de productos
        </Link>
      </div>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form 
        className="mt-10"
        method="POST"
      >
        <FormProduct />
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar Producto"
        />
      </Form>
    </>
  );
};

export default NewProduct;
