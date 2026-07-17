import api from './api'
import type { Branch } from '../types/branch'

interface ApiResponse<T> {
    data: T
}

export const getBranches = async (): Promise<Branch[]> => {
    const response = await api.get<ApiResponse<Branch[]>>('/branches')

    return response.data.data
}

export const getBranch = async (slug: string): Promise<Branch> => {
    const response = await api.get<ApiResponse<Branch>>(`/branches/${slug}`)

    return response.data.data
}