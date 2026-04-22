**CS208 Final Project**

**Client Prototype Project**

*Downtown Donuts Website Redesign*

*Be creative. Be bold. Make it yours.*

# **Overview**

The fun part of web development is putting your own flair on things, so please go wild with your designs\! Web development is a unique blend of engineering and design. This project is your chance to show off both sides.

| 💡  Remember You may use any online resource, but you MUST cite your work. Include a citations section in your README or a separate CITATIONS file in your repository. |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

# **The Scenario**

You are a freelance web developer competing for a client contract. A local business has reached out requesting a new website. Your job is to build a prototype that demonstrates your design skills and technical abilities and convinces them to hire you for the full build.

You may create your own navigation structure and fill in content with Lorem Ipsum placeholder text. The focus is on design and functionality; the actual content would be provided later if the client selects you.

# **Client Brief**

Below is the email received from the prospective client. Read it carefully, this is your creative brief.

| Subject: Web Development Request for Downtown Donuts Website *From: John Doe \<jdoe@downtowndonuts.com\>* Hello\! I’m reaching out on behalf of Downtown Donuts, a small, family-owned donut and coffee shop that’s been serving the downtown community since 1992\. We’re looking to partner with a web developer to create a custom-built website that reflects our brand and helps us better connect with our customers. Our main goals for the website are to: Showcase our menu Link to online ordering services (UberEats, DoorDash, etc.) Share our story and history Improve our online presence to help increase foot traffic Allow customers to post comments on the website We’d like the site to have a cozy, minimal, modern feel, using our established color palette and branding. Mobile-friendliness is a top priority. We already have a logo, brand guidelines, and a digital menu (PDF). At a minimum, we need: a landing page, a menu page, an “About Us” page, and a page for customer comments. You have free range of the design and are encouraged to be as creative as possible, as long as you follow our Brand Guidelines. The domain and hosting are already handled; we just need the development work. Our goal is to launch within the next few weeks. Thanks so much, John Doe *Downtown Donuts* |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

# **Requirements**

## **Getting Started**

* [Starter Code](https://github.com/shanep/CS208-full-stack) \- A simple full-stack npm project  
* [Brand Guidelines](BrandGuidelines.pdf) \- The Brand Guidelines for the project

## **Required Pages**

Your prototype must include the following pages at a minimum:

| Page                  | Description                                                                                                                        |
| :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| **Landing Page**      | The homepage makes a strong first impression. Should capture the brand’s cozy, modern feel and draw visitors in.                   |
| **Menu**              | Showcase the donut and coffee offerings. You may embed the provided PDF, build a custom layout, or get creative.                   |
| **About Us**          | Tell the story of Downtown Donuts. Family-owned since 1992 gives it personality and warmth.                                        |
| **Customer Comments** | A page where visitors can read and post comments. This must include full-stack functionality (front-end form \+ back-end storage). |

## **Design Requirements**

* **Follow the Brand Guidelines** and adhere to the provided color palette, typography, and branding assets.

* **Mobile-friendly design**, the site must be responsive and look great on phones and tablets.

* **Cozy, minimal, modern aesthetic**, as specified by the client.

* **Links to online ordering** include buttons/links for UberEats, DoorDash, or similar services (these can be placeholder URLs).

* **Creative freedom** beyond the minimum requirements: you’re encouraged to add extra pages, animations, features, or anything that makes your prototype stand out.

# **Technical Requirements** 

The following requirements go beyond basic page creation. They are designed to test your understanding of full-stack architecture, not just your ability to produce working code. You should be prepared to explain every line you submit.

## **1\. Hand-Written CSS (No Frameworks)**

You may ***not*** use CSS frameworks such as Bootstrap, Tailwind, Bulma, or any similar library. All styling must be written by hand in your own CSS files. This includes your responsive/mobile layout; you must write your own media queries. You *may* use a CSS reset or normalize stylesheet and reference documentation/tutorials, but the final CSS must be your own work.

**Why:** Understanding the box model, layout systems (Flexbox, Grid), and responsive design from scratch is a core competency. Frameworks abstract this away.

## **2\. Full-Stack Comments System** 

The Customer Comments page must go beyond a simple form submission. Your implementation must include:

* **Server-side input validation**: Validate all user input on the server (not just the client). Reject empty fields, enforce a maximum character length, and sanitize input to prevent XSS.

* **Timestamps**: Each comment must display when it was posted (e.g., “2 hours ago” or a formatted date). The timestamp must be generated server-side.

* **Pagination or lazy loading**. If there are more than 10 comments, don’t display them all at once. Implement pagination (e.g., “Page 1 of 3”) or a “Load More” button.

* **Error handling**: Display meaningful error messages to the user when something goes wrong (e.g., the server is down or validation fails). Do not show raw error codes or stack traces.

**You must be able to explain your data flow:** What happens from the moment a user clicks “Submit” to the moment the comment appears on the page? Be ready to trace this at your demo.

## **3\. Meaningful Git History**

Your repository must demonstrate a real development workflow. This means:

* **Minimum 15 commits** spread across multiple days. A single “final commit” or a handful of massive commits will not be accepted.

* **Descriptive commit messages** that explain what changed and why (e.g., “Add server-side validation for comment length”, not “update files”).

* **Feature branching (Optional)**: Use at least two feature branches (e.g., feature/comments-api, feature/responsive-nav) and merge them into main via pull requests or merge commits.

**Why:** Your git history tells the story of how you built the project. It is one of the strongest indicators of authentic, incremental work.

## **4\. Accessibility Basics**

Your site must meet basic accessibility standards:

* All images must have meaningful alt text.

* The site must be fully navigable using only a keyboard (Tab, Enter, Escape).

* Form inputs must have associated \<label\> elements.

* Use semantic HTML elements (e.g., \<nav\>, \<main\>, \<article\>, \<footer\>) instead of generic \<div\> wrappers.

## **8\. Error States & Edge Cases**

Your application must gracefully handle the following scenarios. You will be tested on these during your demo:

1. What happens if the server/API is unreachable? (The UI should display a friendly message, not break.)

2. What happens if a user submits a comment with only whitespace?

3. What happens if a user submits extremely long input (e.g., 10,000 characters)?

4. What happens if the user rapidly double-clicks the submit button?

Your README must include an **Edge Cases** section describing how you handled each of these.

# **README Requirements**

Your repository must include a comprehensive README.md with the following sections. Each section should be written in your own words; generic or boilerplate READMEs will not receive credit.

| Section                    | What to Include                                                                                                                                                  |
| :------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Setup Instructions**     | Step-by-step instructions for running your project locally. Another student should be able to clone your repo and get it running by following your instructions. |
| **Design Decisions**       | Explain at least 3 specific design choices you made and why. Reference the client brief where relevant.                                                          |
| **Edge Cases**             | How you handled each required error state.                                                                                                                       |
| **Challenges & Learnings** | Describe at least 2 specific technical challenges you encountered and how you solved them. Include what you tried that didn’t work.                              |
| **Citations**              | All external resources used (tutorials, StackOverflow answers, documentation, etc.).                                                                             |

# **Submission Checklist**

Use this checklist to verify your submission is complete:

### **Core**

* Built on the full-stack starter code 

* Includes all four required pages (Landing, Menu, About Us, Comments)

* Follows the provided Brand Guidelines

* Hand-written CSS (no frameworks)

* Links to online ordering services are included

### **Technical**

* Comments system with server-side validation, timestamps, pagination, and error handling

* At least 15 meaningful commits across multiple days with feature branches

* Accessibility basics implemented (alt text, keyboard nav, labels, semantic HTML, contrast)

* Error states and edge cases handled and documented

### **Documentation**

* README includes all required sections

* All external resources are properly cited

# **Submission & Grading**

| ⚠️  Important Submit the URL to your repository to Canvas to get credit. |
| :---------------------------------------------------------------------- |