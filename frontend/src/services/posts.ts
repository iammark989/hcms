import api from './api'
import type { Post } from '../types/post'

interface ApiResponse<T> {
    data: T
}

export const getPosts = async (): Promise<Post[]> => {
    const response = await api.get<ApiResponse<Post[]>>('/posts')

    return response.data.data
}

export const getPost = async (slug: string): Promise<Post> => {
    const response = await api.get<ApiResponse<Post>>(`/posts/${slug}`)

    return response.data.data
}