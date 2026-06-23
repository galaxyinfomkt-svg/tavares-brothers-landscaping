import { wp, business } from './content';

/**
 * Programmatic-SEO data + helpers for Tavares Brothers Landscaping.
 *
 * Powers: /[city] (city hubs), /[city]/[service] (city × service combos),
 * /services/[slug] (service hubs) and the sitemap.
 *
 * Anti-duplicate-content strategy:
 *  - Each service has hand-written, distinct copy (painPoints, benefits, faqs…).
 *  - Each city has a real region with its own climate + landscape character text.
 *  - `getNearbyCities` injects real neighbouring towns per page.
 *  - `pick()` selects sentence/structure VARIANTS seeded by city+service, so no
 *    two combo pages read identically.
 *  - `pickImage()` rotates a per-service photo pool by city, so the same service
 *    shows a different hero photo from town to town.
 */

export const STATE = 'Massachusetts';
export const STATE_ABBR = 'MA';
export const PHONE_DISPLAY = business.phone;
export const PHONE_HREF = business.phoneHref;

/* ------------------------------------------------------------------ */
/* Seeded helpers — deterministic so SSG output is stable across builds */
/* ------------------------------------------------------------------ */

export function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Deterministically pick one item from `arr`, seeded by `seed`. */
export function pick<T>(arr: T[], seed: string): T {
  return arr[hashString(seed) % arr.length];
}

/* ------------------------------------------------------------------ */
/* Regions — climate + landscape character injected into page copy     */
/* ------------------------------------------------------------------ */

export type Region = {
  climate: string;
  landscape: string;
};

export const REGIONS: Record<string, Region> = {
  MetroWest: {
    climate:
      'hot, humid summers and cold, snowy winters with dramatic freeze-thaw swings',
    landscape:
      'a mix of established suburban lots, mature shade trees and newer subdivisions',
  },
  'Greater Boston': {
    climate:
      'coastal-influenced summers, nor’easters and heavy, wet winter snow',
    landscape:
      'dense, smaller in-town lots where tidy curb appeal and privacy plantings matter most',
  },
  'Merrimack Valley': {
    climate:
      'humid summers and harsh, wind-driven winters coming down the valley',
    landscape:
      'a blend of riverside neighborhoods, larger family lots and rolling wooded land',
  },
  'Worcester Area': {
    climate:
      'higher-elevation winters with more snow and a shorter growing season than the coast',
    landscape:
      'hilly terrain, rocky soil and properties that range from village lots to acre-plus yards',
  },
  'Nashoba Valley': {
    climate:
      'cool nights, four hard seasons and rich, orchard-country soil',
    landscape:
      'open rural-suburban land, apple country and spacious country properties',
  },
  'Blackstone Valley': {
    climate:
      'humid summers and cold winters with heavy clay-loam soils that hold water',
    landscape:
      'former mill-town neighborhoods, sloped lots and a mix of historic and newer homes',
  },
};

/* ------------------------------------------------------------------ */
/* Cities — 100 real Massachusetts municipalities around Hudson         */
/* ------------------------------------------------------------------ */

export type City = {
  name: string;
  slug: string;
  region: keyof typeof REGIONS | string;
};

const C = (name: string, region: string): City => ({
  name,
  slug: name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, ''),
  region,
});

export const cities: City[] = [
  // MetroWest (Hudson core)
  C('Hudson', 'MetroWest'),
  C('Marlborough', 'MetroWest'),
  C('Sudbury', 'MetroWest'),
  C('Stow', 'MetroWest'),
  C('Maynard', 'MetroWest'),
  C('Acton', 'MetroWest'),
  C('Concord', 'MetroWest'),
  C('Northborough', 'MetroWest'),
  C('Southborough', 'MetroWest'),
  C('Westborough', 'MetroWest'),
  C('Framingham', 'MetroWest'),
  C('Natick', 'MetroWest'),
  C('Wayland', 'MetroWest'),
  C('Ashland', 'MetroWest'),
  C('Hopkinton', 'MetroWest'),
  C('Holliston', 'MetroWest'),
  C('Sherborn', 'MetroWest'),
  C('Lincoln', 'MetroWest'),
  C('Weston', 'MetroWest'),
  C('Dover', 'MetroWest'),
  // Greater Boston
  C('Newton', 'Greater Boston'),
  C('Needham', 'Greater Boston'),
  C('Wellesley', 'Greater Boston'),
  C('Waltham', 'Greater Boston'),
  C('Watertown', 'Greater Boston'),
  C('Belmont', 'Greater Boston'),
  C('Arlington', 'Greater Boston'),
  C('Lexington', 'Greater Boston'),
  C('Brookline', 'Greater Boston'),
  C('Cambridge', 'Greater Boston'),
  C('Somerville', 'Greater Boston'),
  C('Medford', 'Greater Boston'),
  C('Dedham', 'Greater Boston'),
  C('Milton', 'Greater Boston'),
  C('Quincy', 'Greater Boston'),
  C('Braintree', 'Greater Boston'),
  C('Stoughton', 'Greater Boston'),
  C('Norwood', 'Greater Boston'),
  C('Walpole', 'Greater Boston'),
  C('Canton', 'Greater Boston'),
  // Merrimack Valley / North
  C('Lowell', 'Merrimack Valley'),
  C('Chelmsford', 'Merrimack Valley'),
  C('Billerica', 'Merrimack Valley'),
  C('Tewksbury', 'Merrimack Valley'),
  C('Andover', 'Merrimack Valley'),
  C('Westford', 'Merrimack Valley'),
  C('Dracut', 'Merrimack Valley'),
  C('Tyngsborough', 'Merrimack Valley'),
  C('Wilmington', 'Merrimack Valley'),
  C('Burlington', 'Merrimack Valley'),
  C('Woburn', 'Merrimack Valley'),
  C('Bedford', 'Merrimack Valley'),
  C('Carlisle', 'Merrimack Valley'),
  C('North Reading', 'Merrimack Valley'),
  C('Reading', 'Merrimack Valley'),
  C('Winchester', 'Merrimack Valley'),
  C('Stoneham', 'Merrimack Valley'),
  C('Wakefield', 'Merrimack Valley'),
  // Worcester Area
  C('Worcester', 'Worcester Area'),
  C('Shrewsbury', 'Worcester Area'),
  C('Holden', 'Worcester Area'),
  C('Auburn', 'Worcester Area'),
  C('Millbury', 'Worcester Area'),
  C('Grafton', 'Worcester Area'),
  C('Boylston', 'Worcester Area'),
  C('West Boylston', 'Worcester Area'),
  C('Leicester', 'Worcester Area'),
  C('Paxton', 'Worcester Area'),
  C('Sutton', 'Worcester Area'),
  C('Oxford', 'Worcester Area'),
  C('Rutland', 'Worcester Area'),
  C('Upton', 'Worcester Area'),
  // Nashoba Valley / North Central
  C('Clinton', 'Nashoba Valley'),
  C('Bolton', 'Nashoba Valley'),
  C('Berlin', 'Nashoba Valley'),
  C('Lancaster', 'Nashoba Valley'),
  C('Sterling', 'Nashoba Valley'),
  C('Leominster', 'Nashoba Valley'),
  C('Fitchburg', 'Nashoba Valley'),
  C('Harvard', 'Nashoba Valley'),
  C('Ayer', 'Nashoba Valley'),
  C('Shirley', 'Nashoba Valley'),
  C('Littleton', 'Nashoba Valley'),
  C('Boxborough', 'Nashoba Valley'),
  C('Groton', 'Nashoba Valley'),
  C('Pepperell', 'Nashoba Valley'),
  C('Townsend', 'Nashoba Valley'),
  C('Westminster', 'Nashoba Valley'),
  C('Princeton', 'Nashoba Valley'),
  // Blackstone Valley / Southern MetroWest
  C('Milford', 'Blackstone Valley'),
  C('Franklin', 'Blackstone Valley'),
  C('Bellingham', 'Blackstone Valley'),
  C('Mendon', 'Blackstone Valley'),
  C('Hopedale', 'Blackstone Valley'),
  C('Uxbridge', 'Blackstone Valley'),
  C('Northbridge', 'Blackstone Valley'),
  C('Medway', 'Blackstone Valley'),
  C('Millis', 'Blackstone Valley'),
  C('Medfield', 'Blackstone Valley'),
  C('Norfolk', 'Blackstone Valley'),
  C('Wrentham', 'Blackstone Valley'),
];

// De-dupe any accidental slug collisions, keeping first occurrence.
const seen = new Set<string>();
export const CITIES: City[] = cities.filter((c) => {
  if (seen.has(c.slug)) return false;
  seen.add(c.slug);
  return true;
});

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

/** Real neighbouring towns (same region), excluding the current city. */
export function getNearbyCities(city: City, limit = 6): City[] {
  const sameRegion = CITIES.filter(
    (c) => c.region === city.region && c.slug !== city.slug
  );
  // Rotate the starting point by city hash so each page lists a different set.
  if (sameRegion.length <= limit) return sameRegion;
  const start = hashString(city.slug) % sameRegion.length;
  const out: City[] = [];
  for (let i = 0; i < limit; i++) {
    out.push(sameRegion[(start + i) % sameRegion.length]);
  }
  return out;
}

export function regionOf(city: City): Region {
  return REGIONS[city.region] ?? REGIONS.MetroWest;
}

/* ------------------------------------------------------------------ */
/* Services — 7 real Tavares services with rich, hand-written SEO data  */
/* ------------------------------------------------------------------ */

export type SeoService = {
  name: string;
  shortName: string;
  slug: string;
  category: string;
  description: string;
  /** Pool of hero photos; pickImage() rotates these per city. */
  images: string[];
  painPoints: string[];
  benefits: string[];
  offerings: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  idealFor: string;
};

const pexelsLawn =
  'https://images.pexels.com/photos/12087398/pexels-photo-12087398.jpeg?auto=compress&cs=tinysrgb&w=1600';
const pexelsCommercial =
  'https://images.pexels.com/photos/32575068/pexels-photo-32575068.jpeg?auto=compress&cs=tinysrgb&w=1600';

// Real Tavares project photos (from their original gallery) reused as pools.
const G = {
  stripedLawn: wp('gl22646323800308', 1600, 1066),
  frontYard: wp('gl22140658868534', 1600, 1066),
  plantingBed: wp('gl21781636192214', 1600, 1066),
  mulchTree: wp('gl22386899572163', 1600, 1066),
  mulchingBed: wp('gl21690601591927', 1600, 1066),
  boulderBed: wp('gl22263179419913', 1600, 1066),
  crewProperty: wp('gl21518565973745', 1600, 1066),
  spruceBed: wp('gl22239750167298', 1600, 1066),
  spruceFlowers: wp('gl21513931495567', 1600, 1066),
  rockGarden: wp('gl21343666269451', 1600, 1066),
};

export const SERVICES: SeoService[] = [
  {
    name: 'Lawn Maintenance',
    shortName: 'Lawn Maintenance',
    slug: 'lawn-maintenance',
    category: 'lawn care',
    description:
      'Weekly and bi-weekly lawn care that keeps your property looking pristine all season.',
    images: [G.stripedLawn, pexelsLawn, G.frontYard, G.crewProperty],
    idealFor:
      'busy homeowners who want a consistently sharp, healthy lawn without lifting a finger',
    painPoints: [
      'Grass that grows unevenly and gets scalped when it’s finally cut too short.',
      'No-show or unreliable crews that leave your yard looking neglected for weeks.',
      'Weeds and crabgrass creeping in because the lawn is mowed at the wrong height.',
      'Clippings and debris left across walkways, driveways and patios after a cut.',
    ],
    benefits: [
      'Dependable weekly or bi-weekly visits on a schedule you can set and forget',
      'Healthy mowing heights that build stronger, thicker turf',
      'Crisp string-line edging along beds, walks and driveways',
      'Full blow-off of all hard surfaces after every service',
      'A single, reliable point of contact who answers the phone',
      'Fully licensed and insured crews on every visit',
    ],
    offerings: [
      'Weekly & bi-weekly mowing',
      'Precision trimming & edging',
      'Walkway and driveway blow-off',
      'Seasonal height adjustments',
      'Property clean-up add-ons',
      'Fertilization scheduling',
    ],
    processSteps: [
      { title: 'Walkthrough', desc: 'We assess your lawn, access and goals and set a schedule that fits.' },
      { title: 'Set the schedule', desc: 'Weekly or bi-weekly visits locked in so you never have to chase us.' },
      { title: 'Service day', desc: 'Mow, trim, edge and blow off — your yard sharp every single visit.' },
      { title: 'Season adjustments', desc: 'We adapt heights and timing as the New England season changes.' },
    ],
    faqs: [
      { q: 'How often should my lawn be mowed?', a: 'Most lawns need weekly mowing in spring and early summer, easing to every 7–14 days in mid-summer heat. We mow by the grass, not the calendar.' },
      { q: 'Do you offer weekly and bi-weekly plans?', a: 'Yes — we build a weekly or bi-weekly schedule around your property and budget, and stay consistent all season.' },
      { q: 'Are you licensed and insured?', a: 'Absolutely. Every Tavares Brothers crew is fully licensed and insured for your peace of mind.' },
    ],
  },
  {
    name: 'Lawn Mowing',
    shortName: 'Lawn Mowing',
    slug: 'lawn-mowing',
    category: 'lawn mowing',
    description:
      'Sharp, reliable mowing, trimming and edging that keeps your grass looking its best.',
    images: [pexelsLawn, G.stripedLawn, G.crewProperty, G.frontYard],
    idealFor:
      'homeowners who want a clean, golf-course-quality cut on a dependable schedule',
    painPoints: [
      'Ruts and scalping from mowers run too fast or set too low.',
      'Ragged edges where the lawn meets beds, walks and the driveway.',
      'Stray clippings blown into mulch beds and onto the patio.',
      'Skipped weeks that let the lawn get out of control between cuts.',
    ],
    benefits: [
      'Clean, even cuts at the right height for thicker turf',
      'Sharp string-line edging on every visit',
      'Detailed trimming around trees, fences and beds',
      'Hard surfaces blown off and left spotless',
      'Reliable weekly or bi-weekly visits',
      'Friendly, insured local crews',
    ],
    offerings: [
      'Weekly & bi-weekly mowing',
      'String-line edging',
      'Detail trimming',
      'Hard-surface blow-off',
      'Grass-height management',
      'One-time and recurring cuts',
    ],
    processSteps: [
      { title: 'Quick quote', desc: 'Tell us about your lawn and we price a recurring mowing plan fast.' },
      { title: 'Lock the day', desc: 'You get a set service day so the lawn never gets away from you.' },
      { title: 'Cut, edge, blow', desc: 'Mow at the right height, edge crisply and blow off every surface.' },
      { title: 'Stay consistent', desc: 'We show up reliably so your lawn always looks freshly cut.' },
    ],
    faqs: [
      { q: 'What height do you mow at?', a: 'For most New England lawns we keep the cut around 3–3.5 inches, which shades the soil, holds moisture and chokes out crabgrass.' },
      { q: 'Can I get a one-time mow?', a: 'Yes, we offer both one-time cuts and recurring weekly or bi-weekly mowing plans.' },
      { q: 'Do you bag or mulch clippings?', a: 'We mulch clippings to feed the lawn by default and bag when conditions call for it. Just let us know your preference.' },
    ],
  },
  {
    name: 'Gardening & Flowers',
    shortName: 'Gardening & Flowers',
    slug: 'gardening-flowers',
    category: 'gardening and flower care',
    description:
      'Garden design, seasonal planting and bed care that brings color to your property.',
    images: [G.spruceFlowers, G.plantingBed, G.rockGarden, G.mulchingBed],
    idealFor:
      'homeowners who want vibrant, healthy gardens and seasonal color without the upkeep',
    painPoints: [
      'Tired, overgrown beds that drag down the look of an otherwise nice home.',
      'Annuals planted too early that get wiped out by a late New England frost.',
      'Weeds choking out flowers because beds aren’t maintained between seasons.',
      'The wrong plants in the wrong spot — struggling in the soil or light they’re given.',
    ],
    benefits: [
      'Seasonal annual and perennial planting timed to the local frost dates',
      'Custom color schemes that complement your home',
      'Healthy, weeded and mulched beds all season',
      'Right-plant-right-place selection for your soil and light',
      'Deadheading and bed care that keeps blooms coming',
      'Full garden refreshes and new bed design',
    ],
    offerings: [
      'Seasonal flower installation',
      'Perennial bed design',
      'Garden bed refreshes',
      'Weeding & deadheading',
      'Soil prep & plant health',
      'Custom color planning',
    ],
    processSteps: [
      { title: 'Design consult', desc: 'We look at your beds, light and style and plan the right plantings.' },
      { title: 'Plant selection', desc: 'We choose plants suited to your soil, exposure and the local climate.' },
      { title: 'Install', desc: 'Beds are prepped, planted and mulched for a clean, finished look.' },
      { title: 'Maintain', desc: 'Ongoing weeding, deadheading and care keep the color going all season.' },
    ],
    faqs: [
      { q: 'When can you plant flowers?', a: 'Tender annuals go in after the local last-frost window (typically mid-May here), while perennials and shrubs do best planted in spring or early fall.' },
      { q: 'Do you maintain gardens year-round?', a: 'Yes — we offer seasonal installs plus ongoing weeding, deadheading and bed care so your gardens stay sharp.' },
      { q: 'Can you redesign an existing bed?', a: 'Definitely. We refresh tired beds and design brand-new ones tailored to your home and taste.' },
    ],
  },
  {
    name: 'Residential Landscaping',
    shortName: 'Residential Landscaping',
    slug: 'residential-landscaping',
    category: 'residential landscaping',
    description:
      'Lawns, flowers, gardens and trees combined into a stunning outdoor environment for your home.',
    images: [G.frontYard, G.boulderBed, G.mulchTree, G.plantingBed],
    idealFor:
      'homeowners ready to transform their yard into a space they love coming home to',
    painPoints: [
      'A patchy, dated yard that hurts curb appeal and resale value.',
      'Juggling multiple contractors for lawn, beds, mulch and cleanups.',
      'Erosion, bare spots and tired beds with no cohesive plan.',
      'Outdoor space that just isn’t usable or enjoyable as it is.',
    ],
    benefits: [
      'One team handling lawn, flowers, gardens and trees',
      'Curb-appeal and entryway upgrades that lift the whole property',
      'Cohesive design instead of piecemeal fixes',
      'Premium materials and meticulous craftsmanship',
      'Usable, beautiful outdoor living space',
      'Backed by 25+ years of local experience',
    ],
    offerings: [
      'Full-property landscaping',
      'Lawn, garden & tree care',
      'Mulch beds & edging',
      'Front-yard & entryway upgrades',
      'Plant & shrub installation',
      'Seasonal property maintenance',
    ],
    processSteps: [
      { title: 'Free consultation', desc: 'We listen to your goals and assess the whole property first.' },
      { title: 'Detailed estimate', desc: 'You get a clear, written, no-obligation plan and price.' },
      { title: 'Expert install', desc: 'Our licensed crew does the work with premium materials and care.' },
      { title: 'Final walkthrough', desc: 'We review every detail together to make sure it exceeds expectations.' },
    ],
    faqs: [
      { q: 'Do you handle the whole yard?', a: 'Yes — from lawns and flower beds to mulch, trees and cleanups, we handle the design and the labor as one team.' },
      { q: 'Do you offer free estimates?', a: 'We do. Every residential project starts with a free, no-obligation written estimate.' },
      { q: 'How long have you been in business?', a: 'Tavares Brothers has been landscaping homes in the area since 1994 — over 25 years of experience.' },
    ],
  },
  {
    name: 'Commercial Landscaping',
    shortName: 'Commercial Landscaping',
    slug: 'commercial-landscaping',
    category: 'commercial landscaping',
    description:
      'Professional grounds maintenance that keeps businesses, HOAs and properties looking sharp year-round.',
    images: [pexelsCommercial, G.crewProperty, G.stripedLawn, G.frontYard],
    idealFor:
      'property managers, HOAs and business owners who need reliable, professional grounds care',
    painPoints: [
      'Inconsistent crews that make the property look unkempt to clients and tenants.',
      'Poor communication and slow response when something needs attention.',
      'Patchwork vendors with no single point of accountability.',
      'Grounds that don’t reflect the professionalism of the business inside.',
    ],
    benefits: [
      'Scheduled, dependable grounds maintenance',
      'A single point of contact with fast response',
      'Programs built around your budget and schedule',
      'HOA and multi-property coverage',
      'Seasonal color and bed maintenance',
      'Professional, insured, uniformed crews',
    ],
    offerings: [
      'Scheduled grounds maintenance',
      'HOA & multi-property programs',
      'Commercial mowing & edging',
      'Seasonal bed & color care',
      'Spring & fall cleanups',
      'Snow-season coordination',
    ],
    processSteps: [
      { title: 'Site assessment', desc: 'We walk the property and understand your standards and schedule.' },
      { title: 'Custom program', desc: 'You get a maintenance program built around your budget and needs.' },
      { title: 'Reliable service', desc: 'Professional crews keep the grounds sharp on a consistent cadence.' },
      { title: 'Open communication', desc: 'One contact, fast response — requests handled without hassle.' },
    ],
    faqs: [
      { q: 'Do you service HOAs and multi-property accounts?', a: 'Yes — we run scheduled maintenance programs for HOAs, commercial sites and multi-property portfolios.' },
      { q: 'How fast do you respond to requests?', a: 'You get a single point of contact who answers calls and requests promptly, without the run-around.' },
      { q: 'Can you match our budget?', a: 'We build the program around your budget and schedule, with clear, predictable pricing.' },
    ],
  },
  {
    name: 'Spring & Fall Cleanup',
    shortName: 'Seasonal Cleanup',
    slug: 'spring-fall-cleanup',
    category: 'seasonal yard cleanup',
    description:
      'Thorough spring and fall cleanups that reset your property for the season ahead.',
    images: [G.mulchingBed, G.plantingBed, G.crewProperty, G.spruceBed],
    idealFor:
      'homeowners who want a fresh, clean property at the start and end of every season',
    painPoints: [
      'Matted leaves and winter debris smothering the lawn and inviting disease.',
      'Beds full of dead growth and weeds that make spring feel overwhelming.',
      'Fall leaf drop that piles up faster than you can keep ahead of it.',
      'Snow mold and bare patches from a yard left messy over winter.',
    ],
    benefits: [
      'Full removal of leaves, sticks and winter debris',
      'Cut-back and clean-up of beds and perennials',
      'Lawn dethatching and a healthy reset',
      'Fresh edging and mulch refresh add-ons',
      'Property prepped to thrive in the coming season',
      'Reliable, on-time crews when the season turns',
    ],
    offerings: [
      'Spring cleanups',
      'Fall leaf cleanups',
      'Bed cut-back & weeding',
      'Lawn dethatching',
      'Debris haul-away',
      'Mulch & edging refresh',
    ],
    processSteps: [
      { title: 'Schedule the reset', desc: 'We time your cleanup to the season so the property is ready when it counts.' },
      { title: 'Clear debris', desc: 'Leaves, sticks and winter mess are cleared off lawns and beds.' },
      { title: 'Refresh beds', desc: 'Perennials cut back, beds weeded and edges re-cut for a clean look.' },
      { title: 'Final detail', desc: 'A last blow-off and haul-away leaves the property crisp and ready.' },
    ],
    faqs: [
      { q: 'When should I schedule a cleanup?', a: 'Spring cleanups are best as soon as the snow clears; fall cleanups run through leaf-drop into late autumn. Booking early secures your spot.' },
      { q: 'Do you haul away the debris?', a: 'Yes — leaves, sticks and yard debris are removed and hauled away as part of the service.' },
      { q: 'Can you add mulch with the cleanup?', a: 'Definitely. Refreshing edges and mulch right after a cleanup gives the biggest visual payoff.' },
    ],
  },
  {
    name: 'Mulching & Edging',
    shortName: 'Mulching & Edging',
    slug: 'mulching-edging',
    category: 'mulching and bed edging',
    description:
      'Fresh mulch and crisp, hand-cut bed edges that make your whole landscape look finished.',
    images: [G.mulchTree, G.boulderBed, G.mulchingBed, G.spruceBed],
    idealFor:
      'homeowners who want an instant, high-impact refresh to their beds and curb appeal',
    painPoints: [
      'Faded, thin mulch that lets weeds push right through the beds.',
      'Blurry, overgrown bed lines with no crisp separation from the lawn.',
      '“Mulch volcanoes” piled against trunks that rot bark and invite pests.',
      'Beds that look unfinished no matter how nice the plants are.',
    ],
    benefits: [
      'Quality mulch installed at the right 2–3 inch depth',
      'Crisp, hand-cut edges that define every bed',
      'Better moisture retention and fewer weeds',
      'Proper mulching that protects, not smothers, your plants',
      'An instant, dramatic boost to curb appeal',
      'Clean blow-off and tidy finish',
    ],
    offerings: [
      'Mulch delivery & installation',
      'Hand-cut bed edging',
      'Bed weeding & prep',
      'Tree-ring mulching',
      'Decorative stone options',
      'Spring & fall mulch refresh',
    ],
    processSteps: [
      { title: 'Bed prep', desc: 'We weed and clean the beds so the new mulch sits on a fresh base.' },
      { title: 'Cut the edges', desc: 'Crisp, hand-cut edges define each bed and separate it from the lawn.' },
      { title: 'Install mulch', desc: 'Quality mulch laid at the right depth — never piled against trunks.' },
      { title: 'Clean finish', desc: 'Surfaces blown off and detailed for a sharp, finished look.' },
    ],
    faqs: [
      { q: 'How much mulch do beds need?', a: 'We install mulch about 2–3 inches deep — enough to suppress weeds and hold moisture without smothering roots.' },
      { q: 'How often should mulch be refreshed?', a: 'Most properties benefit from a fresh top-off each spring, with an optional light refresh in fall.' },
      { q: 'Do you offer decorative stone too?', a: 'Yes — alongside hardwood and bark mulch we can install decorative stone where it fits the design.' },
    ],
  },
];

export function getServiceBySlug(slug: string): SeoService | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}

export function getAllCitySlugs(): string[] {
  return CITIES.map((c) => c.slug);
}

/** All city × service combinations for generateStaticParams. */
export function generateAllParams(): { city: string; service: string }[] {
  return CITIES.flatMap((c) =>
    SERVICES.map((s) => ({ city: c.slug, service: s.slug }))
  );
}

/** Pick a hero photo from a service's pool, rotated by city so the same
 *  service shows a different photo town to town. */
export function pickImage(service: SeoService, citySlug: string): string {
  return pick(service.images, `${service.slug}:${citySlug}`);
}
