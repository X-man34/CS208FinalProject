# Downtown Donuts Project Plan

## Project Direction

This project will turn the starter Express app into a polished prototype for
Downtown Donuts, a family-owned donut and coffee shop. The site should feel
cozy, minimal, and modern while still showing personality. Business-specific
copy can remain Lorem ipsum placeholder text for now, but the structure,
visual style, and interactions should feel client-ready.

The overall design direction will follow the provided brand guide:

- Dark green `#10291D` for major backgrounds and strong visual anchors
- Saffron `#F7C64A` for buttons, dividers, and small accents
- Seasalt `#F7F7F7` for page backgrounds and card surfaces
- Black `#000000` for text on Seasalt backgrounds
- Seasalt `#F7F7F7` for text placed on dark or colored backgrounds
- `Italianno` for decorative brand moments only
- `Montserrat` for headings, body copy, navigation, and UI text

## Core Site Structure

The site will include the required pages plus a few supporting experiences that
make the prototype feel complete.

- Landing Page
- Menu Page
- About Us Page
- Customer Comments Page
- Custom 404 Page
- Shared header, footer, and mobile navigation

The navigation should prioritize the client goals:

- Home
- Menu
- About Us
- Comments
- Order Online

Depending on time, a simple Locations or Contact section can live on the home
page or in the footer rather than becoming a full separate page.

## Landing Page

The landing page should act as the strongest design statement in the project.
Its job is to make the shop feel warm, memorable, and easy to visit or order
from.

High-level content blocks:

- Hero section with strong visual branding, headline, short supporting text,
  and an order CTA
- Featured donuts or seasonal highlights
- Quick intro to the business history since 1992
- Short menu preview for donuts and coffee
- Order online links for UberEats, DoorDash, or placeholder services
- Small callout guiding users to comments or customer favorites
- Footer with hours, address placeholder, and social/contact placeholders

The homepage should balance clean layout with playful details so it feels more
custom than a generic class project.

## Menu Page

The menu page should showcase products clearly while staying visually branded.
Since the assignment allows creative interpretation, the page can feel more like
a curated storefront than a plain list.

High-level plan:

- A page header with a short intro and ordering CTA
- Menu sections for donuts, coffee, and featured items
- Card or category-based layout instead of a plain document dump
- Optional visual tags such as classic, seasonal, or customer favorite
- Optional embedded PDF or downloadable menu link as a secondary feature

Because the actual shop content can be placeholder text, the emphasis should be
on readable layout, hierarchy, and mobile usability.

## About Us Page

The About Us page should communicate the family-owned story and help the client
feel local, established, and welcoming.

High-level content blocks:

- Story intro about Downtown Donuts being part of the downtown community since
  1992
- Timeline or milestone section showing the business history
- Brand values such as handmade quality, neighborhood connection, or morning
  ritual
- Photo or illustration space for shop imagery
- Call to action to visit in person or view the menu

The content can remain Lorem ipsum, but the structure should clearly show how
the real story would be presented later.

## Customer Comments Page

This page is the main full-stack feature and should feel polished, not just
functional. It needs to show that the site can handle real user input with good
UX and solid backend behavior.

High-level features:

- Comment submission form with name and comment fields
- Server-side validation for empty, whitespace-only, and overlong input
- Sanitized output to prevent script injection
- Server-generated timestamp displayed with each comment
- Pagination or a Load More pattern after 10 comments
- Success and error messaging that feels friendly and branded
- Protection against accidental duplicate submissions such as rapid double-clicks

The design should keep the comments page visually consistent with the rest of
the site, using cards, soft spacing, and clear form hierarchy.

## Custom 404 Page

The 404 page should be treated as a designed feature, not a default fallback.
The `goal404Page.png` reference shows the right direction: warm, playful, clean,
and highly branded.

High-level goals for the 404 page:

- Large, visually bold `404` headline
- Friendly message with a playful donut-themed tone
- Strong buttons back to Home and Menu
- Decorative donut asset or illustration
- Layout that works on desktop and stacks cleanly on mobile
- Helpful fallback links such as sitemap-style navigation or key destinations

The finished page should borrow the structure of the reference image without
needing to copy it exactly. It should feel like part of the same Downtown
Donuts design system as the rest of the website.

## Shared Design System

To keep the site cohesive, the whole project should be built around a small set
of reusable visual patterns.

Shared UI elements:

- Branded header with logo, nav links, and a prominent order button
- Reusable page hero/header style
- Consistent button styles for primary and secondary actions
- Section dividers and accent lines using saffron
- Reusable cards for menu items, comments, and content blocks
- Footer with helpful links and business details

The site should feel handcrafted through custom CSS rather than template-like.
That means intentional spacing, typography scale, hover states, and mobile
layout choices.

## Accessibility and Responsiveness

Accessibility and mobile design should be built into the project from the
beginning rather than patched in later.

High-level requirements for the whole site:

- Semantic HTML structure with `header`, `nav`, `main`, `section`, `article`,
  and `footer`
- Keyboard-friendly navigation and interactive controls
- Proper `label` usage on all form inputs
- Meaningful alt text for images and decorative-image decisions where needed
- Strong color contrast using the brand palette
- Responsive layouts for phone, tablet, and desktop

Mobile should be treated as a first-class experience, especially for the nav,
hero sections, menu cards, comments form, and 404 layout.

## Back-End and Data Plan

The project only needs one major data-driven feature, so the backend can stay
focused and clean.

High-level backend scope:

- Keep Express as the server framework
- Use MariaDB/MySQL for persistent comment storage
- Add a comments table with fields for id, display name, body, created timestamp,
  and any moderation or status fields if needed
- Separate routes for page rendering and comment submission logic
- Graceful error handling for validation failures and server/database problems

This keeps the app easy to explain in a demo while still clearly meeting the
full-stack requirements.

## Content Approach

Since the assignment allows placeholder copy, the written content can stay broad
and presentational for now.

Content plan:

- Use Lorem ipsum for business-specific paragraphs
- Use realistic section headings and UI labels
- Keep menu item names and category names plausible for a donut shop
- Write short CTA text that feels like a real customer-facing site

This approach lets the prototype look finished without pretending to have final
client copy.

## README and Documentation Plan

The final repo should include documentation that makes the project easy to run
and easy to grade.

README should include:

- Setup instructions
- Design decisions
- Edge cases
- Challenges and learnings
- Citations

It would also help to keep a short internal checklist for:

- Required pages completed
- Comments requirements completed
- Accessibility review completed
- Mobile review completed
- Git history pace staying on track

## Development Phases

The project can be built in a simple sequence that keeps momentum high.

1. Foundation phase: clean up the starter app, fix routing and error handling,
   define the layout structure, and set up shared styling variables.
2. Page-building phase: create the landing, menu, about, and comments pages with
   placeholder content and final navigation.
3. Full-stack phase: build comment storage, validation, pagination, timestamps,
   and user-facing error/success states.
4. Polish phase: design the custom 404 page, refine responsive behavior, and
   improve interaction details across the site.
5. Finalization phase: test edge cases, improve accessibility, complete README,
   and verify the project against the submission checklist.

## Final Vision

The finished project should feel like a thoughtful client prototype rather than
just a completed assignment. It should show strong front-end design, a clean
full-stack comments feature, a branded 404 page inspired by the provided mockup,
and a consistent Downtown Donuts identity across every page.
