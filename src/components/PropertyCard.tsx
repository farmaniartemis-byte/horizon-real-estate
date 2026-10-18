import { Link } from 'react-router-dom'
import { Bed, Bath, Maximize, Heart, MapPin } from 'lucide-react'
import type { Property } from '../types'
import { useFavorites } from '../context/FavoritesContext'

export default function PropertyCard({ property }: { property: Property }) {
  const { toggleFavorite, isFavorite } = useFavorites()
  const fav = isFavorite(property.id)

  return (
    <Link
      to={`/properties/${property.slug}`}
      className="block group rounded-2xl overflow-hidden bg-white card-shadow card-shadow-hover"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide ${
              property.status === 'for-sale'
                ? 'bg-gold text-white'
                : property.status === 'for-rent'
                ? 'bg-navy text-white'
                : 'bg-gray-500 text-white'
            }`}
          >
            {property.status === 'for-sale'
              ? 'For Sale'
              : property.status === 'for-rent'
              ? 'For Rent'
              : 'Sold'}
          </span>
        </div>
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            toggleFavorite(property.id)
          }}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-all"
          aria-label={fav ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              fav ? 'fill-red-500 text-red-500' : 'text-navy'
            }`}
          />
        </button>
        {/* Price Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-4 py-2 rounded-lg bg-navy/90 backdrop-blur text-white font-semibold text-sm">
            {property.priceLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg mb-1 group-hover:text-gold transition-colors">
          {property.title}
        </h3>
        <p className="text-navy/60 text-sm mb-4 flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-gold shrink-0" />
          {property.location}
        </p>
        <div className="flex items-center gap-4 text-sm text-navy/70 border-t border-navy/10 pt-4">
          <span className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-gold" /> {property.beds}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-gold" /> {property.baths}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4 text-gold" />{' '}
            {property.sqft.toLocaleString()} sqft
          </span>
        </div>
      </div>
    </Link>
  )
}
