import type { TeamMember } from '../types'

const portrait = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=600&q=80&auto=format&fit=crop`

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Daniel Morgan',
    role: 'Managing Director',
    photo: portrait('1507003211169-0a1dd7228f2d'),
    bio: 'With over 18 years in luxury real estate, Daniel founded Horizon Properties on a simple principle: integrity and personalized service above all.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'daniel@horizonproperties.com',
    },
  },
  {
    id: '2',
    name: 'Olivia Carter',
    role: 'Luxury Property Advisor',
    photo: portrait('1494790108377-be9c29b29330'),
    bio: 'Olivia specializes in high-end residential properties, bringing a refined eye for architecture and a client-first approach to every transaction.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'olivia@horizonproperties.com',
    },
  },
  {
    id: '3',
    name: 'James Wilson',
    role: 'Investment Consultant',
    photo: portrait('1535713875002-d1d0cf377fde'),
    bio: 'James helps clients build and diversify real estate portfolios, combining market analytics with a long-term investment perspective.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'james@horizonproperties.com',
    },
  },
  {
    id: '4',
    name: 'Sophia Bennett',
    role: 'Senior Property Specialist',
    photo: portrait('1438761681033-6461ffad8d80'),
    bio: 'Sophia\u2019s deep knowledge of residential markets and her warm, client-first approach have made her one of the most trusted advisors in the region.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sophia@horizonproperties.com',
    },
  },
]
