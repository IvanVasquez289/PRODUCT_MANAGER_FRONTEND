import { safeParse } from "valibot"
import { DraftProductSchema, Product, ProductSchema, ProductsSchema } from "../types"
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

export const getProductById = async (id: Product['id']) => {
    try {
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/api/products/${id}`)
        const result = safeParse(ProductSchema, data.data)
        if(result.success){
            return result.output
        }else{
            throw new Error('Hubo un error al obtener el producto')
        }
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async (id: Product['id'], info: ProductData) => {
    try {
        const result = safeParse(ProductSchema, {
            id,
            name: info.name,
            price: Number(info.price),
            availability: info.availability === 'true' ? true : false
        })
        
        if(result.success){
            await axios.put(`${import.meta.env.VITE_API_URL}/api/products/${id}`, result.output)
            
        }else{
            throw new Error('Datos no validos')
        }
    } catch (error) {
        console.log(error)
    }
}