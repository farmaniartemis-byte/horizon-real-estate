import { useRef } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getFeaturedProperties } from '../data/properties'
import PropertyCard from './PropertyCard'

export default function FeaturedProperties() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const featured = getFeaturedProperties()

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = 380
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section id="featured" className="section-padding bg-[#f7f8fa]">
      <div className="container-premium">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Featured</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured Properties
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar px-6 lg:px-8 pb-4 snap-x"
        >
          {featured.map((property) => (
            <div
              key={property.id}
              className="snap-start shrink-0 w-[340px] sm:w-[380px]"
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        {/* Arrow Controls */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center hover:bg-navy hover:text-white transition-colors z-10"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center hover:bg-navy hover:text-white transition-colors z-10"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="container-premium text-center mt-10">
        <Link to="/properties" className="btn-outline-navy">
          View All Properties <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
