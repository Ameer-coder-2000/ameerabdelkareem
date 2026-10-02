# Ameer Abdelkareem Osman | Portfolio

Personal portfolio website — projects, skills, experience, education and contact details.

Light premium minimal UI: paper-white background, hairline borders, serif display type,
scroll reveals, animated counters, filterable project grid, scroll progress bar and a
mobile menu. No frameworks — plain HTML, CSS and JavaScript.

## Edit everything in one file

All content lives in [`assets/js/data.js`](assets/js/data.js). Open it, change a line,
save, refresh the browser. You never need to touch the HTML or CSS.

| Key in `data.js` | What it controls |
| --- | --- |
| `meta` | Name, role, page title, SEO description, keywords |
| `hero` | Availability badge, rotating job titles, intro text, portrait, buttons, **your live sites**, stat counters |
| `socials` | LinkedIn, GitHub, Instagram, Facebook (profile + page), TikTok, email, phone — shown in the hero and contact panel |
| `about` | About heading, paragraphs, "what I do" chips, quick facts |
| `skills` | Skill groups (title + list of items) |
| `projects` | Every project card: image, category, summary, stack, **live link**, **code link** |
| `showreel` | The graphic design video: file, poster frame, heading, caption, facts |
| `experience` | Timeline entries |
| `education` | Education cards |
| `certifications` | Certificates and activities |
| `contact` | Heading, email, copy-email button, resume file, note |
| `footer` | Footer note |

### Social links are already filled in

All eight entries in `socials` have real URLs, so nothing is hidden:

| Entry | URL |
| --- | --- |
| LinkedIn | `linkedin.com/in/ameer-abdelkareem-osman-9877a72b4` |
| GitHub | `github.com/Ameer-coder-2000/ameerabdelkareem` |
| Instagram | `instagram.com/ameer_abdelkareem/` |
| Facebook (profile) | `facebook.com/share/1FRT84h1c6/?mibextid=wwXIfr` |
| Facebook (page) | `facebook.com/share/18bpMb5rCh/?mibextid=wwXIfr` |
| TikTok | `tiktok.com/@ameer_abdelkareem_2000` |
| Email / Phone | `mailto:` and `tel:` |

**Worth fixing:** both Facebook URLs are `facebook.com/share/...` links. Facebook treats
those as *share* links, so a visitor gets the share dialog instead of landing on your
profile or page. Replace the two `url` values in `data.js` with the plain addresses
Facebook shows in your browser address bar (for example
`https://www.facebook.com/yourname`), and the buttons will go straight there.

To add another platform, copy an existing entry. Any entry with an empty `url` is
skipped automatically:

```js
{
  label: "Instagram",
  handle: "@your-handle",        // shown under the icon
  url: "",                       // <- empty means "do not show"
  icon: "instagram"              // matches <symbol id="i-..."> in index.html
}
```

### The showreel video

`showreel` in `data.js` controls the "Showreel" section. You do not need to touch
any HTML or JavaScript to change it:

```js
showreel: {
  heading: "How I design, explained by me",
  lead: "…",
  caption: "Graphic design walkthrough",
  meta: "0:42 · silent until you unmute",
  src: "assets/media/design-walkthrough.mp4",
  poster: "assets/media/design-walkthrough-poster.jpg",
  width: 576, height: 1024,
  alt: "Screen recording of Ameer explaining his graphic design process",
  soundHint: "Sound is off — tap the speaker to listen",
  facts: [ { value: "42s", label: "walkthrough" } ]
}
```

To swap in a different clip: drop the file in `assets/media/`, change `src`, and
update `width` / `height` to the real pixel size. The frame reserves that exact
shape, so nothing shifts when the video loads. A **portrait (9:16) clip looks
best** — the layout is built around a tall player beside the text.

How the player behaves (all handled for you):

- starts by itself, silently, as soon as it scrolls into view
- pauses again the moment it leaves the screen, so it never keeps decoding off-screen
- the speaker button in the corner turns the sound on and off, and the video keeps
  playing either way
- clicking the picture pauses or resumes, and a play mark appears while stopped
- the file is only downloaded when you get close to it, so the 3.6 MB never delays
  the rest of the page
- if the visitor has asked for reduced motion, the clip does not autoplay — they get
  the poster frame and a play button instead
- `muted`, `playsinline` and `loop` are all set, which is what iOS needs to autoplay
  a silent clip inline

**Why it starts silent:** every browser blocks autoplay that has sound. A video with
audio would refuse to start on its own, so silent is the only way to get the
auto-play you asked for. That is exactly what the speaker button is for.

### Mobile layout

The layout is responsive from 320px upward, so the site fits any phone without a
horizontal scrollbar. Verified at 320 / 360 / 390 / 414 / 768px:

- projects collapse to one column (two on tablets), skills and certificates reflow
- the nav collapses to the hamburger menu
- social pills become icon-only squares, sized 46x46px for thumbs
- buttons and menu rows are at least 44px tall
- `viewport-fit=cover` plus `env(safe-area-inset-*)` keeps content clear of notches
  and the home indicator on iPhones
- long values such as the email address wrap onto two lines instead of being cut off

Breakpoints live at the bottom of `style.css`: 1080px (hero + contact stack),
900px (nav), 720px (phones), 520px and 380px (small phones).

### Your live websites

The three buttons under the hero come from `hero.sites`. Add or remove entries there:

```js
sites: [
  { label: "hak-kalenga.in", url: "https://hak-kalenga.in/" },
  { label: "ccc.kesug.com", url: "https://ccc.kesug.com/" },
  { label: "loadbridge.page.gd", url: "https://loadbridge.page.gd/" }
]
```

### Adding your project links

Each project has two optional links. Paste your URL and the matching button appears
automatically — leave a field empty (`""`) and that button is hidden.

```js
{
  title: "GiligERP",
  category: "Full Stack",
  featured: true,                       // true = wider card in the grid
  image: "assets/img/project-python-flask2.jpg",
  summary: "An ERP and management platform…",
  stack: ["PHP", "MySQL", "JavaScript"],  // shown as small tags
  live: "https://your-deployment.com",      // "Live demo" button
  code: "https://github.com/you/repo"       // "Source code" button
}
```

Projects marked `live` also get a green **Live** badge on the thumbnail, so you can see
at a glance what is deployed. A project with `featured: true` spans two columns.

### Project images

Thumbnails are the compressed copies in `assets/img/opt/` (max 1000px wide, ~70 KB
each) — the full-size originals are still in `assets/img/` as backups. Keep using
`assets/img/opt/…` for new projects, or point at an original if you don't mind the
extra ~200 KB per image.

### Adding a new project

Copy any block inside `projects: [ … ]`, paste it at the end of the list, edit the
values, save, refresh. The filter buttons, counters and category counts all rebuild
themselves automatically.

### Adding a new skill

Append the skill name to the matching group, e.g. `"Group": ["Django", "Redis"]`.
The group counter and the scrolling marquee update automatically.

## Project structure

- `index.html` — page structure and inline SVG icon sprite
- `assets/css/style.css` — all styling (design tokens at the top of the file)
- `assets/js/data.js` — **all of your content**
- `assets/js/app.js` — rendering and interactions, no content
- `assets/img/` — original images, technology logos and favicons
- `assets/img/opt/` — compressed project thumbnails actually used by the site
- `Resume.pdf` — your CV (linked from the header, hero, nav and contact panel)
- `ameer.jpeg` — profile photo

## Run locally

Open `index.html` directly, or serve the folder:

```powershell
python -m http.server 8000
```

Then open <http://127.0.0.1:8000/>.

## Customising the look

Everything visual is driven by CSS custom properties at the top of
`assets/css/style.css`:

```css
--bg: #f7f6f2;        /* page background   */
--ink: #15161a;       /* headings          */
--brand: #2f5bff;     /* accent colour     */
--r-xl: 30px;         /* corner radius     */
```

Change `--brand` to restyle the accent everywhere at once. The fonts are set with
`--font-sans` (Inter) and `--font-display` (Instrument Serif) and are loaded from
Google Fonts in `index.html`.

## Accessibility & performance

- Semantic landmarks, skip link, visible focus rings
- `prefers-reduced-motion` respected for every animation
- Lazy-loaded project thumbnails, no layout shift
- Works without JavaScript for navigation and the contact links

## Contact

- LinkedIn: [Ameer Abdelkareem Osman](https://in.linkedin.com/in/ameer-abdelkareem-osman-9877a72b4)
- Email: `darkness.2000.2000.1000@gmail.com`
- GitHub: [Ameer-coder-2000](https://github.com/Ameer-coder-2000/ameerabdelkareem)