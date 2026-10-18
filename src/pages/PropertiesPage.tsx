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

export default function PropertiesPage() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState<PropertyType | 'all'>('all')
  const [priceRange, setPriceRange] = useState('all')
  const [beds, setBeds] = useState('all')

  const filtered = useMemo(() => {
    return properties.filter((p) => {
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
      return matchSearch && matchType && matchPrice && matchBeds
    })
  }, [search, type, priceRange, beds])

  const hasFilters =
    search || type !== 'all' || priceRange !== 'all' || beds !== 'all'

  const clearFilters = () => {
    setSearch('')
    setType('all')
    setPriceRange('all')
    setBeds('all')
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
            <div className="flex gap-3 flex-wrap">
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
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-3 rounded-lg border border-navy/10 text-navy/60 hover:text-navy hover:border-navy/20 text-sm flex items-center gap-1.5"
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
          {filtered.length} {filtered.length === 1 ? 'property' : 'properties'}{' '}
          found
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
