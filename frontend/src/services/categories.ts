import api from './api'
import type {
    Category,
    CategoryDetails
} from '../types/category'

interface ApiResponse<T> {
    data: T
}

export const getCategories = async (): Promise<Category[]> => {
    const response =
        await api.get<ApiResponse<Category[]>>('/categories')

    return response.data.data
}

export const getCategory = async (
    slug: string
): Promise<CategoryDetails> => {
    const response =
        await api.get<ApiResponse<CategoryDetails>>(
            `/categories/${slug}`
        )

    return response.data.data
}