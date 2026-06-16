import {
  Scissors,
  Flower2,
  Building2,
  Home,
  type LucideIcon,
} from 'lucide-react';

export const business = {
  name: 'Tavares Brothers Landscaping',
  owner: 'Andiara (Ariadna)',
  phone: '(978) 562-1048',
  phoneHref: 'tel:+19785621048',
  email: 'info@tavareslandscape.com',
  address: '33 Woodrow St, Hudson, MA 01749',
  serving:
    'Serving Hudson, Sudbury, Marlborough & surrounding areas in Massachusetts',
  facebook: 'https://facebook.com/TavaresBtothersLandscape',
  logo: 'https://i0.wp.com/tavareslandscape.com/wp-content/uploads/2022/02/logo.png?fit=350%2C200&ssl=1',
  since: 1994,
};

export type Service = {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  /** CSS object-position for cropping the banner to show the subject. */
  imagePosition: string;
  tagline: string;
  intro: string[];
  features: string[];
};

// Real Tavares Brothers photos from their original site.
export const wp = (name: string, w = 1200, h = 900) =>
  `https://i0.wp.com/tavareslandscape.com/wp-content/uploads/2022/03/${name}.jpg?fit=${w}%2C${h}&ssl=1`;

export const services: Service[] = [
  {
    icon: Scissors,
    title: 'Lawn Maintenance',
    slug: 'lawn-maintenance',
    description:
      'Weekly and bi-weekly lawn care to keep your property looking pristine year-round.',
    image:
      'https://images.pexels.com/photos/12087398/pexels-photo-12087398.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imagePosition: 'center',
    imageAlt: 'lawn-maintenance-mowing-green-lawn-hudson-massachusetts-tavares',
    tagline: 'Weekly & bi-weekly lawn care that keeps your property pristine.',
    intro: [
      'A healthy, well-kept lawn is the foundation of a beautiful property. Our lawn maintenance program keeps your grass green, even, and thriving through every season in the Hudson, MA area.',
      'From precise mowing and trimming to edging and blowing, our crews show up reliably on a schedule that works for you — so your yard always looks its best without you lifting a finger.',
    ],
    features: [
      'Weekly or bi-weekly mowing schedules',
      'Precision trimming and string-line edging',
      'Walkway, driveway and patio blow-off',
      'Healthy mowing heights for stronger turf',
      'Fully insured, dependable crews',
    ],
  },
  {
    icon: Flower2,
    title: 'Gardening & Flowers',
    slug: 'gardening-flowers',
    description:
      'Beautiful garden design and seasonal flower installation to brighten your outdoor space.',
    image: wp('gl21513931495567'),
    imagePosition: 'center 42%',
    imageAlt: 'gardening-flowers-tavares-worker-planting-sudbury-marlborough-ma',
    tagline: 'Seasonal color and garden care that brightens your space.',
    intro: [
      'Few things transform a property like vibrant, healthy gardens. We design, plant, and maintain flower beds and gardens that bloom beautifully throughout the growing season.',
      'Whether you want seasonal color rotations, perennial beds, or a complete garden refresh, we choose the right plants for your soil, light, and style — and keep them looking incredible.',
    ],
    features: [
      'Seasonal annual & perennial planting',
      'Flower bed design and refreshes',
      'Weeding, deadheading and bed care',
      'Soil prep and plant health management',
      'Custom color schemes for your home',
    ],
  },
  {
    icon: Home,
    title: 'Residential Landscaping',
    slug: 'residential-landscaping',
    description:
      "Lawns, flowers, gardens, and trees — a stunning outdoor environment for your home.",
    image: wp('gl22386899572163'),
    imagePosition: 'center 50%',
    imageAlt: 'residential-landscaping-mulch-beds-brick-home-hudson-massachusetts-tavares',
    tagline: "Lawns, flowers, gardens and trees that transform your home.",
    intro: [
      'At Tavares Brothers Landscaping, we are driven by a deep passion for our work. We believe that lawns, flowers, gardens, and trees have the power to create a truly stunning outdoor environment.',
      'From a simple front-yard refresh to a full backyard transformation, we handle the design and the labor with the same care we’d give our own home.',
    ],
    features: [
      'Lawn, flower, garden and tree care',
      'Custom residential landscaping',
      'Curb-appeal and entryway upgrades',
      'Outdoor living and usable yard spaces',
      'Backed by 25+ years of experience',
    ],
  },
  {
    icon: Building2,
    title: 'Commercial Landscaping',
    slug: 'commercial-landscaping',
    description:
      'A highly developed, professional commercial landscaping team for your property.',
    image:
      'https://images.pexels.com/photos/32575068/pexels-photo-32575068.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imagePosition: 'center',
    imageAlt: 'commercial-landscaping-office-building-manicured-lawn-massachusetts',
    tagline: 'A professional commercial landscaping team you can rely on.',
    intro: [
      'Tavares Brothers Landscaping, based in Hudson, Massachusetts, has a highly developed and professional commercial landscaping team that keeps businesses, HOAs, and commercial properties looking sharp year-round.',
      'We build maintenance programs around your schedule and budget, with reliable crews and clear communication — Ariadna answers every call and request without hesitation.',
    ],
    features: [
      'Scheduled grounds maintenance',
      'HOA and multi-property programs',
      'Seasonal color and bed maintenance',
      'Reliable, professional crews',
      'Single point of contact, fast response',
    ],
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
};

// Real Tavares Brothers project photos from their original gallery.
export const gallery: GalleryImage[] = [
  {
    src: wp('gl22646323800308'),
    alt: 'lawn-mowing-striped-lawn-hudson-massachusetts-tavares',
  },
  {
    src: wp('gl22140658868534'),
    alt: 'residential-front-yard-landscaping-hudson-ma-tavares',
  },
  {
    src: wp('gl21781636192214'),
    alt: 'tavares-brothers-crew-planting-garden-bed-hudson-ma',
  },
  {
    src: wp('gl22386899572163'),
    alt: 'mulch-bed-edging-around-tree-landscaping-hudson-ma',
  },
  {
    src: wp('gl21690601591927'),
    alt: 'worker-mulching-flower-bed-marlborough-ma-tavares',
  },
  {
    src: wp('gl22263179419913'),
    alt: 'boulder-mulch-bed-shrubs-manicured-lawn-sudbury-ma',
  },
  {
    src: wp('gl21518565973745'),
    alt: 'tavares-crew-landscaping-residential-property-hudson-ma',
  },
  {
    src: wp('gl22239750167298'),
    alt: 'mulched-spruce-shrub-bed-landscaping-hudson-ma-tavares',
  },
  {
    src: wp('gl21513931495567'),
    alt: 'worker-mulching-spruce-with-flowers-hudson-ma-tavares',
  },
  {
    src: wp('gl21343666269451'),
    alt: 'pink-flower-rock-garden-detail-marlborough-ma-tavares',
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
};

// Real customer reviews from tavareslandscape.com/reviews
export const testimonials: Testimonial[] = [
  {
    quote:
      "Denis and his team finished the job quickly and beautifully. They are always punctual, and I'm impressed by Denis' attention to detail. Thanks to the Tavares Brothers, my property looks better than ever. Best landscaping company by far.",
    author: 'Alexandre Banos',
  },
  {
    quote:
      "I've recently moved to Hudson and from the very first day Tavares Brothers has owned my yard! Not a week goes by that the yard isn't well kept, clean and always looks the best in the neighborhood. Denis takes pride in his work, and his team is always on time and caring.",
    author: 'Mark',
  },
  {
    quote:
      "Tavares Brothers have been servicing our business site for a few years now, and they have provided us unparalleled services and are very responsive to our property's needs. Their prices are beyond fair, and Ariadna answers all calls and requests without hesitation.",
    author: 'Dan',
    role: 'Local Business',
  },
  {
    quote:
      "Tavares Landscape was so easy to work with. Quick quoting process, easy to schedule with, and the results look like a perfectly manicured golf course. Couldn't be happier with the results!",
    author: 'Lee',
  },
  {
    quote:
      'Dennis has provided services for us for 18 years. He is reliable and excellent. He has mowed our lawn but has also done great clean-up services each Spring. He and his team are great — we highly recommend him!',
    author: 'Carolyn Howe',
  },
  {
    quote:
      'Best lawn in my neighborhood. Dependable, immaculate workmanship, attention to detail, respectful and professional employees!',
    author: 'Lizett Frias',
  },
  {
    quote:
      'Dinis has been doing my landscaping for the last year. This spring he did a fantastic job edging and expanding our mulch beds. He and the crew are professional and reliable. I highly recommend him.',
    author: 'Anthony',
  },
  {
    quote:
      'I have been dealing with Tavares Brothers for 10 years and every year we try to do a project and every year it looks better and better. When visitors come they ask who maintains your property. We have given out their name to many.',
    author: 'Douglas',
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: 'What areas do you serve?',
    answer:
      'Hudson, Sudbury, Marlborough, and surrounding towns in Middlesex County, MA.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes! Free, no-obligation estimates for all residential and commercial projects.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Fully licensed and insured for your complete peace of mind.',
  },
  {
    question: 'How long have you been in business?',
    answer:
      'Since 1994 — over 25 years of trusted landscaping service in the Hudson area.',
  },
  {
    question: 'Do you offer commercial landscaping?',
    answer:
      'Yes, we have a dedicated commercial team serving businesses and HOAs across Massachusetts.',
  },
  {
    question: 'Do you handle both lawn maintenance and gardening?',
    answer:
      'Yes — we offer lawn maintenance, gardening & flowers, and full residential and commercial landscaping. Tell us what you need and we’ll take care of it.',
  },
];

export const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/#contact' },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Free Consultation',
    description:
      'Call us or fill out the form and tell us about your property and goals. We listen first.',
  },
  {
    number: '02',
    title: 'Detailed Estimate',
    description:
      'We visit your property, assess the work, and provide a clear, no-obligation written estimate.',
  },
  {
    number: '03',
    title: 'Expert Service',
    description:
      'Our licensed, insured team gets to work with premium materials and meticulous craftsmanship.',
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description:
      'We review every detail together to make sure your outdoor space exceeds expectations.',
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: '25+', label: 'Years of Experience' },
  { value: '5.0', label: 'Star Average Rating' },
  { value: '100%', label: 'Licensed & Insured' },
  { value: '3', label: 'Towns Served & Growing' },
];
