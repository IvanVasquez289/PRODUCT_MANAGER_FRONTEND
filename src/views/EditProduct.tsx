import { Link, useActionData, ActionFunctionArgs, redirect, Form, useLoaderData } from 'react-router-dom';
import ErrorMessage from "../components/ErrorMessage";
import {  getProductById, updateProduct } from "../services/ProductService";
import { Product } from '../types';
import FormProduct from '../components/Form';

export async function loader({params}: ActionFunctionArgs){
  if(params.id !== undefined){
    const product = await getProductById(+params.id)

    if(!product){
      redirect('/')
    }

    return product
  }
}

export async function action({request, params}: ActionFunctionArgs){
  const {id} = params
  const data = Object.fromEntries(await request.formData())
  let error = ''

  if(Object.values(data).includes('')) {
    error = 'Todos los campos son obligatorios'
  }

  if(error.length) {
    return error
  }

  if(id !== undefined){
    await updateProduct(+id, data)
  }

  return redirect('/')
}

const availabilityOptions = [
  { name: 'Disponible', value: true},
  { name: 'No Disponible', value: false}
]

const EditProduct = () => {
  const error = useActionData() as string
  const product: Product = useLoaderData()
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl text-slate-500 font-black">
          Editar producto
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
       
        <FormProduct product={product}/>
        <div className="mb-4">
          <label
              className="text-gray-800"
              htmlFor="availability"
          >Disponibilidad:</label>
          <select 
              id="availability"
              className="mt-2 block w-full p-3 bg-gray-50"
              name="availability"
              defaultValue={product?.availability.toString()}
          >
              {availabilityOptions.map(option => (
                <option key={option.name} value={option.value.toString()}>{option.name}</option>
              ))}
          </select>
          </div>

        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar Producto"
        />
      </Form>
    </>
  );
};

export default EditProduct;
