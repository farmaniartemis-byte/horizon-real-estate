import { useState, useMemo } from 'react'
import { Search, X } from 'lucide-react'
import { properties } from '../data/properties'
import PropertyCard from '../components/PropertyCard'
import type { PropertyType } from '../types'

const propertyTypes: { value: PropertyType | 'all'; label: string }[] = [
  { value: 'all', label: 'All Types' },
  { value: 'villa', label: 'Villa' },
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'penthouse', label: 'Penthouse' },
  { value: 'townhouse', label: 'Townhouse' },
]

const priceRanges = [
  { value: 'all', label: 'Any Price', min: 0, max: Infinity },
  { value: 'under-1m', label: 'Under $1M', min: 0, max: 999999 },
  { value: '1-2m', label: '$1M – $2M', min: 1000000, max: 2000000 },
  { value: '2-5m', label: '$2M – $5M', min: 2000000, max: 5000000 },
  { value: 'over-5m', label: 'Over $5M', min: 5000001, max: Infinity },
]

const bedOptions = [
  { value: 'all', label: 'Any Beds', min: 0 },
  { value: '2', label: '2+ Beds', min: 2 },
  { value: '3', label: '3+ Beds', min: 3 },
  { value: '4', label: '4+ Beds', min: 4 },
  { value: '5', label: '5+ Beds', min: 5 },
]

const bathOptions = [
  { value: 'all', label: 'Any Baths', min: 0 },
  { value: '2', label: '2+ Baths', min: 2 },
  { value: '3', label: '3+ Baths', min: 3 },
  { value: '4', label: '4+ Baths', min: 4 },
  { value: '5', label: '5+ Baths', min: 5 },
]

const sortOptions = [
  { value: 'default', label: 'Default' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
  { value: 'beds', label: 'Most Bedrooms' },
  { value: 'sqft', label: 'Largest Area' },
]

const locations = [
  { value: 'all', label: 'All Locations' },
  ...Array.from(new Set(properties.map((p) => p.city))).map((c) => ({
    value: c,
    label: c,
  })),
]

export default function PropertiesPage() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState<PropertyType | 'all'>('all')
  const [priceRange, setPriceRange] = useState('all')
  const [beds, setBeds] = useState('all')
  const [baths, setBaths] = useState('all')
  const [location, setLocation] = useState('all')
  const [sortBy, setSortBy] = useState('default')

  const filtered = useMemo(() => {
    let result = properties.filter((p) => {
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase()) ||
        p.city.toLowerCase().includes(search.toLowerCase())
      const matchType = type === 'all' || p.type === type
      const range = priceRanges.find((r) => r.value === priceRange)!
      const matchPrice = p.price >= range.min && p.price <= range.max
      const bedOpt = bedOptions.find((b) => b.value === beds)!
      const matchBeds = p.beds >= bedOpt.min
      const bathOpt = bathOptions.find((b) => b.value === baths)!
      const matchBaths = p.baths >= bathOpt.min
      const matchLocation = location === 'all' || p.city === location
      return (
        matchSearch &&
        matchType &&
        matchPrice &&
        matchBeds &&
        matchBaths &&
        matchLocation
      )
    })

    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result = [...result].sort((a, b) => b.yearBuilt - a.yearBuilt)
        break
      case 'beds':
        result = [...result].sort((a, b) => b.beds - a.beds)
        break
      case 'sqft':
        result = [...result].sort((a, b) => b.sqft - a.sqft)
        break
    }
    return result
  }, [search, type, priceRange, beds, baths, location, sortBy])

  const hasFilters =
    search ||
    type !== 'all' ||
    priceRange !== 'all' ||
    beds !== 'all' ||
    baths !== 'all' ||
    location !== 'all'

  const clearFilters = () => {
    setSearch('')
    setType('all')
    setPriceRange('all')
    setBeds('all')
    setBaths('all')
    setLocation('all')
    setSortBy('default')
  }

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-navy text-white py-16">
        <div className="container-premium text-center">
          <p className="section-label mb-3">Our Listings</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            All Properties
          </h1>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Browse our complete portfolio of premium homes and investment
            properties.
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="sticky top-16 bg-white z-30 border-b border-navy/5">
        <div className="container-premium py-5">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
              <input
                type="text"
                placeholder="Search by name, city, or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-navy/10 focus:border-gold focus:outline-none text-sm"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-3">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="px-4 py-3 rounded-lg border border-navy/10 focus:border-gold focus:outline-none text-sm bg-white"
              >
                {locations.map((l) => (
                  <option key={l.value} value={l.value}>
                    {l.label}
                  </option>
                ))}
              </select>
              <select
                value={type}
                onChange={(e) =>
                  setType(e.target.value as PropertyType | 'all')
                }
                className="px-4 py-3 rounded-lg border border-navy/10 focus:border-gold focus:outline-none text-sm bg-white"
              >
                {propertyTypes.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 rounded-lg border border-navy/10 focus:border-gold focus:outline-none text-sm bg-white"
              >
                {priceRanges.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
              <select
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
                className="px-4 py-3 rounded-lg border border-navy/10 focus:border-gold focus:outline-none text-sm bg-white"
              >
                {bedOptions.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>
              <select
                value={baths}
                onChange={(e) => setBaths(e.target.value)}
                className="px-4 py-3 rounded-lg border border-navy/10 focus:border-gold focus:outline-none text-sm bg-white"
              >
                {bathOptions.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 rounded-lg border border-navy/10 focus:border-gold focus:outline-none text-sm bg-white"
              >
                {sortOptions.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-3 rounded-lg border border-navy/10 text-navy/60 hover:text-navy hover:border-navy/20 text-sm flex items-center gap-1.5 justify-center"
                >
                  <X className="w-4 h-4" /> Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container-premium py-10">
        <p className="text-navy/60 text-sm mb-6">
          {filtered.length}{' '}
          {filtered.length === 1 ? 'property' : 'properties'} found
        </p>
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-navy/40 text-lg">
              No properties match your filters.
            </p>
            <button onClick={clearFilters} className="btn-outline-navy mt-4">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
