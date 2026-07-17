export interface Branch {
    id: number
    branch_name: string
    slug: string
    branch_code: string
    address: string
    city: string
    province: string
    postal_code: string | null
    contact_number: string | null
    email: string | null
    latitude: number
    longitude: number
    business_hours: string | null
    description: string | null
    featured_image: string | null
}