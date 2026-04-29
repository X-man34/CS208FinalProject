# CS208 Final Project - Downtown Donuts

- **AI use disclosure**: [AI-CITATION.md](AI-CITATION.md)
- GitHub Repo: [https://github.com/X-man34/CS208FinalProject](https://github.com/X-man34/CS208FinalProject)
- Term: Spring 2026

## Site link
Just for fun I set this up to be hosted on netlify with my other sites. 
https://cs208finalproject.netlify.app/
Since the hosting is free I can't run the backend so to test the comments you will need to built it yourself. 

## Project Description

This project is a full-stack prototype website for Downtown Donuts, a family-owned
donut and coffee shop. It is built with Express, Pug, hand-written CSS, and
MariaDB/MySQL. The site includes a landing page, menu page, about page, custom
404 page, and a full-stack customer comments system with server-side validation,
timestamps, pagination, star ratings, and friendly error handling.

## Tech Stack

- Node.js
- Express 5
- Pug
- MariaDB / MySQL
- `mysql2`
- Hand-written CSS

## Features

- Multi-page server-rendered site
- Responsive navigation with a mobile menu
- Custom branded 404 page
- Menu page with placeholder product images
- About page with mobile-friendly expandable sections
- Customer comments page with:
  - server-side validation
  - 1 to 5 star ratings
  - rating summary graph
  - sorting by most recent, highest rating, and lowest rating
  - pagination at 10 comments per page
  - direct page-number navigation
  - success and error banners

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/X-man34/CS208FinalProject.git
cd CS208FinalProject
```

### 2. Install Node dependencies

```bash
npm install
```

### 3. Install and start MariaDB

If you are using Linux, WSL, or Codespaces, you can use the provided setup script:

```bash
chmod +x ./setup_scripts/install_db.sh
./setup_scripts/install_db.sh
```

If you already have MariaDB/MySQL installed locally, make sure the server is
running before continuing.

### 4. Create the database and tables

Run the SQL setup script:

```bash
mysql -u root -p < ./setup_scripts/create_demo_table.sql
```

This creates:

- database: `cs208demo`
- table: `todos` (left from the original starter project)
- table: `comments`

### 5. Match the database credentials

The current app configuration in [bin/db.js](bin/db.js) expects:

- host: `localhost`
- user: `root`
- password: `12345`
- database: `cs208demo`

If your local database uses different credentials, update [bin/db.js](bin/db.js)
to match your environment before starting the app.

### 6. Start the application

```bash
npm start
```

The app runs on port `3000` by default.

### 7. Open the site

Visit:

```text
http://localhost:3000
```

## Optional: Seed Test Comments

To generate a large number of comments for pagination and sorting tests:

```bash
node scripts/seed_comments.js
```

By default this inserts `1000` comments. You can provide a custom count:

```bash
node scripts/seed_comments.js 250
```

The seed script supports these optional environment variables:

- `DB_HOST`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`

## Application Routes

- `GET /` - landing page
- `GET /menu` - product menu
- `GET /about` - shop story and store details
- `GET /comments` - customer comments page
- `POST /comments` - submit a new comment

## Design Decisions

I did not treat this like a content-heavy business site, because it is not one
yet. Most of the real business copy does not exist, so the structure had to do
the persuasive work. That pushed me toward bold hierarchy, short copy blocks,
clear calls to action, and pages that can carry placeholder text without looking
unfinished.

I also kept the stack plain on purpose. Express, Pug, MariaDB, and hand-written
CSS are enough to build the required site without hiding the moving parts behind
a framework. For this project that matters. The comments page is the one place
where the site has to prove it is actually full-stack, so I wanted the request
flow, validation, database write, readback, sorting, and pagination to all be
traceable without hand-waving.

Visually, I stopped chasing soft, bubbly UI because it was making the site feel
less like a real coffee-and-donuts brand and more like a class demo. The later
styling direction is tighter, flatter, and more commercial. That choice was not
about trend-chasing. It was about making the site feel closer to something a
customer might actually trust enough to use.

## Edge Cases

The failure cases here are not exotic. They are the predictable ways users and
systems misbehave, so the site handles those first.

If the database is unavailable, the comments page does not collapse into a stack
trace. It stays on-brand and tells the user the comments are temporarily
unavailable. If a user submits whitespace, the server trims it and rejects it.
If a user sends a giant payload, the server enforces the field limits before any
insert happens. If a user double-clicks submit, the button disables on the
client and the server still treats the request like it cannot be trusted.

The same logic applies to navigation state. Bad `page` and `sort` query values
are not treated like a crisis. They are normalized back to safe defaults so the
page keeps working instead of punishing the user for a malformed URL.

## Challenges and Learnings

The first real problem was that the starter project was not a website. It was a
TODO demo wearing website clothes. Reworking that into something with an actual
landing page, a menu, an about page, a comments system, and a custom error page
meant stripping out the old center of gravity and rebuilding the route layer
around the pages that actually matter.

The second problem was feature creep inside the comments page. A plain comment
form is easy. A comment form with validation, persistence, timestamps, star
ratings, sorting, pagination, summary data, and failure states gets messy fast
if everything lives inline in one route. The fix was to break that work apart
into small pieces with one job each: normalize input, validate input, fetch a
page of data, build rating summaries, then render.

The practical lesson from the design work was that small interface decisions
change the whole tone of the site. The rounded, pill-heavy version technically
worked, but it read wrong. The same happened with the menu page and the mobile
nav. Both functioned before they felt right. That gap between "works" and "feels
credible" ended up being one of the main things this project taught me.

## Database Schema

There is really only one table in this project that matters now: `comments`.
The old `todos` table still exists in the SQL script because it came from the
starter code, but it is not part of the current application flow.

The comments table is intentionally small:

- `display_name` stores the public name shown on the page
- `body` stores the review text
- `star_rating` stores the 1 to 5 rating
- `created_at` gives the server-controlled timestamp used for display and sorting

That is enough structure to support the actual behavior of the page without
inventing data the site does not use. I did not add extra columns just to make
the schema look more serious. The point of the table is to support posting,
rendering, sorting, and paginating comments cleanly.

```sql
CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    display_name VARCHAR(80) NOT NULL,
    body VARCHAR(1000) NOT NULL,
    star_rating TINYINT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

## Accessibility Notes

- Semantic landmarks are used for major page regions.
- Form inputs have associated labels.
- Images include alt text when they carry meaning.
- The mobile navigation and comment form can be used with a keyboard.
- Focus states are visible in the custom CSS.

## Citations

- Express documentation: [https://expressjs.com/](https://expressjs.com/)
- Pug documentation: [https://pugjs.org/api/getting-started.html](https://pugjs.org/api/getting-started.html)
- mysql2 documentation: [https://github.com/sidorares/node-mysql2](https://github.com/sidorares/node-mysql2)
- MDN `details` / `summary` reference: [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- MDN `Intl.DateTimeFormat` reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- Starbucks website, used as visual direction reference during styling refinements: [https://www.starbucks.com/](https://www.starbucks.com/)
- **AI use disclosure**: [AI-CITATION.md](AI-CITATION.md)
