# Dr. Wilda Pierre — Teach. Lead. Heal.

Professional website for **Dr. Wilda Pierre, DNP, APRN, ACNPC-AG**, Adult-Gerontology Acute Care Nurse Practitioner, clinical educator, nursing faculty member, speaker, and mentor.

**Live website:** https://wildapierrednp.com/
**Repository:** https://github.com/walkerscw/WildaPierreDNP.com
**Website refresh:** September 15, 2026

## Website overview

The redesigned one-page website brings together Dr. Pierre’s professional services and the compassion, Haitian roots, faith, and community connection behind her work. Its visual identity uses pink, blush, ivory, deep berry, and champagne gold, with the supplied pink WP medallion and white-coat/pink-scrubs portrait.

### Sections

- **Introduction:** professional identity, credentials, and Teach. Lead. Heal. philosophy.
- **Her story:** community-centered biography and progression from acute care nursing to education, leadership, and advanced practice.
- **Services:** NCLEX preparation, student mentorship, clinical education, clinical preceptorship and skills validation, leadership and faculty development, speaking and workshops.
- **NCLEX preparation:** individualized study planning, content review, clinical judgment, Next Generation NCLEX-style questions, accountability, and exam readiness.
- **Clinical education:** nursing-process framework—assess, diagnose, plan, implement, evaluate—with program and clinical-site requirements stated first.
- **Speaking:** topics for nursing programs, healthcare organizations, conferences, and student events.
- **Credentials:** DNP and MSN at Capella University, post-master’s AG acute care NP certificate at Walden University, and BSN at Grand Canyon University.
- **Contact and scheduling:** email inquiries and the existing Calendly appointment page.
- **Social profiles:** LinkedIn, Instagram, Facebook, and TikTok.
- **Footer:** educational and preceptorship disclaimers, automatic copyright year, and Corporate Lens Photography credit.

## Files and deployment

This is a static HTML/CSS/JavaScript website. It needs no package installation, framework, database, secret, or build step.

| File | Purpose |
| --- | --- |
| `index.html` | One-page website, content, social metadata, and JSON-LD structured data |
| `styles.css` | Brand styling, responsive layouts, keyboard focus, reduced-motion support |
| `script.js` | Accessible mobile menu and automatic copyright year |
| `images/dr-wilda-pierre-portrait.jpg` | Supplied updated portrait |
| `images/wp-medallion.jpg` | Supplied pink and gold WP medallion |
| `images/wplogodnparnp.png` | Preserved original image used by existing social-preview metadata |
| `images/wilda-clinical-resized.png` | Preserved legacy portrait |
| `medical-education.html` | Compatibility redirect from the previous page to `/#clinical` |
| `CNAME` | Existing custom domain: `wildapierrednp.com` |
| `robots.txt` | Allows crawling and points to the sitemap |
| `sitemap.xml` | Canonical homepage URL and substantive content modification date |

GitHub Pages publishes the **root directory of `main`** through its existing Pages build and deployment workflow. Updating `main` triggers publishing. Keep the `CNAME` file and Pages settings intact. The existing “Images” pull request is separate from this refresh and should be reviewed independently before any future merge.

### Local preview

From this repository directory:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765. Refresh after editing. The homepage also works without JavaScript: content, navigation, social links, and contact links remain available; JavaScript adds mobile-menu collapsing and the current year.

### Publishing an update

1. Make and review changes locally or in a working branch.
2. Check HTML, links, image paths, JavaScript syntax, and metadata. If browser testing is part of the work, include narrow and wide layouts, keyboard navigation, and the mobile menu.
3. Commit the intended changes and update `main`.
4. Wait for the Pages build and deployment workflow to succeed.
5. Confirm the public website serves the new content. GitHub Pages caching can delay what individual browsers display.

To restore an earlier version, revert the specific refresh commit in GitHub or Git and publish the resulting commit; avoid force-pushing or changing the domain.

## Content and professional wording

The refresh follows the Dr. Wright-reviewed content and the project’s approved direction:

- Use **Dr. Pierre** after her full introduction.
- Use **acute care nursing**, **skills validation**, and **transition to practice**.
- Explain clinical learning with the nursing-process framework.
- Retain educational, examination-result, and preceptorship limitations.
- Do not add numerical NCLEX success claims, pass rates, guarantees, or unsupported testimonials.
- Treat the provided credentials and education as owner-supplied content; this site does not represent independent license verification. Review credentials and service availability whenever professional details change.

## Contact, scheduling, and social links

- **Email:** wildapierrednp@gmail.com
- **Existing scheduler:** https://calendly.com/wildapierrednp
- **LinkedIn:** https://www.linkedin.com/in/wildapierrednp/
- **Instagram:** https://www.instagram.com/childofgod2004/
- **Facebook:** https://www.facebook.com/share/1DMZ7DeaRK/
- **TikTok:** https://www.tiktok.com/@childofgod2004

The website links to the owner’s existing Calendly URL. It does not create availability, collect appointment data, process payments, or send messages automatically. Email is available as a fallback. No embedded calendar or analytics is loaded.

### Switching to Google appointment scheduling

Once the owner supplies a published Google booking-page URL, replace the `href` of the link marked `data-booking-link` in `index.html` and update the adjacent Calendly label. Keep the email alternative. An `.ics`/iCalendar file represents an event; it is not a substitute for a booking page that checks availability. A Google booking link has not yet been supplied.

## Search and AI discovery

Implemented:

- Descriptive page title and meta description.
- HTTPS canonical URL and sitemap.
- Crawlable content in the HTML, not dependent on JavaScript rendering.
- `Person`, `WebSite`, and `WebPage` JSON-LD describing Dr. Pierre and linking her official profiles.
- Existing Open Graph image preserved, with updated title, description, URL, and alternate text.
- Semantic page sections, descriptive image alternative text, and responsive presentation.
- A redirect for the former medical-education page to consolidate visitors on the updated homepage.

Google’s guidance says its standard SEO practices also apply to AI Overviews and AI Mode; there is no special markup that guarantees inclusion. See [Google Search Central: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features). Structured data describes the page; it does not guarantee rankings or a rich result.

Owner follow-up:

1. Verify the domain in Google Search Console and Bing Webmaster Tools, then submit `https://wildapierrednp.com/sitemap.xml`.
2. Keep credentials, service descriptions, and official profile links consistent across the website and social profiles.
3. When a new social-sharing image is approved, replace the legacy Open Graph image reference in `index.html`.
4. Confirm HTTPS enforcement in GitHub Pages after the domain’s certificate/DNS checks are complete. This refresh does not change those settings.

## Corporate Lens Photography

The footer includes the requested subtle **Website by Corporate Lens Photography** credit. It is plain text because a final Corporate Lens website address has not been supplied. Add the approved destination when available; do not guess it.

## Asset notes

The portrait and medallion were recovered from attachments to the referenced design conversation. They are used as supplied, without further face, body, or logo alterations. Original historical assets remain in place. Do not publish review PDFs, personal reference photographs, or other project source material with the site.
