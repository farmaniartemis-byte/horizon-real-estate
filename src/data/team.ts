import type { TeamMember } from '../types'

const portrait = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=600&q=80&auto=format&fit=crop`

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Founder & Senior Advisor',
    photo: portrait('1494790108377-be9c29b29330'),
    bio: 'With over 18 years in luxury real estate, Sarah founded Horizon Properties on a simple principle: integrity and personalized service above all.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@horizonproperties.com',
    },
  },
  {
    id: '2',
    name: 'James Carter',
    role: 'Luxury Property Specialist',
    photo: portrait('1535713875002-d1d0cf377fde'),
    bio: 'James specializes in high-end urban properties and penthouses, bringing a data-driven approach to matching clients with their ideal home.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'james@horizonproperties.com',
    },
  },
  {
    id: '3',
    name: 'Emily Roberts',
    role: 'Property Advisor',
    photo: portrait('1438761681033-6461ffad8d80'),
    bio: 'Emily\u2019s deep knowledge of residential markets and her warm, client-first approach have made her one of the most trusted advisors in the region.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'emily@horizonproperties.com',
    },
  },
  {
    id: '4',
    name: 'Michael Chen',
    role: 'Investment Strategist',
    photo: portrait('1507003211169-0a1dd7228f2d'),
    bio: 'Michael helps clients build and diversify real estate portfolios, combining market analytics with a long-term investment perspective.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'michael@horizonproperties.com',
    },
  },
]
