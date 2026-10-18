import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft,
  Bed,
  Bath,
  Maximize,
  Calendar,
  Car,
  MapPin,
  Heart,
  Share2,
  Phone,
  Mail,
  Check,
  X,
} from 'lucide-react'
import { getPropertyBySlug, getRelatedProperties } from '../data/properties'
import { useFavorites } from '../context/FavoritesContext'
import PropertyCard from '../components/PropertyCard'

export default function PropertyDetail() {
  const { slug } = useParams()
  const property = getPropertyBySlug(slug || '')
  const [activeImage, setActiveImage] = useState(0)
  const [showSchedule, setShowSchedule] = useState(false)
  const [scheduleSubmitted, setScheduleSubmitted] = useState(false)
  const { toggleFavorite, isFavorite } = useFavorites()

  if (!property) {
    return (
      <div className="pt-32 container-premium text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
        <Link to="/properties" className="btn-primary">
          Back to Properties
        </Link>
      </div>
    )
  }

  const fav = isFavorite(property.id)
  const related = getRelatedProperties(property.id)

  const specs = [
    { icon: Bed, label: 'Bedrooms', value: property.beds },
    { icon: Bath, label: 'Bathrooms', value: property.baths },
    {
      icon: Maximize,
      label: 'Area',
      value: `${property.sqft.toLocaleString()} sqft`,
    },
    { icon: Car, label: 'Garage', value: property.garage },
    { icon: Calendar, label: 'Built', value: property.yearBuilt },
  ]

  return (
    <div className="pt-20">
      <div className="container-premium py-8">
        {/* Back Link */}
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 text-navy/60 hover:text-gold transition-colors text-sm mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Properties
        </Link>

        {/* Title Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {property.title}
            </h1>
            <p className="text-navy/60 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gold" /> {property.location}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleFavorite(property.id)}
              className="flex items-center gap-2 px-5 py-3 rounded-lg border border-navy/10 hover:border-gold transition-colors text-sm font-medium"
            >
              <Heart
                className={`w-5 h-5 ${
                  fav ? 'fill-red-500 text-red-500' : 'text-navy'
                }`}
              />
              {fav ? 'Saved' : 'Save'}
            </button>
            <button className="flex items-center gap-2 px-5 py-3 rounded-lg border border-navy/10 hover:border-gold transition-colors text-sm font-medium">
              <Share2 className="w-5 h-5" /> Share
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid lg:grid-cols-[1fr_200px] gap-4 mb-8">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-navy/5">
            <img
              src={property.images[activeImage]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <span className="px-5 py-2.5 rounded-lg bg-navy/90 backdrop-blur text-white font-semibold">
                {property.priceLabel}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto no-scrollbar lg:max-h-[400px]">
            {property.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`shrink-0 w-20 h-20 lg:w-full lg:h-24 rounded-xl overflow-hidden border-2 transition-colors ${
                  i === activeImage
                    ? 'border-gold'
                    : 'border-transparent hover:border-navy/20'
                }`}
              >
                <img
                  src={img}
                  alt={`View ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          {/* Left: Details */}
          <div>
            {/* Specs */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="p-4 rounded-xl bg-[#f7f8fa] border border-navy/5 text-center"
                >
                  <spec.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <div className="font-semibold text-navy">{spec.value}</div>
                  <div className="text-xs text-navy/50 mt-0.5">{spec.label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Property</h2>
              <p className="text-navy/70 leading-relaxed text-lg">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Amenities &amp; Features</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-3 text-navy/70"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="p-6 rounded-xl bg-[#f7f8fa] border border-navy/5">
              <h3 className="font-semibold mb-3">Property Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-navy/50">Type</span>
                  <p className="font-medium capitalize">{property.type}</p>
                </div>
                <div>
                  <span className="text-navy/50">Status</span>
                  <p className="font-medium capitalize">
                    {property.status.replace('-', ' ')}
                  </p>
                </div>
                <div>
                  <span className="text-navy/50">Lot Size</span>
                  <p className="font-medium">{property.lotSize}</p>
                </div>
                <div>
                  <span className="text-navy/50">Year Built</span>
                  <p className="font-medium">{property.yearBuilt}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Agent Card + Price */}
          <div className="space-y-6">
            {/* Agent Card */}
            <div className="p-6 rounded-2xl card-shadow border border-navy/5">
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={property.agent.photo}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{property.agent.name}</h3>
                  <p className="text-sm text-navy/50">{property.agent.title}</p>
                </div>
              </div>
              <div className="space-y-3 mb-5">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="flex items-center gap-3 text-navy/70 hover:text-gold transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-gold" /> {property.agent.phone}
                </a>
                <a
                  href={`mailto:${property.agent.email}`}
                  className="flex items-center gap-3 text-navy/70 hover:text-gold transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-gold" /> {property.agent.email}
                </a>
              </div>
              <button
                onClick={() => {
                  setScheduleSubmitted(false)
                  setShowSchedule(true)
                }}
                className="btn-primary w-full"
              >
                Schedule a Viewing
              </button>
            </div>

            {/* Price Card */}
            <div className="p-6 rounded-2xl bg-navy text-white">
              <p className="text-white/60 text-sm mb-1">Listed Price</p>
              <p className="text-3xl font-bold mb-4">{property.priceLabel}</p>
              <p className="text-white/60 text-sm">
                $
                {Math.round(property.price / property.sqft).toLocaleString()}
                /sqft
              </p>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Similar Properties
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Schedule Viewing Modal */}
      {showSchedule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            onClick={() => setShowSchedule(false)}
          />
          <div className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <button
              onClick={() => setShowSchedule(false)}
              className="absolute top-4 right-4 text-navy/40 hover:text-navy transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {scheduleSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Request Sent!</h3>
                <p className="text-navy/60 mb-6">
                  We will contact you shortly to confirm your viewing
                  appointment for {property.title}.
                </p>
                <button
                  onClick={() => {
                    setShowSchedule(false)
                    setScheduleSubmitted(false)
                  }}
                  className="btn-primary"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-2">Schedule a Viewing</h3>
                <p className="text-navy/60 text-sm mb-6">
                  Fill out the form below and we&rsquo;ll get back to you to
                  confirm.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setScheduleSubmitted(true)
                  }}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-navy/10 focus:border-gold focus:outline-none text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-navy/10 focus:border-gold focus:outline-none text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-navy/10 focus:border-gold focus:outline-none text-sm"
                  />
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-navy/10 focus:border-gold focus:outline-none text-sm"
                  />
                  <textarea
                    placeholder="Message (optional)"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-navy/10 focus:border-gold focus:outline-none text-sm resize-none"
                  />
                  <button type="submit" className="btn-primary w-full">
                    Request Viewing
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
