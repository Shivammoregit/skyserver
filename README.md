# SkyServer Next.js Frontend

Welcome to the SkyServer Next.js Frontend repository! 

This repository contains the ongoing migration of the SkyServer web hosting frontend from a legacy PHP architecture to a modern, fast, and SEO-friendly **Next.js (App Router)** implementation with React.

## 📂 Project Structure & Folder Purposes

To help new developers navigate the codebase, here is a breakdown of the core directories and their purposes:

- **/app**
  The heart of our modern application utilizing the Next.js 13+ App Router. This folder contains all the modern React-based page routes (e.g., `/about`, `/contact`, `/hosting`, `/vps`, etc.). As we migrate pages from PHP, their new React equivalents are established here.

- **/components**
  Holds all reusable React components utilized across multiple pages in the `/app` directory. Here you will find UI elements like `SiteHeader.js`, `SiteFooter.js`, `PricingWidget.js`, and `PageShell.js`. It also currently houses temporary legacy wrappers (like `LegacyShell` and `LegacyHtml`) that render our older HTML/PHP pages while they await full conversion.

- **/public**
  Public static assets served at the root directory (`/`). This includes all global CSS stylesheets (in the `/css` folder), fonts, imagery, logos, and scripts that do not require building or processing by Webpack/Turbopack.

- **/legacy-src**
  The original PHP and HTML source files from the old frontend architecture. Next.js accesses these files selectively to render pages that haven't been fully converted to React components yet. ***Note: This directory is slated for deletion once Phase 5 of the migration checklist is complete!***

- **/legacy-archive-root**
  Archived files and legacy configurations kept purely for historical reference and backup purposes. Active development does not touch this directory.

- **/lib**
  General utility methods, shared configuration variables, or database connection scripts used within the Next.js API or Server Components.

---

## 🚀 Getting Started

To run the application locally on your machine, ensure you have Node.js installed, then follow these steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will automatically start and can be accessed at `http://localhost:3000`.

## ⚙️ Environment Variables

For the dynamic `/page/vps-hosting/[slug]` location pages to render successfully, you need to connect to the local database. 

Create a `.env.local` file in the root directory and populate it using the `.env.example` structure:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=
```
*Note: Without a valid database configuration, the dynamic VPS location pages and your local sitemap generation will return empty.*

## 🧹 Code Quality Checks

Before committing and pushing code, ensure you run quality checks to catch any linting or compilation errors:

```bash
npm run lint      # Runs ESLint to catch syntax and style issues
npm test          # Runs the Vitest test suites
npm run build     # Compiles the Next.js app to ensure it builds successfully
```

## ☁️ Deployment (Vercel)

The site is built to be easily deployed on Vercel.
1. Connect and import the repository into your Vercel account.
2. In the Vercel project settings, set the appropriate `DB_*` environment variables matching the production database.
3. **Build command:** `npx next build` (or `npm run build`)
4. The output requires no special configurations as it utilizes standard Next.js outputs.

## 📝 Migration Details

For details on what pages remain in PHP and the step-by-step roadmap to migrating completely to modern React components, please review the `NEXT_MIGRATION_CHECKLIST.md` file in the root of the project.
