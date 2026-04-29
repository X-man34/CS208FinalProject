# AI Citation and Usage Disclosure

This file documents how AI was used in the development of this project. It is
meant to be read alongside [docs/ai-docs/codex.md](docs/as-docs/codex.md),
which logs the prompt history and the resulting work from the main Codex chat.

## AI Systems Used

### Primary coding assistant

- Tool: OpenAI Codex in the local IDE / terminal workflow
- Model family: GPT-5-based coding agent
- Exact model string: not exposed in the IDE session
- Role in the project: code generation, refactoring, debugging, planning,
  documentation drafting, local testing commands, and database verification

### AI usage notes from local documentation

This disclosure is informed by the existing documents in `docs/ai-docs`:

- [docs/ai-docs/Funny_404_Page_Design.md](docs/ai-docs/Funny_404_Page_Design.md)
- [docs/ai-docs/Image_Inclusion_in_MD.md](docs/ai-docs/Image_Inclusion_in_MD.md)
- [docs/ai-docs/codex.md](docs/ai-docs/codex.md)

Those files show prior AI interactions used for design ideation and Markdown
syntax help. This citation file expands that narrow record into a project-wide
account of actual AI use.

## What AI Was Used For

AI was used as an active development assistant across most of the project, not
just for isolated syntax questions. The main categories were:

- repository familiarization and codebase review
- bug identification and bug-report drafting
- project planning and phase planning
- implementation of routes, views, styles, and database logic
- refactoring the starter TODO app into the current Downtown Donuts site
- implementing the comments system and review features
- database testing, reseeding, and verification commands
- writing and rewriting README content
- generating commit message suggestions
- creating audit documentation such as this file

## What AI Implemented Directly

The AI assistant directly produced or substantially edited project code and
documentation in these areas:

- Express routing for site pages and comments flow
- Pug templates for home, menu, about, comments, shared layout, and error pages
- CSS for overall site styling, responsive navigation, and comments UI
- MariaDB comments schema updates
- the comment seeding script
- placeholder SVG assets for menu items
- README content and later rewrites of the more reflective sections
- this AI disclosure and the chat log summary

## What AI Did Not Implement

The AI assistant did not do everything in the project, and some things should
not be attributed to it.

- The project brief, overall direction, and many revision priorities came from
  the user.
- The user decided when to move between phases and when to stop or redirect.
- The user started the WSL database environment that made live DB testing
  possible.
- No real third-party ordering integration was implemented; the order link is a
  placeholder.
- No final production business copy exists yet; much of the site still uses
  Lorem ipsum.

## Representative Prompt Examples

These examples show the types of AI requests used during the project.

### Planning and scope

- `please framilierize yourself with the repo.`
- `review the project guideliens in project-resources and create a plan for the entire project.`
- `PLEASE IMPLEMENT THIS PLAN:` followed by the phase plan

### UI and design iteration

- `Do not use a pill based design. The overall look and feel should be like that of the websites of dunkin donuts or starbucks.`
- `modify the about page so on mobile at least it has the thing where you tap on a heading and it opens up`
- `your stars look like crap, this is not a multiple choice test. Do it liek amazon does it`

### Back-end and data work

- `implement phase 3`
- `ok try testing the DB now, I got it started on WSL`
- `make me a quick script that posts like 1000 comments, I want to test pagination`

### Documentation work

- `Please update the readme reference the example readme and add project specific stuff to it.`
- `The design decisions... are stupid and generic... use my english paper to guide your writing style.`

### AI-doc examples already stored in the repo

From [docs/ai-docs/Funny_404_Page_Design.md](docs/ai-docs/Funny_404_Page_Design.md):

- `Make a funny 404 error page that follows these brand guideliens.`
- `regenerate just the donut and coffe image so it can be used as an asset in the actual HTML`
- `add the worth it bit of paper back in, you removed it.`

From [docs/ai-docs/Image_Inclusion_in_MD.md](docs/ai-docs/Image_Inclusion_in_MD.md):

- `how to include image in md`

## How AI Output Was Handled

AI output was not treated as automatically correct. In practice, the workflow
looked like this:

1. The user gave a prompt or revision direction.
2. The AI drafted code, commands, summaries, or documentation.
3. The resulting files or behavior were checked in the local repo.
4. When an answer did not match reality, the user pushed back and the issue was
   corrected in a later turn.

Two examples matter here because they show why disclosure should be specific:

- The assistant once claimed to have completed a Phase 4 pass when it had not.
- The assistant once claimed menu images had been added when they had not.

Those misses were corrected later, and the corrected state is reflected in
[docs/as-docs/codex.md](docs/as-docs/codex.md).

## Human Role

The human author still made the controlling decisions:

- choosing the project direction
- deciding which design revisions were acceptable
- requesting specific code and content changes
- providing the writing sample used to reshape the README voice
- starting external services such as the WSL MariaDB instance
- reviewing whether the AI output matched the intended result

## Limits of This Disclosure

- This file is based on the visible chat history and current repository state.
- It documents AI assistance honestly, but it is still a reconstructed record.
- The exact OpenAI deployment sub-model was not exposed in the IDE, so the
  disclosure names the model family truthfully rather than guessing.

## Related Files

- Detailed chat log: [docs/as-docs/codex.md](docs/as-docs/codex.md)
- Local AI note on 404 design: [docs/ai-docs/Funny_404_Page_Design.md](docs/ai-docs/Funny_404_Page_Design.md)
- Local AI note on Markdown images: [docs/ai-docs/Image_Inclusion_in_MD.md](docs/ai-docs/Image_Inclusion_in_MD.md)
