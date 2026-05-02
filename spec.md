# Birby — Landing Page Copy & Component Spec
**Color System**
- Dark bg: `#080808`
- Light bg: `#F5F2EA`
- Accent: `#C8FF00`
- Text on dark: `#F5F2EA`
- Text on light: `#0D0D0D`
- Muted: `#888680` on light / `#555250` on dark
- Border on light: `#E8E4DC`
- Border on dark: `#1E1E1E`

**Typography**
- Headlines: `Instrument Serif` — use italic for emphasis words
- Body + UI: `DM Sans`
- Eyebrow labels / stats: `DM Mono` or `IBM Plex Mono`

---

## NAV
**Background:** `#080808` — sticky, blur on scroll
**Logo:** `birby` wordmark — `F5F2EA` with lime dot after
**Links (muted, hover white):** How It Works · For Brands · Results · FAQ
**CTA button right:** `Get Early Access` — filled `#C8FF00`, text `#080808`, pill shape

---

## SECTION 1 — HERO
**Background:** `#080808`
**Layout:** Full viewport height, all content centered, phone carousel anchored to bottom edge bleeding out

```
EYEBROW (centered pill — border lime, text lime, mono font):
"AI UGC Programs · End to End"

H1 (centered, Instrument Serif, ~72–96px, F5F2EA):
"Your brand.
Thousands of videos.
Zero shoots."

SUBHEADLINE (centered, DM Sans, ~18px, muted #555250, max-width 480px):
"Birby builds and runs AI UGC content programs
for brands — from brief to distribution, fully managed."

CTA ROW (centered, margin-top 40px):
Primary: [Start a Program →] — lime bg, black text, pill
Secondary: [See How It Works] — ghost, white border, white text

SOCIAL PROOF LINE (centered, mono, 12px, muted — below CTAs):
"500+ videos delivered · Shopee · Southeast Asia · US DTC"

——— COMPONENT: Phone Carousel ———
Position: bottom of hero, bleeds below fold
Layout: 5 iPhone 15 Pro mockups in a horizontal row
  - Left 2: partially cut off, ~60% visible, slight tilt outward (–4°, –2°)
  - Center: full size, upright, slightly elevated (–8px translateY)
  - Right 2: partially cut off, mirror of left (+2°, +4°)
  - Subtle drop shadow under each phone: rgba(0,0,0,0.5) blur 40px
Each phone: plays a looping silent vertical video (AI UGC placeholder)
  - Phone 1: fashion/apparel content
  - Phone 2: food/lifestyle content
  - Phone 3: beauty/skincare content
  - Phone 4: travel content
  - Phone 5: fitness content
Auto-scroll: slow continuous drift left (CSS transform animation, 20s loop)
Below carousel (centered, mono, 11px, #333):
"AI-generated · Platform-optimized · Ready to post"
```

---

## SECTION 2 — LOGO BAR
**Background:** `#F5F2EA`
**Layout:** Full width, single horizontal row

```
TEXT (centered, mono, 11px, muted):
"Delivering AI UGC programs for brands across"

LOGO ROW (centered, muted gray, grayscale filter):
Shopee · [Brand 2] · [Brand 3] · [Brand 4] · [Brand 5]

NOTE FOR DEV: If not enough logos yet, replace with scrolling
stat ticker instead:
"500+ videos delivered  ·  2 enterprise programs  ·
5 markets  ·  48hr first delivery  ·  $0 in shoot costs"
Use CSS marquee/infinite scroll animation, pause on hover
```

---

## SECTION 3 — THE PROBLEM
**Background:** `#F5F2EA`
**Layout:** Centered text block, large editorial type, then two-column chaos → clarity diagram

```
EYEBROW (centered, mono, lime text on lime/10 pill):
"Before → After"

H2 (centered, Instrument Serif, ~56px, ink black, max-width 700px):
"Creating content at scale
is still completely broken."

BODY (centered, DM Sans, 17px, muted, max-width 520px):
"Shoots are expensive. Talent is unpredictable.
Your content calendar has 40 slots to fill this week
and one exhausted social media manager to fill them."

——— COMPONENT: Chaos → Clarity Diagram ———
Layout: 3-column — chaos left, arrow center, clarity right
Max-width: 900px, centered, margin-top 56px

LEFT — scattered floating pills (random positions, slight rotations):
"Talent negotiations"
"Shoot scheduling"
"Brief revisions"
"Reshoots"
"Platform reformatting"
"Caption writing"
"Usage rights"
"Posting manually"
Style: white pill, black text, soft shadow, scattered with CSS
       absolute positioning inside a relative container

CENTER — vertical arrow column:
Top: thin muted line going down
Middle: lime rounded square with "birby" wordmark centered
Bottom: thin muted line going down
Label below: "your AI UGC program"

RIGHT — clean structured list:
Each item: lime checkmark icon + label
✦ AI personas briefed in 24hrs
✦ Videos generated at scale
✦ Platform-optimized formats
✦ Distributed across all channels
✦ Performance tracked in real time
✦ No shoots. No talent. No chaos.
Style: left-aligned, clean, DM Sans 15px, stacked with 12px gap
```

---

## SECTION 4 — HOW IT WORKS
**Background:** `#080808`
**Layout:** Left: sticky phone mockup animates between steps. Right: vertical accordion

```
EYEBROW (lime pill, mono):
"How It Works"

H2 (Instrument Serif, ~52px, F5F2EA, max-width 500px):
"Brief in.
Viral content out."

SUBHEADLINE (DM Sans, 16px, muted):
"Four steps. Fully managed. Results in 48 hours."

——— COMPONENT: Step Accordion + Left Mockup ———
Layout: 2-column grid — left 45% mockup, right 55% accordion
Left: iPhone mockup that swaps content based on active step
  Step 1 active → shows persona brief card being filled out
  Step 2 active → shows video grid generating
  Step 3 active → shows distribution dashboard, channel icons
  Step 4 active → shows analytics/results dashboard
Transition: crossfade 300ms between mockup states

Right accordion — one step open at a time, lime left border on active:

(01) Brief your program            [active — open]
——————————————————————————————
Tell us your brand, your audience, and your goals.
We handle the creative strategy, persona direction,
and content formats. You approve the direction once
— then we build.

(02) We produce the content        [+ expand]
——————————————————————————————
AI generates videos matched to what's trending in
your niche right now. Every video is
platform-optimized, on-brand, and ready to post.
No shoots. No talent scheduling. No back and forth.

(03) We distribute it              [+ expand]
——————————————————————————————
Content goes live across TikTok, Instagram, and
YouTube Shorts simultaneously — on managed,
warmed accounts at optimal posting times.

(04) You see the results           [+ expand]
——————————————————————————————
Track views, engagement, and performance across
every channel in one dashboard. We iterate based
on what's working and keep the program improving
every week.
```

---

## SECTION 5 — FEATURES BENTO
**Background:** `#F5F2EA`
**Layout:** 12-column bento grid, 2 rows

```
EYEBROW (mono, muted):
"What's Included"

H2 (Instrument Serif, ~52px, ink):
"Everything your brand needs
to win on social. Nothing you don't."

——— COMPONENT: Bento Grid ———
Grid: 12 columns, gap 14px, margin-top 48px

CELL 1 — span 7, dark bg (#0D0D0D), tall:
  Top: small mono label "01 — CONTENT PRODUCTION"
  H3 (Instrument Serif, 28px, light): "AI UGC at scale"
  Body (DM Sans, 14px, muted light):
  "Realistic user-generated style videos produced
  entirely by AI. No talent, no shoots, no scheduling.
  Infinite volume across any demographic, aesthetic,
  or content format — delivered in 48 hours."
  Bottom right: lime pill stat "500+ videos delivered"

CELL 2 — span 5, lime bg (#C8FF00):
  Big stat (Instrument Serif, 80px, #080808): "18×"
  Label (mono, 13px, #333):
  "more content output vs
  traditional production"

CELL 3 — span 4, light bg (#FFFFFF), border:
  Small icon: grid of platform logos (TikTok, IG, YT)
  H3 (24px ink): "Multi-channel distribution"
  Body (14px muted):
  "Every video posted simultaneously
  across TikTok, Instagram Reels, and
  YouTube Shorts — on warmed, managed
  accounts optimized for each platform."

CELL 4 — span 4, dark bg:
  Small icon: trending arrow
  H3 (24px light): "Live trend intelligence"
  Body (14px muted light):
  "We watch what's performing in your
  niche in real time and build content
  around it before it peaks — so you're
  always ahead of the curve."

CELL 5 — span 4, lime bg:
  Big stat (Instrument Serif, 64px, #080808): "48hrs"
  Label (mono, 12px, #333):
  "from brief to
  first video live"

CELL 6 — span 6, light bg, border:
  Small icon: shield
  H3 (24px ink): "Fully managed program"
  Body (14px muted):
  "We handle everything — creative strategy,
  production, distribution, and performance
  reporting. Your team approves the direction.
  We execute it end to end."

CELL 7 — span 6, dark bg:
  Small icon: chart/analytics
  H3 (24px light): "Performance reporting"
  Body (14px muted light):
  "A clear dashboard showing views, engagement,
  and reach across every channel. Weekly reports
  that show exactly what's working and what we're
  optimizing next."
  Bottom: small lime text "→ No spreadsheets needed"
```

---

## SECTION 6 — RESULTS / TRACTION
**Background:** `#080808`
**Layout:** Big editorial stat hero, then two result cards

```
EYEBROW (centered, mono, lime):
"// Real Results //"

COMPONENT: Full-bleed stat
Big number (Instrument Serif, 120px, F5F2EA, centered): "500+"
Label (mono, 14px, muted, centered):
"AI videos delivered · across Southeast Asia and the US"

Supporting stats row (centered, mono, 13px, muted, gap 40px):
2 enterprise programs  ·  5 markets  ·  48hr turnaround  ·  $0 shoot costs

——— COMPONENT: Result Cards ———
Layout: 2 cards side by side, max-width 900px, centered, margin-top 48px

CARD 1 — light bg, rounded 20px, padding 32px:
  Top: Shopee logo (gray)
  Label (mono, 11px, muted): "ENTERPRISE · AI UGC PROGRAM"
  H3 (Instrument Serif, 26px ink):
  "500 videos. 2 months.
  Zero shoots."
  Body (14px muted):
  "Birby delivered a full AI UGC content program
  for Shopee Philippines — 500 videos produced
  and distributed across social channels with
  no talent, no production costs, and no delays."
  Bottom stat row:
  500 videos · PH market · 2 months · $12/video

CARD 2 — lime bg, rounded 20px, padding 32px:
  Top: small tag "COMING SOON"
  H3 (Instrument Serif, 26px, #080808):
  "US DTC brands.
  Starting Q3 2025."
  Body (14px, #333):
  "We're onboarding our first cohort of US DTC
  brands — apparel, beauty, and lifestyle.
  Early access includes founding member pricing
  locked in for life."
  Bottom CTA: [Apply for Early Access →] dark pill button
```

---

## SECTION 7 — PRICING SIGNAL
**Background:** `#F5F2EA`
**Layout:** Simple, clean, no full pricing table — just signal and CTA

```
EYEBROW (centered, mono, muted):
"Pricing"

H2 (centered, Instrument Serif, ~48px, ink):
"Pay per video.
No retainers. No surprises."

BODY (centered, DM Sans, 16px, muted, max-width 480px):
"Birby programs are priced per video produced and
distributed — so your costs scale directly with your
output. No monthly minimums until you're ready to commit."

——— COMPONENT: Two tier cards ———
Layout: 2 cards side by side, centered, max-width 760px

CARD 1 — white bg, border, rounded:
  Label (mono, 11px, muted): "SMALL BRANDS"
  Price (Instrument Serif, 48px): "$20"
  Sub (mono, 13px, muted): "per video · 80–150 videos/month"
  Divider
  Feature list (14px, checkmark):
  ✦ AI UGC video production
  ✦ Multi-platform distribution
  ✦ Trend-matched content
  ✦ Weekly performance report
  CTA: [Get Started →] dark pill

CARD 2 — dark bg, rounded:
  Label (mono, 11px, lime): "ENTERPRISE"
  Price (Instrument Serif, 48px, light): "Custom"
  Sub (mono, 13px, muted light): "500+ videos/month · dedicated team"
  Divider
  Feature list (14px, light):
  ✦ Everything in small brands
  ✦ Dedicated account manager
  ✦ Custom persona strategy
  ✦ Multi-market distribution
  ✦ Performance incentive model
  CTA: [Talk to Us →] lime pill, black text

NOTE (centered, mono, 12px, muted, below cards):
"All programs include a 2-week pilot.
No commitment until you see results."
```

---

## SECTION 8 — MISSION
**Background:** `#080808`
**Layout:** Full bleed, centered editorial type, radial glow behind text

```
EYEBROW (centered, mono, muted):
"Our Belief"

H2 (centered, Instrument Serif, ~72px, F5F2EA, max-width 800px):
"The internet is drowning
in AI slop.
We're not adding to it."

COMPONENT: Thin lime horizontal divider, centered, 60px wide

BODY (centered, DM Sans, 18px, muted #555250, max-width 560px):
"Birby builds AI content programs that are designed
to actually perform — trend-matched, platform-native,
and built around what your audience genuinely responds to.
Volume without quality is just noise. We do both."

THREE PILLARS (stacked left-aligned cards, max-width 700px, centered):
Each: border-top lime 0.5px, padding-top 20px

01 · Quality at scale
Every video is matched to a live trend and optimized
for its platform before it goes out. Volume doesn't
mean compromise.

02 · Fully managed, fully transparent
You brief us once and see everything — what we're
making, where it's going, and how it's performing.
No black boxes.

03 · Built for the long game
The brands winning on social in 2026 are the ones
building systematic content operations — not
scrambling for the next shoot. Birby is that system.
```

---

## SECTION 9 — FAQ
**Background:** `#F5F2EA`
**Layout:** Centered, clean accordion. Peg: Cliento FAQ

```
H2 (centered, Instrument Serif, ~48px):
"Everything you need to know"

SUBHEADLINE (centered, DM Sans, 15px, muted):
"Still have questions? We'll answer all of them."

——— COMPONENT: FAQ Accordion ———
Max-width: 800px, centered
Each item: border-bottom #E8E4DC, question row has + toggle right

Q1: What exactly does Birby build for my brand?
A: Birby builds and runs a fully managed AI UGC content
program. We handle creative strategy, video production using
AI, distribution across TikTok, Instagram, and YouTube Shorts,
and weekly performance reporting. You brief us once — we
handle everything after that.

Q2: How is this different from using an AI video tool ourselves?
A: AI video tools give you the capability. Birby gives you the
outcome. We combine AI production with trend intelligence,
distribution infrastructure, and a managed service layer —
so you get a full content program running, not just access
to a tool you still have to operate.

Q3: What does AI UGC actually look like?
A: Realistic, short-form social videos that look and feel like
genuine user-generated content — authentic, platform-native,
and built around what's actually trending in your niche. We'll
show you examples during your intro call.

Q4: How quickly can we get started?
A: Most programs go from brief to first videos live within
48 hours. Enterprise programs with custom persona strategy
take 5–7 business days for the first batch.

Q5: What platforms do you distribute to?
A: TikTok, Instagram Reels, and YouTube Shorts as standard.
Additional platforms available for enterprise programs.

Q6: Is there a minimum commitment?
A: Every program starts with a 2-week pilot. No long-term
commitment until you've seen real results and decided it's
working for your brand.

Q7: How does pricing work?
A: We charge per video produced and distributed. Small brand
programs start at $20/video at 80–150 videos per month.
Enterprise programs are custom priced based on volume
and market.
```

---

## SECTION 10 — WAITLIST CTA CLOSER
**Background:** `#080808`
**Layout:** Full bleed dark rounded card with subtle grid lines. Peg: Cliento closer

```
COMPONENT: Rounded dark card, max-width 1100px, centered
           subtle CSS grid line overlay (1px lines, 5% opacity)

H2 (large centered Instrument Serif, ~64px, F5F2EA):
"Launch your AI UGC program
[Get Early Access →] in 48 hours."

NOTE FOR DEV: Embed the CTA button inline inside the H2
like the Cliento reference — white pill button sitting
inside the headline text flow

SUBTEXT (centered, DM Sans, 15px, muted):
"Join brands already using Birby to generate content
at scale — without a single shoot."

EMAIL FORM (centered, max-width 480px):
Pill-shaped container:
[your@company.com              ] [Get Early Access]
Border: 1px rgba(255,255,255,0.12)
Input bg: transparent, text F5F2EA, placeholder muted
Button: lime bg, black text, border-radius same as container

SOCIAL PROOF (centered, mono, 12px, muted, margin-top 16px):
"500+ videos delivered · Shopee · Southeast Asia · US DTC brands"

SUCCESS STATE (swap form for this on submit):
"✓ You're on the list. We'll be in touch within 24 hours."
Color: lime text
```

---

## FOOTER
**Background:** `#080808`
**Layout:** 4-column grid + bottom bar

```
COL 1 — Brand:
Logo: birby wordmark (F5F2EA) + lime dot
Tagline (DM Sans, 13px, muted):
"AI UGC programs for brands.
End to end."

COL 2 — Product:
Label (mono, 11px, muted): PRODUCT
Links (14px, warm gray, hover white):
How It Works
For Brands
Results
Pricing

COL 3 — Company:
Label (mono, 11px, muted): COMPANY
Links:
About
Blog
Careers
Press

COL 4 — Legal:
Label (mono, 11px, muted): LEGAL
Links:
Terms & Conditions
Privacy Policy
Cookie Policy

BOTTOM BAR (border-top #1E1E1E):
Left: © 2025 Birby. All rights reserved.
Right: "Built for brands that give a damn."
Both: mono, 12px, muted
```

---

## COMPONENT LIBRARY NOTES FOR CLAUDE CODE

```
Phone carousel:
- Library: embla-carousel-react with autoplay plugin
- Loop: true, drag: true, autoplay delay: 3000ms
- Phone frame: use iPhone 15 Pro SVG frame overlay
- Video: <video autoPlay muted loop playsInline> inside frame
- 5 videos needed as /public/ugc-1.mp4 through ugc-5.mp4
- Fallback: gradient placeholder if no video provided

Step accordion:
- Library: @radix-ui/react-accordion
- Left border animation on active: lime 2px, CSS transition
- Left mockup: framer-motion AnimatePresence crossfade

Bento grid:
- Pure CSS grid, 12-column, no library
- grid-template-columns: repeat(12, 1fr)
- Each cell: grid-column: span N

FAQ accordion:
- @radix-ui/react-accordion
- + rotates to × on open: CSS transform rotate(45deg)

Chaos → Clarity diagram:
- Left scattered pills: absolute positioned within
  relative container, hardcoded positions + rotations
- CSS: transform: rotate(Xdeg) on each pill
- Center arrow: SVG or simple div with border

Scroll animations:
- framer-motion whileInView
- Preset: { opacity: 0, y: 24 } → { opacity: 1, y: 0 }
- Transition: duration 0.6s, ease "easeOut"
- Apply to: all section headings + cards + bento cells
- Stagger children: 0.1s delay between items

Logo/stat ticker:
- CSS animation: @keyframes marquee
- transform: translateX(0) → translateX(-50%)
- Duplicate content for seamless loop
- Pause on hover: animation-play-state: paused

Grid line overlay (CTA section):
- SVG background pattern
- backgroundImage: "url(grid.svg)"
- Opacity: 0.05
```

---

## PAGE ORDER SUMMARY

| # | Section | Background |
|---|---|---|
| 1 | Nav | Dark |
| 2 | Hero + Phone Carousel | Dark |
| 3 | Logo / Stat Bar | Light |
| 4 | The Problem | Light |
| 5 | How It Works | Dark |
| 6 | Features Bento | Light |
| 7 | Results / Traction | Dark |
| 8 | Pricing Signal | Light |
| 9 | Mission | Dark |
| 10 | FAQ | Light |
| 11 | Waitlist CTA Closer | Dark |
| 12 | Footer | Dark |

Dark → Light alternation keeps the page breathing.
Never two dark sections back to back except footer group.