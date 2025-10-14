ChatGPT said:
🌐 US Bills Hub — Simple Static Website (No Login, No Admin, No Records)

Goal: Build a modern, responsive promotional website where U.S. users can explore bill categories — Internet, Home, TV, and Electric — view major providers, and be encouraged to call the toll-free number to get 25% off every month.

No registration, login, or admin panel.
No database writes or backend logic except for static content (you’ll record everything manually in your books).

The site’s purpose is purely marketing and lead-generation — clear, fast, attractive, and mobile-friendly.


1. Project Summary

Show 4 main categories:

Internet Bills

Home Services

TV & Cable

Electric Bills

For each category:

Display logos & plan highlights of major U.S. carriers (Comcast, AT&T, Verizon, Spectrum, etc.)

Show pricing and “25% OFF” badge

Prominent “Call Toll-Free Now” button

Simple static content — no payment forms, no database forms, no registration.

Site includes:

Hero banner

Category tabs

Provider cards grid

Toll-free section (call-to-action)

FAQs and contact footer

🛠️ 2. Tech Stack
Layer	Tech	Notes
Frontend	Vite + React + TypeScript	Fast, modular SPA
Styling	Tailwind CSS + shadcn/ui (optional)	Modern, responsive design
Hosting	GoDaddy VPS	Serve static files via Nginx
Assets	Local /public folder	Store images/logos locally
No backend	—	Static build only (no Express, no database yet)



🏗️ 3. Folder Structure
🖥️ 4. Page Layouts
📞 5. Toll-Free Call-to-Action Block
⚙️ 6. Environment Variables (if any)
🚀 7. Deployment on GoDaddy VPS

8. Example Homepage Text

Headline:

“Pay Your Monthly Bills the Smart Way — Get 25% OFF everymonth on Internet, Home, TV, and Electric Bills!”

Sub-text:

“We handle your bill payments so you save more every month.
Call us now at 1-800-555-9999 to start saving!”

Buttons:

Call Now

See Providers

🧠 9. No Database or Backend Yet

All provider and pricing data lives in local src/data/providers.ts.

No login, registration, or record saving.

You’ll track customer calls and details manually in your own records/books.

✅ 10. Acceptance Criteria

 Website builds successfully via Vite

 Responsive on mobile and desktop

 Hero, categories, provider cards, and CTA present

 No forms or backend logic

 “Call Now” links open the toll-free number

 Clean, attractive, modern design ready for demo
