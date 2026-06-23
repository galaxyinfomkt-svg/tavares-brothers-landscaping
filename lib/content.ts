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
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] };

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO date
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  content: PostBlock[];
};

// Practical landscaping advice for Massachusetts homeowners.
export const posts: Post[] = [
  {
    slug: 'spring-cleanup-checklist-massachusetts-lawns',
    title: 'Spring Cleanup Checklist for Massachusetts Lawns',
    category: 'Seasonal',
    date: '2026-04-08',
    readTime: '6 min read',
    excerpt:
      'After a long New England winter, your yard needs more than a quick rake. Here is the exact checklist our crews use to wake up a lawn in Hudson, Sudbury, and Marlborough.',
    image: wp('gl22646323800308'),
    imageAlt: 'spring-cleanup-striped-green-lawn-hudson-massachusetts-tavares',
    content: [
      {
        type: 'p',
        text: 'Spring in Massachusetts is unforgiving on a lawn. Snow mold, matted leaves, broken branches, and compacted soil all show up at once the moment the snow melts. A proper spring cleanup is the single biggest thing you can do to set your property up for a healthy, green season.',
      },
      {
        type: 'p',
        text: 'Here is the checklist our crews work through on every spring cleanup in the Hudson area — in the order we actually do it.',
      },
      { type: 'h2', text: '1. Clear winter debris first' },
      {
        type: 'p',
        text: 'Before anything else, we remove the leaves, sticks, and storm debris that piled up over winter. Leaving matted leaves on the grass blocks sunlight and traps moisture, which is exactly what snow mold and lawn disease need to spread.',
      },
      { type: 'h2', text: '2. Dethatch and gently rake' },
      {
        type: 'p',
        text: 'A light dethatching rake lifts the dead grass layer that suffocates new growth. The goal is to open the lawn up so air, water, and fertilizer can reach the soil — not to tear the turf apart.',
      },
      { type: 'h2', text: '3. Clean up the beds and edges' },
      {
        type: 'ul',
        items: [
          'Cut back perennials and ornamental grasses left standing over winter',
          'Pull early weeds before they seed',
          'Re-cut crisp edges between lawn and beds',
          'Refresh mulch to 2–3 inches to lock in moisture',
        ],
      },
      { type: 'h2', text: '4. Feed and overseed thin spots' },
      {
        type: 'p',
        text: 'Early spring is the right window to apply a balanced fertilizer and overseed the thin or bare patches that winter created. Seed needs soil contact and consistent moisture, so this step always comes after the lawn has been cleared and raked.',
      },
      { type: 'h2', text: 'Want it done right the first time?' },
      {
        type: 'p',
        text: 'A spring cleanup is physical, time-consuming work — and the order matters. Tavares Brothers has been waking up lawns across Hudson, Sudbury, and Marlborough since 1994. Call us for a free estimate and we will get your property ready for the season.',
      },
    ],
  },
  {
    slug: 'how-often-mow-lawn-new-england',
    title: 'How Often Should You Mow Your Lawn in New England?',
    category: 'Lawn Care',
    date: '2026-05-20',
    readTime: '5 min read',
    excerpt:
      'Mowing on a calendar instead of by the grass is one of the most common lawn mistakes we see. Here is how often to actually mow through a Massachusetts season.',
    image:
      'https://images.pexels.com/photos/12087398/pexels-photo-12087398.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'mowing-green-lawn-mower-stripes-hudson-massachusetts',
    content: [
      {
        type: 'p',
        text: 'Most homeowners mow on a fixed schedule — every Saturday, rain or shine. But grass does not grow on a calendar. It grows based on temperature, rain, and the time of year, and in New England that changes a lot from April to October.',
      },
      { type: 'h2', text: 'The one-third rule' },
      {
        type: 'p',
        text: 'Never cut more than one-third of the grass blade in a single mow. Removing more shocks the plant, weakens the roots, and invites weeds and drought stress. If the grass got long, bring it down over two mows a few days apart instead of scalping it once.',
      },
      { type: 'h2', text: 'How often, season by season' },
      {
        type: 'ul',
        items: [
          'Spring (peak growth): every 5–7 days',
          'Early summer: about every 7 days',
          'Mid-summer heat / drought: every 10–14 days, or pause if dormant',
          'Fall: back to every 7–10 days as growth picks up again',
        ],
      },
      { type: 'h2', text: 'Mowing height matters more than frequency' },
      {
        type: 'p',
        text: 'For most New England lawns, keep the mower at 3 to 3.5 inches. Taller grass shades the soil, holds moisture, and chokes out crabgrass. Cutting too short is the fastest way to a brown, weedy lawn by July.',
      },
      { type: 'h2', text: 'Let us keep it on schedule' },
      {
        type: 'p',
        text: 'Our weekly and bi-weekly maintenance crews mow by the grass, not the calendar — adjusting height and timing as the season changes. Reach out for a free estimate on a maintenance program that fits your property.',
      },
    ],
  },
  {
    slug: 'best-time-plant-flowers-hudson-ma',
    title: 'The Best Time to Plant Flowers in Hudson, MA',
    category: 'Gardening',
    date: '2026-05-02',
    readTime: '5 min read',
    excerpt:
      'Plant too early and a late frost wipes out your annuals. Here is how we time flower and garden installations in the Hudson, MA climate.',
    image: wp('gl21513931495567'),
    imageAlt: 'planting-flowers-garden-bed-worker-hudson-massachusetts-tavares',
    content: [
      {
        type: 'p',
        text: 'Hudson sits in USDA hardiness zone 6a, which means our last spring frost typically lands in late April to mid-May. That single date drives almost every planting decision in the garden.',
      },
      { type: 'h2', text: 'Annuals: wait for the frost to pass' },
      {
        type: 'p',
        text: 'Tender annuals like impatiens, petunias, and begonias have no frost tolerance. Plant them after mid-May once nighttime temperatures stay reliably above 50°F. Planting earlier just to get color is a gamble that a single cold night can erase.',
      },
      { type: 'h2', text: 'Perennials and shrubs: spring or fall' },
      {
        type: 'p',
        text: 'Perennials, trees, and shrubs are best planted in spring or early fall, when cooler temperatures and steady moisture let roots establish without heat stress. Avoid planting them in the peak of summer if you can.',
      },
      { type: 'h2', text: 'Quick timing guide' },
      {
        type: 'ul',
        items: [
          'Cool-season pansies & violas: April',
          'Perennials, shrubs, trees: late April–May or September',
          'Tender annuals: after mid-May',
          'Fall mums: September for late-season color',
        ],
      },
      { type: 'h2', text: 'Beautiful beds, perfectly timed' },
      {
        type: 'p',
        text: 'We design, plant, and maintain flower beds that bloom all season — with the right plants chosen for your soil, light, and style. Get in touch for a free estimate on a garden refresh.',
      },
    ],
  },
  {
    slug: 'mulch-101-how-much-what-type-when',
    title: 'Mulch 101: How Much, What Type, and When to Apply',
    category: 'Tips',
    date: '2026-04-22',
    readTime: '6 min read',
    excerpt:
      'Mulch does far more than look tidy. Get the depth and timing wrong, though, and you can smother the plants you are trying to protect.',
    image: wp('gl22386899572163'),
    imageAlt: 'fresh-mulch-bed-edging-around-tree-hudson-massachusetts-tavares',
    content: [
      {
        type: 'p',
        text: 'Mulch is one of the most cost-effective things you can do for a landscape. Done right, it locks in moisture, suppresses weeds, regulates soil temperature, and gives beds a clean, finished look. Done wrong, it can rot stems and starve roots of oxygen.',
      },
      { type: 'h2', text: 'How much mulch is enough?' },
      {
        type: 'p',
        text: 'Aim for 2 to 3 inches of mulch. Less than that and weeds push through; more than that and water struggles to reach the soil. Each spring you usually only need to top off the existing layer back to that depth — not bury it under a fresh full load every year.',
      },
      { type: 'h2', text: 'Avoid the "mulch volcano"' },
      {
        type: 'p',
        text: 'Never pile mulch up against tree trunks or plant stems. Those cone-shaped "volcanoes" trap moisture against the bark, invite rot and pests, and slowly kill the tree. Pull mulch back a few inches from the base so the trunk can breathe.',
      },
      { type: 'h2', text: 'What type should you use?' },
      {
        type: 'ul',
        items: [
          'Shredded hardwood: classic, knits together, great for slopes',
          'Bark mulch: longer-lasting, slower to break down',
          'Pine straw: light and acidic, good around evergreens',
          'Avoid dyed mulch near vegetable and edible beds',
        ],
      },
      { type: 'h2', text: 'When to mulch' },
      {
        type: 'p',
        text: 'Mid-to-late spring is ideal — after the soil has warmed and you have cleaned up the beds, but before summer weeds take hold. A second light refresh in fall can protect roots through winter.',
      },
      { type: 'h2', text: 'Leave the heavy lifting to us' },
      {
        type: 'p',
        text: 'We deliver and install quality mulch with crisp, hand-cut edges across the Hudson area every spring. Contact us for a free estimate on your beds.',
      },
    ],
  },
  {
    slug: 'why-lawn-turns-brown-summer',
    title: 'Why Your Lawn Turns Brown in Summer (and How to Fix It)',
    category: 'Lawn Care',
    date: '2026-06-12',
    readTime: '6 min read',
    excerpt:
      'A brown lawn in July is not always dead. Knowing the difference between dormancy, drought, and disease tells you whether to water, wait, or call for help.',
    image: wp('gl22263179419913'),
    imageAlt: 'green-and-brown-summer-lawn-shrubs-sudbury-massachusetts-tavares',
    content: [
      {
        type: 'p',
        text: 'Every summer we get the same call: "My whole lawn went brown — is it dead?" Usually the answer is no. Cool-season grasses like the fescues and bluegrass common in Massachusetts naturally go dormant in heat. But brown can also mean a real problem, so it pays to know the difference.',
      },
      { type: 'h2', text: 'Dormancy vs. dead' },
      {
        type: 'p',
        text: 'Dormant grass browns evenly across the lawn and bounces back when cooler, wetter weather returns. Dead grass shows up in irregular patches that do not recover. A simple test: tug a handful of brown grass. If it resists, the crown is alive and dormant. If it pulls out easily, that area is gone.',
      },
      { type: 'h2', text: 'Common causes of summer browning' },
      {
        type: 'ul',
        items: [
          'Heat dormancy — normal, and recovers on its own',
          'Drought stress — needs deep, infrequent watering',
          'Cutting too short — scalped grass burns fast',
          'Grubs — turf lifts like a loose carpet',
          'Fungal disease — spreads in circles or patches',
        ],
      },
      { type: 'h2', text: 'How to water through a heat wave' },
      {
        type: 'p',
        text: 'If you choose to keep the lawn green, water deeply once or twice a week in the early morning — about an inch total. Light daily sprinkles encourage shallow roots and make things worse. If you would rather let it go dormant, just keep foot traffic off it and it will green up later.',
      },
      { type: 'h2', text: 'Not sure what you are looking at?' },
      {
        type: 'p',
        text: 'Grubs and disease need to be caught early. If your brown patches are spreading or the turf is lifting, give us a call — we will diagnose it and put a recovery plan in place.',
      },
    ],
  },
  {
    slug: 'fall-lawn-care-massachusetts-winter',
    title: 'Fall Lawn Care: Preparing Your Yard for a Massachusetts Winter',
    category: 'Seasonal',
    date: '2026-09-30',
    readTime: '5 min read',
    excerpt:
      'What you do in October decides how your lawn looks next May. Fall is the most important — and most overlooked — season for New England lawns.',
    image: wp('gl21690601591927'),
    imageAlt: 'fall-leaf-cleanup-flower-bed-marlborough-massachusetts-tavares',
    content: [
      {
        type: 'p',
        text: 'Most people stop thinking about their lawn after Labor Day. But in New England, fall is when the real work happens. Cool nights and warm soil make autumn the best time to repair summer damage and build the strong roots that survive a Massachusetts winter.',
      },
      { type: 'h2', text: 'Keep mowing — then lower it at the end' },
      {
        type: 'p',
        text: 'Keep mowing as long as the grass is growing. For the final cut of the season, drop the height slightly to about 2.5 inches. Long grass left over winter mats down and becomes a breeding ground for snow mold.',
      },
      { type: 'h2', text: 'Do not let the leaves sit' },
      {
        type: 'p',
        text: 'A thick blanket of wet leaves blocks light and suffocates the lawn over winter. Stay on top of leaf cleanup through the fall rather than waiting for one massive pile in November.',
      },
      { type: 'h2', text: 'Your fall checklist' },
      {
        type: 'ul',
        items: [
          'Aerate compacted soil to relieve a summer of foot traffic',
          'Overseed thin areas while the soil is still warm',
          'Apply a fall fertilizer to feed the roots',
          'Keep up with leaf cleanup, not one final dump',
          'Cut back perennials and protect tender plantings',
        ],
      },
      { type: 'h2', text: 'Set next spring up now' },
      {
        type: 'p',
        text: 'A strong fall program is the difference between a patchy lawn and a lush one next May. Our crews handle aeration, overseeding, fertilizing, and full fall cleanups across Hudson, Sudbury, and Marlborough. Call for a free estimate before the season closes.',
      },
    ],
  },
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
