import { Link, Form } from "react-router-dom";

export async function action(){
  console.log('desde action')
  return {}
}

const NewProduct = () => {
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
      
      <Form 
        className="mt-10"
        method="POST"
      >
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="name">
            Nombre Producto:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Nombre del Producto"
            name="name"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="price">
            Precio:
          </label>
          <input
            id="price"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Precio Producto. ej. 200, 300"
            name="price"
          />
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

export default NewProduct;
