import type { Property } from '../types'

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

// Valid Unsplash photo IDs
const ext = [
  '1613490493576-7fde63acd811', // modern villa at dusk
  '1582268611958-ebfd161ef9cf', // modern white house
  '1518780664697-55e3ad937233', // architecture
  '1505843513577-22bb7d21e455', // concrete house
  '1512917774080-9991f1c4c750', // building near pool
  '1613977257592-4871e5fcd7c4', // villa with pool
  '1580587771525-78b9dba3b914', // concrete building
  '1591474200742-8e512e6f98f8', // wooden house
  '1706808849780-7a04fbac83ef', // house with pool
  '1679364297777-1db77b6199be', // house with car
  '1685514823717-7e1ff6ee0563', // house with trees
  '1723110994499-df46435aa4b3', // house with car
]

const int = [
  '1502672260266-1c1ef2d93688', // living room
  '1583845112203-29329902332e', // interior
  '1556909114-f6e7ad7d3136', // kitchen
  '1556909212-d5b604d0c90d', // dining
  '1567538096630-e0c55bd6374c', // interior
  '1586023492125-27b2c045efd7', // interior
  '1568602471122-7832951cc4c5', // interior
  '1583847268964-b28dc8f51f92', // living room large window
  '1631679706909-1844bbd07221', // living room mirror
  '1616047006789-b7af5afb8c20', // living room leather sofa
  '1598928506311-c55ded91a20c', // living room fireplace
  '1564078516393-cf04bd966897', // living room couch window
  '1605774337664-7a846e9cdf17', // living room coffee table
  '1632829882891-5047ccc421bc', // living room fireplace 2
  '1618221195710-dd6b41faaea6', // living room set
  '1615800002234-05c4d488696c', // living room sofa
  '1560448204-e02f11c3d0e2', // living room beige
]

export const properties: Property[] = [
  {
    id: '1',
    slug: 'lakeside-modern-villa',
    title: 'Lakeside Modern Villa',
    location: 'Austin, Texas, USA',
    city: 'Austin',
    state: 'Texas',
    country: 'USA',
    price: 2350000,
    priceLabel: '$2.35 Million',
    description:
      'A stunning architectural masterpiece set on the shores of Lake Austin. This contemporary villa features floor-to-ceiling windows, an infinity pool blending into the lake, and seamless indoor-outdoor living spaces designed for both grand entertaining and quiet relaxation.',
    images: [img(ext[0]), img(int[0]), img(int[2]), img(int[7]), img(ext[5])],
    beds: 5,
    baths: 4,
    sqft: 6200,
    type: 'villa',
    status: 'for-sale',
    featured: true,
    amenities: ['Infinity Pool', 'Smart Home System', 'Wine Cellar', 'Home Theater', '3-Car Garage', 'Lake Frontage', 'Outdoor Kitchen', 'Solar Panels'],
    yearBuilt: 2021,
    garage: 3,
    lotSize: '1.2 acres',
    agent: {
      name: 'Sarah Mitchell',
      title: 'Senior Property Advisor',
      phone: '(555) 246-7890',
      email: 'sarah@horizonproperties.com',
      photo: img('1494790108377-be9c29b29330', 400),
    },
  },
  {
    id: '2',
    slug: 'hillcrest-glass-penthouse',
    title: 'Hillcrest Glass Penthouse',
    location: 'Miami, Florida, USA',
    city: 'Miami',
    state: 'Florida',
    country: 'USA',
    price: 1850000,
    priceLabel: '$1.85 Million',
    description:
      'Perched atop the prestigious Hillcrest Tower, this glass-walled penthouse offers panoramic ocean and skyline views. The open-plan design, designer finishes, and private rooftop terrace define luxury urban living at its finest.',
    images: [img(ext[3]), img(int[8]), img(int[9]), img(int[10])],
    beds: 3,
    baths: 3,
    sqft: 3400,
    type: 'penthouse',
    status: 'for-sale',
    featured: true,
    amenities: ['Private Rooftop Terrace', 'Ocean View', 'Concierge Service', 'Gym Access', 'Valet Parking', 'Smart Home System', 'Wine Storage'],
    yearBuilt: 2020,
    garage: 2,
    lotSize: 'N/A',
    agent: {
      name: 'James Carter',
      title: 'Luxury Property Specialist',
      phone: '(555) 246-7891',
      email: 'james@horizonproperties.com',
      photo: img('1535713875002-d1d0cf377fde', 400),
    },
  },
  {
    id: '3',
    slug: 'oakwood-contemporary-estate',
    title: 'Oakwood Contemporary Estate',
    location: 'Beverly Hills, California, USA',
    city: 'Beverly Hills',
    state: 'California',
    country: 'USA',
    price: 5200000,
    priceLabel: '$5.20 Million',
    description:
      'An extraordinary estate set on a private gated lot in the heart of Beverly Hills. Featuring resort-style grounds, a guesthouse, and interiors by an award-winning designer, this property is the pinnacle of California luxury living.',
    images: [img(ext[4]), img(int[11]), img(int[12]), img(ext[6])],
    beds: 7,
    baths: 8,
    sqft: 9800,
    type: 'villa',
    status: 'for-sale',
    featured: true,
    amenities: ['Guest House', 'Tennis Court', 'Resort Pool', 'Home Theater', 'Wine Cellar', 'Gated Estate', 'Motor Court', 'Staff Quarters'],
    yearBuilt: 2019,
    garage: 5,
    lotSize: '2.5 acres',
    agent: {
      name: 'Sarah Mitchell',
      title: 'Senior Property Advisor',
      phone: '(555) 246-7890',
      email: 'sarah@horizonproperties.com',
      photo: img('1494790108377-be9c29b29330', 400),
    },
  },
  {
    id: '4',
    slug: 'downtown-loft-residence',
    title: 'Downtown Loft Residence',
    location: 'New York, New York, USA',
    city: 'New York',
    state: 'New York',
    country: 'USA',
    price: 1250000,
    priceLabel: '$1.25 Million',
    description:
      'A meticulously converted industrial loft in the vibrant downtown district. Exposed brick, soaring ceilings, and oversized windows create a dramatic canvas for modern living in the city that never sleeps.',
    images: [img(int[1]), img(int[13]), img(int[14]), img(int[15])],
    beds: 2,
    baths: 2,
    sqft: 2100,
    type: 'apartment',
    status: 'for-sale',
    featured: false,
    amenities: ['Exposed Brick', 'High Ceilings', 'Doorman', 'Roof Deck', 'Gym', 'Storage', 'Bike Room'],
    yearBuilt: 2018,
    garage: 0,
    lotSize: 'N/A',
    agent: {
      name: 'James Carter',
      title: 'Luxury Property Specialist',
      phone: '(555) 246-7891',
      email: 'james@horizonproperties.com',
      photo: img('1535713875002-d1d0cf377fde', 400),
    },
  },
  {
    id: '5',
    slug: 'garden-townhouse',
    title: 'Garden Townhouse',
    location: 'Portland, Oregon, USA',
    city: 'Portland',
    state: 'Oregon',
    country: 'USA',
    price: 895000,
    priceLabel: '$895,000',
    description:
      'A charming three-story townhouse with a private garden, blending classic craftsmanship with modern updates. Perfectly situated in one of Portland\u2019s most walkable neighborhoods.',
    images: [img(ext[7]), img(int[16]), img(int[3]), img(ext[10])],
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: 'townhouse',
    status: 'for-sale',
    featured: false,
    amenities: ['Private Garden', 'Hardwood Floors', 'Fireplace', 'Roof Deck', 'Garage', 'Solar Panels'],
    yearBuilt: 2017,
    garage: 1,
    lotSize: '0.15 acres',
    agent: {
      name: 'Emily Roberts',
      title: 'Property Advisor',
      phone: '(555) 246-7892',
      email: 'emily@horizonproperties.com',
      photo: img('1438761681033-6461ffad8d80', 400),
    },
  },
  {
    id: '6',
    slug: 'modern-desert-retreat',
    title: 'Modern Desert Retreat',
    location: 'Scottsdale, Arizona, USA',
    city: 'Scottsdale',
    state: 'Arizona',
    country: 'USA',
    price: 1675000,
    priceLabel: '$1.675 Million',
    description:
      'A striking desert-modern home with clean lines, walls of glass, and a courtyard pool. Designed to embrace the surrounding landscape while providing a cool, luxurious sanctuary.',
    images: [img(ext[1]), img(int[2]), img(int[5]), img(ext[8])],
    beds: 4,
    baths: 4,
    sqft: 4200,
    type: 'house',
    status: 'for-sale',
    featured: true,
    amenities: ['Courtyard Pool', 'Mountain Views', 'Outdoor Fireplace', 'Chef\u2019s Kitchen', 'Casita', 'Smart Home System', 'EV Charging'],
    yearBuilt: 2022,
    garage: 2,
    lotSize: '1.0 acres',
    agent: {
      name: 'Emily Roberts',
      title: 'Property Advisor',
      phone: '(555) 246-7892',
      email: 'emily@horizonproperties.com',
      photo: img('1438761681033-6461ffad8d80', 400),
    },
  },
  {
    id: '7',
    slug: 'coastal-glass-house',
    title: 'Coastal Glass House',
    location: 'Malibu, California, USA',
    city: 'Malibu',
    state: 'California',
    country: 'USA',
    price: 4100000,
    priceLabel: '$4.10 Million',
    description:
      'Directly on the sand, this architectural glass house captures unobstructed ocean views from every room. Walls of glass open to a sprawling deck, creating the ultimate indoor-outdoor beachfront lifestyle.',
    images: [img(ext[5]), img(int[7]), img(ext[9]), img(int[0])],
    beds: 5,
    baths: 5,
    sqft: 5100,
    type: 'house',
    status: 'for-sale',
    featured: false,
    amenities: ['Beachfront', 'Ocean Views', 'Infinity Pool', 'Outdoor Kitchen', 'Wine Cellar', 'Smart Home System', 'Private Path to Beach'],
    yearBuilt: 2020,
    garage: 2,
    lotSize: '0.5 acres',
    agent: {
      name: 'James Carter',
      title: 'Luxury Property Specialist',
      phone: '(555) 246-7891',
      email: 'james@horizonproperties.com',
      photo: img('1535713875002-d1d0cf377fde', 400),
    },
  },
  {
    id: '8',
    slug: 'urban-smart-home',
    title: 'Urban Smart Home',
    location: 'Seattle, Washington, USA',
    city: 'Seattle',
    state: 'Washington',
    country: 'USA',
    price: 1150000,
    priceLabel: '$1.15 Million',
    description:
      'A tech-forward modern home in the heart of Seattle. Every system is integrated and voice-controlled, from lighting and climate to security and entertainment, all wrapped in a sleek architectural design.',
    images: [img(ext[11]), img(int[4]), img(int[6]), img(int[9])],
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: 'house',
    status: 'for-sale',
    featured: false,
    amenities: ['Smart Home System', 'EV Charging', 'Solar Panels', 'Rooftop Deck', 'City Views', 'Gym Room'],
    yearBuilt: 2023,
    garage: 2,
    lotSize: '0.2 acres',
    agent: {
      name: 'Sarah Mitchell',
      title: 'Senior Property Advisor',
      phone: '(555) 246-7890',
      email: 'sarah@horizonproperties.com',
      photo: img('1494790108377-be9c29b29330', 400),
    },
  },
  {
    id: '9',
    slug: 'highland-park-villa',
    title: 'Highland Park Villa',
    location: 'Dallas, Texas, USA',
    city: 'Dallas',
    state: 'Texas',
    country: 'USA',
    price: 2950000,
    priceLabel: '$2.95 Million',
    description:
      'A timeless Mediterranean-inspired villa in the prestigious Highland Park neighborhood. Featuring grand interiors, a resort-style backyard, and impeccable landscaping on a rare oversized lot.',
    images: [img(ext[2]), img(int[10]), img(int[11]), img(ext[6])],
    beds: 6,
    baths: 6,
    sqft: 7200,
    type: 'villa',
    status: 'for-sale',
    featured: false,
    amenities: ['Resort Pool', 'Guest House', 'Wine Cellar', 'Gardens', '3-Car Garage', 'Home Theater', 'Outdoor Kitchen'],
    yearBuilt: 2018,
    garage: 3,
    lotSize: '0.8 acres',
    agent: {
      name: 'Emily Roberts',
      title: 'Property Advisor',
      phone: '(555) 246-7892',
      email: 'emily@horizonproperties.com',
      photo: img('1438761681033-6461ffad8d80', 400),
    },
  },
  {
    id: '10',
    slug: 'skyline-corner-condo',
    title: 'Skyline Corner Condo',
    location: 'Chicago, Illinois, USA',
    city: 'Chicago',
    state: 'Illinois',
    country: 'USA',
    price: 750000,
    priceLabel: '$750,000',
    description:
      'A bright corner-unit condominium with sweeping skyline and lake views. Recently renovated with premium finishes, an open kitchen, and a generous private balcony perfect for city living.',
    images: [img(int[8]), img(int[12]), img(int[14]), img(int[15])],
    beds: 2,
    baths: 2,
    sqft: 1800,
    type: 'apartment',
    status: 'for-rent',
    featured: false,
    amenities: ['Lake Views', 'Balcony', 'Doorman', 'Gym', 'Pool', 'Parking', 'Storage'],
    yearBuilt: 2016,
    garage: 1,
    lotSize: 'N/A',
    agent: {
      name: 'James Carter',
      title: 'Luxury Property Specialist',
      phone: '(555) 246-7891',
      email: 'james@horizonproperties.com',
      photo: img('1535713875002-d1d0cf377fde', 400),
    },
  },
]

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug)
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured)
}

export function getRelatedProperties(currentId: string, limit = 3): Property[] {
  return properties.filter((p) => p.id !== currentId).slice(0, limit)
}
