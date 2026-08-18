# TMS of Austin — Landing Page

Marketing landing page for [TMS of Austin](https://www.tmsofaustin.com/) promoting **Deep TMS with BrainsWay** for treatment-resistant depression and OCD in the greater Austin, TX area.

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

| File | Purpose |
|------|---------|
| `src/content/site.ts` | Clinic contact info, locations, GHL survey embed, Twilio phone |
| `src/content/copy.ts` | All page copy and CTAs |
| `public/images/` | Logo, hero background, treatment imagery |

### CTAs

- **Primary:** Call `(737) 471-5402` (replace with Twilio tracking number in `site.ts` when assigned)
- **Secondary:** Find out if you Qualify → GHL survey embed (`3j8JkYokCF658GJctxs0`)

## Page Sections

1. Hero — treatment-resistant depression/OCD headline + CTAs
2. What Is Deep TMS with BrainsWay
3. Why Choose TMS of Austin
4. Who Qualifies
5. Locations (South Austin, North/Central Austin, Cedar Park)
6. FAQ
7. Qualification survey + Final CTA

## Build

```bash
npm run build
npm start
```
