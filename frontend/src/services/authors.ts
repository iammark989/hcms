import api from './api'
import type { Author } from '../types/author'

interface ApiResponse<T> {
    data: T
}

export const getAuthors = async (): Promise<Author[]> => {
    const response = await api.get<ApiResponse<Author[]>>('/authors')

    return response.data.data
}