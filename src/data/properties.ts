import type { Property } from '../types'

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

// Validated Unsplash photo IDs — luxury architecture
const ext = [
  '1613490493576-7fde63acd811', // modern villa at dusk
  '1512917774080-9991f1c4c750', // building near pool
  '1613977257592-4871e5fcd7c4', // villa with pool
  '1505843513577-22bb7d21e455', // concrete house
  '1518780664697-55e3ad937233', // architecture
  '1582268611958-ebfd161ef9cf', // modern white house
  '1706808849780-7a04fbac83ef', // house with pool
  '1679364297777-1db77b6199be', // house with car
  '1685514823717-7e1ff6ee0563', // house with trees
  '1723110994499-df46435aa4b3', // house with car
  '1591474200742-8e512e6f98f8', // wooden house
  '1580587771525-78b9dba3b914', // concrete building
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

const portrait = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=400&q=80&auto=format&fit=crop`

const agents = {
  daniel: {
    name: 'Daniel Morgan',
    title: 'Managing Director',
    phone: '(555) 246-7890',
    email: 'daniel@horizonproperties.com',
    photo: portrait('1507003211169-0a1dd7228f2d'),
  },
  olivia: {
    name: 'Olivia Carter',
    title: 'Luxury Property Advisor',
    phone: '(555) 246-7891',
    email: 'olivia@horizonproperties.com',
    photo: portrait('1494790108377-be9c29b29330'),
  },
  james: {
    name: 'James Wilson',
    title: 'Investment Consultant',
    phone: '(555) 246-7892',
    email: 'james@horizonproperties.com',
    photo: portrait('1535713875002-d1d0cf377fde'),
  },
  sophia: {
    name: 'Sophia Bennett',
    title: 'Senior Property Specialist',
    phone: '(555) 246-7893',
    email: 'sophia@horizonproperties.com',
    photo: portrait('1438761681033-6461ffad8d80'),
  },
}

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
    images: [img(ext[0]), img(int[0]), img(int[2]), img(int[7]), img(ext[2])],
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
    agent: agents.olivia,
  },
  {
    id: '2',
    slug: 'pacific-glass-house',
    title: 'Pacific Glass House',
    location: 'Malibu, California, USA',
    city: 'Malibu',
    state: 'California',
    country: 'USA',
    price: 4800000,
    priceLabel: '$4.8 Million',
    description:
      'Directly on the sand, this architectural glass house captures unobstructed ocean views from every room. Walls of glass open to a sprawling deck, creating the ultimate indoor-outdoor beachfront lifestyle.',
    images: [img(ext[1]), img(int[7]), img(ext[6]), img(int[0])],
    beds: 5,
    baths: 5,
    sqft: 5100,
    type: 'house',
    status: 'for-sale',
    featured: true,
    amenities: ['Beachfront', 'Ocean Views', 'Infinity Pool', 'Outdoor Kitchen', 'Wine Cellar', 'Smart Home System', 'Private Path to Beach'],
    yearBuilt: 2020,
    garage: 2,
    lotSize: '0.5 acres',
    agent: agents.daniel,
  },
  {
    id: '3',
    slug: 'desert-horizon-estate',
    title: 'Desert Horizon Estate',
    location: 'Scottsdale, Arizona, USA',
    city: 'Scottsdale',
    state: 'Arizona',
    country: 'USA',
    price: 3150000,
    priceLabel: '$3.15 Million',
    description:
      'A striking desert-modern home with clean lines, walls of glass, and a courtyard pool. Designed to embrace the surrounding landscape while providing a cool, luxurious sanctuary.',
    images: [img(ext[5]), img(int[2]), img(int[5]), img(ext[8])],
    beds: 4,
    baths: 4,
    sqft: 4200,
    type: 'villa',
    status: 'for-sale',
    featured: true,
    amenities: ['Courtyard Pool', 'Mountain Views', 'Outdoor Fireplace', 'Chef\u2019s Kitchen', 'Casita', 'Smart Home System', 'EV Charging'],
    yearBuilt: 2022,
    garage: 2,
    lotSize: '1.0 acres',
    agent: agents.sophia,
  },
  {
    id: '4',
    slug: 'oceanfront-residence',
    title: 'Oceanfront Residence',
    location: 'Miami, Florida, USA',
    city: 'Miami',
    state: 'Florida',
    country: 'USA',
    price: 5200000,
    priceLabel: '$5.2 Million',
    description:
      'An extraordinary waterfront estate with panoramic ocean views, resort-style grounds, and interiors by an award-winning designer. The pinnacle of Florida luxury living.',
    images: [img(ext[2]), img(int[0]), img(int[10]), img(ext[4])],
    beds: 6,
    baths: 7,
    sqft: 7800,
    type: 'villa',
    status: 'for-sale',
    featured: true,
    amenities: ['Ocean Views', 'Resort Pool', 'Home Theater', 'Wine Cellar', 'Gated Estate', 'Motor Court', 'Staff Quarters', 'Outdoor Kitchen'],
    yearBuilt: 2019,
    garage: 4,
    lotSize: '1.8 acres',
    agent: agents.daniel,
  },
  {
    id: '5',
    slug: 'modern-hillside-retreat',
    title: 'Modern Hillside Retreat',
    location: 'Los Angeles, California, USA',
    city: 'Los Angeles',
    state: 'California',
    country: 'USA',
    price: 3750000,
    priceLabel: '$3.75 Million',
    description:
      'A dramatic hillside home with soaring ceilings, walls of glass, and sweeping city views. The open-plan design and designer finishes create a perfect canvas for modern California living.',
    images: [img(ext[3]), img(int[8]), img(int[11]), img(ext[10])],
    beds: 4,
    baths: 4,
    sqft: 4500,
    type: 'house',
    status: 'for-sale',
    featured: true,
    amenities: ['City Views', 'Infinity Pool', 'Smart Home System', 'Chef\u2019s Kitchen', 'Home Theater', 'Solar Panels', 'EV Charging'],
    yearBuilt: 2021,
    garage: 2,
    lotSize: '0.6 acres',
    agent: agents.olivia,
  },
  {
    id: '6',
    slug: 'palm-garden-residence',
    title: 'Palm Garden Residence',
    location: 'Beverly Hills, California, USA',
    city: 'Beverly Hills',
    state: 'California',
    country: 'USA',
    price: 6400000,
    priceLabel: '$6.4 Million',
    description:
      'An extraordinary estate set on a private gated lot in the heart of Beverly Hills. Featuring resort-style grounds, a guesthouse, and interiors by an award-winning designer, this property is the pinnacle of California luxury living.',
    images: [img(ext[6]), img(int[9]), img(int[12]), img(ext[4])],
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
    agent: agents.daniel,
  },
  {
    id: '7',
    slug: 'contemporary-lake-house',
    title: 'Contemporary Lake House',
    location: 'Lake Tahoe, Nevada, USA',
    city: 'Lake Tahoe',
    state: 'Nevada',
    country: 'USA',
    price: 2950000,
    priceLabel: '$2.95 Million',
    description:
      'A stunning contemporary lake house with floor-to-ceiling windows framing the water, a private dock, and warm interiors that blend modern design with mountain charm.',
    images: [img(ext[8]), img(int[16]), img(int[3]), img(ext[11])],
    beds: 4,
    baths: 3,
    sqft: 3800,
    type: 'house',
    status: 'for-sale',
    featured: false,
    amenities: ['Lake Frontage', 'Private Dock', 'Fireplace', 'Hot Tub', 'Smart Home System', 'Solar Panels', 'Heated Driveway'],
    yearBuilt: 2020,
    garage: 2,
    lotSize: '0.8 acres',
    agent: agents.james,
  },
  {
    id: '8',
    slug: 'architectural-downtown-penthouse',
    title: 'Architectural Downtown Penthouse',
    location: 'Austin, Texas, USA',
    city: 'Austin',
    state: 'Texas',
    country: 'USA',
    price: 1850000,
    priceLabel: '$1.85 Million',
    description:
      'Perched atop the prestigious downtown tower, this glass-walled penthouse offers panoramic city and river views. The open-plan design, designer finishes, and private rooftop terrace define luxury urban living at its finest.',
    images: [img(int[7]), img(int[8]), img(int[9]), img(int[10])],
    beds: 3,
    baths: 3,
    sqft: 3400,
    type: 'penthouse',
    status: 'for-sale',
    featured: false,
    amenities: ['Private Rooftop Terrace', 'City Views', 'Concierge Service', 'Gym Access', 'Valet Parking', 'Smart Home System', 'Wine Storage'],
    yearBuilt: 2020,
    garage: 2,
    lotSize: 'N/A',
    agent: agents.james,
  },
  {
    id: '9',
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
    agent: agents.sophia,
  },
  {
    id: '10',
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
    images: [img(ext[4]), img(int[10]), img(int[11]), img(ext[6])],
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
    agent: agents.olivia,
  },
]

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug)
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured)
}

export function getRelatedProperties(currentId: string, limit = 3): Property[] {
  const current = properties.find((p) => p.id === currentId)
  if (!current) return properties.filter((p) => p.id !== currentId).slice(0, limit)
  const sameType = properties.filter((p) => p.id !== currentId && p.type === current.type)
  const others = properties.filter((p) => p.id !== currentId && p.type !== current.type)
  return [...sameType, ...others].slice(0, limit)
}
