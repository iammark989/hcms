import api from './api'
import type { Post } from '../types/post'
import type { PaginatedResponse } from '../components/utils/paginatedResponse'

interface ApiResponse<T> {
    data: T
}

export const getPosts = async (
    page = 1
): Promise<PaginatedResponse<Post>> => {

    const response = await api.get<PaginatedResponse<Post>>(
        `/posts?page=${page}`
    );

    return response.data;
}

export const getPost = async (slug: string): Promise<Post> => {
    const response = await api.get<ApiResponse<Post>>(`/posts/${slug}`)

    return response.data.data
}