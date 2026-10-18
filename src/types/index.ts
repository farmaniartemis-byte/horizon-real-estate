export type PropertyType = 'villa' | 'apartment' | 'house' | 'penthouse' | 'townhouse'
export type PropertyStatus = 'for-sale' | 'for-rent' | 'sold'

export interface PropertyAgent {
  name: string
  title: string
  phone: string
  email: string
  photo: string
}

export interface Property {
  id: string
  title: string
  slug: string
  location: string
  city: string
  state: string
  country: string
  price: number
  priceLabel: string
  description: string
  images: string[]
  beds: number
  baths: number
  sqft: number
  type: PropertyType
  status: PropertyStatus
  featured: boolean
  amenities: string[]
  yearBuilt: number
  garage: number
  lotSize: string
  agent: PropertyAgent
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  photo: string
  bio: string
  social: {
    linkedin: string
    twitter: string
    email: string
  }
}
