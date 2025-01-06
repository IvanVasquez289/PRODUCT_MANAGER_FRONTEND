import { safeParse } from "valibot"
import { DraftProductSchema, ProductsSchema } from "../types"
import axios from "axios"

type ProductData = {
    [key: string]: FormDataEntryValue
}
export const addProduct = async (data: ProductData) => {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: Number(data.price)
        })

        if(result.success){
            const url = `${import.meta.env.VITE_API_URL}/api/products`
            await axios.post(url, {
                name: result.output.name,
                price: result.output.price
            })
        }else{
            throw new Error('Datos no validos')
        }
    } catch (error) {
        console.log(error)
    }
}

export const getProducts = async () => {
    try {
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/api/products`)
        const result = safeParse(ProductsSchema, data.data)
        if(result.success){
            return result.output
        }else{
            throw new Error('Hubo un error al obtener los productos')
        }
    } catch (error) {
        console.log(error)
    }
}