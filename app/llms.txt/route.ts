import { business } from '@/lib/content';
import { STATE, CITIES, SERVICES, REGIONS } from '@/lib/locations';

const BASE_URL = 'https://www.tavareslandscape.com';

export function GET() {
  const regionNames = Object.keys(REGIONS);

  const services = SERVICES.map(
    (s) => `- [${s.name}](${BASE_URL}/services/${s.slug}): ${s.description}`
  ).join('\n');

  const areas = regionNames
    .map((r) => {
      const list = CITIES.filter((c) => c.region === r)
        .map((c) => c.name)
        .join(', ');
      return list ? `### ${r}\n${list}` : '';
    })
    .filter(Boolean)
    .join('\n\n');

  const body = `# ${business.name}

Family-owned landscaping company serving ${STATE} since 1994.
Phone: ${business.phone}
Email: ${business.email}
Address: ${business.address}
Website: ${BASE_URL}

## Services
${services}

## Service Areas (${CITIES.length}+ cities across ${STATE})
${areas}

## Notes
- Free, no-obligation estimates.
- Fully licensed and insured. 5.0 star average rating.
- City + service landing pages live at ${BASE_URL}/{city}/{service}.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
