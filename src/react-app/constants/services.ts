export interface DumpsterSize {
  size: string;
  yards: number;
  dimensions: string;
  capacity: string;
  idealFor: string[];
  description: string;
  image?: string;
}

export const DUMPSTER_SIZES: DumpsterSize[] = [
  {
    size: '10 Yard',
    yards: 10,
    dimensions: '14\' L × 8\' W × 3\' H',
    capacity: 'Perfect for small residential projects and cleanouts',
    idealFor: [
      'Small bathroom renovations',
      'Garage cleanouts',
      'Minor landscaping projects',
      'Small deck removal',
    ],
    description: 'Perfect for small residential projects and cleanouts',
    image: '/images/residential-dumpsters.jpg',
  },
  {
    size: '15 Yard',
    yards: 15,
    dimensions: '18\' L × 8\' W × 3.5\' H',
    capacity: 'Great for medium residential projects',
    idealFor: [
      'Roof replacements',
      'Deck demolition',
      'Small remodeling projects',
      'Yard waste removal',
    ],
    description: 'Great for medium residential projects',
    image: '/images/residential-dumpsters.jpg',
  },
  {
    size: '20 Yard',
    yards: 20,
    dimensions: '22\' L × 8\' W × 4\' H',
    capacity: 'Most popular size for home renovation projects',
    idealFor: [
      'Kitchen or bathroom remodels',
      'Carpet or flooring removal',
      'Medium-sized deck removal',
      'Garage or basement cleanouts',
    ],
    description: 'Most popular size for home renovation projects',
    image: '/images/site-clean-up-dumpster.jpg',
  },
  {
    size: '25 Yard',
    yards: 25,
    dimensions: '22\' L × 8\' W × 5\' H',
    capacity: 'Ideal for major renovation and construction projects',
    idealFor: [
      'Full bathroom renovations',
      'Kitchen remodels',
      'Large landscaping projects',
      'Whole room demolition',
    ],
    description: 'Ideal for major renovation and construction projects',
    image: '/images/construction-dumpsters-pickup.jpg',
  },
  {
    size: '30 Yard',
    yards: 30,
    dimensions: '22\' L × 8\' W × 6\' H',
    capacity: 'Ideal for large-scale residential and commercial projects',
    idealFor: [
      'Major home additions',
      'New construction projects',
      'Large home cleanouts',
      'Commercial renovations',
    ],
    description: 'Ideal for large-scale residential and commercial projects',
    image: '/images/construction-dumpsters-pickup.jpg',
  },
  {
    size: '40 Yard',
    yards: 40,
    dimensions: '22\' L × 8\' W × 8\' H',
    capacity: 'Our largest option for the biggest projects',
    idealFor: [
      'Large commercial projects',
      'Complete home demolitions',
      'Major construction sites',
      'Large-scale cleanouts',
    ],
    description: 'Our largest option for the biggest projects',
    image: '/images/ROll-OFF.png',
  },
];

export interface DemolitionService {
  title: string;
  description: string;
  features: string[];
}

export const DEMOLITION_SERVICES: DemolitionService[] = [
  {
    title: 'Residential Demolition',
    description: 'Complete or partial demolition services for homes and residential structures',
    features: [
      'Interior demolition (walls, fixtures, flooring)',
      'Full structure demolition',
      'Garage and shed removal',
      'Deck and fence removal',
      'Safe asbestos and hazmat handling',
    ],
  },
  {
    title: 'Commercial Demolition',
    description: 'Professional demolition services for commercial properties and buildings',
    features: [
      'Retail space demolition',
      'Office building demolition',
      'Warehouse demolition',
      'Site clearing and grading',
      'Recycling and waste management',
    ],
  },
  {
    title: 'Concrete & Asphalt Removal',
    description: 'Specialized removal services for concrete and asphalt surfaces',
    features: [
      'Driveway removal',
      'Parking lot demolition',
      'Foundation removal',
      'Sidewalk and patio removal',
      'Concrete recycling',
    ],
  },
];
