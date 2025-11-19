⚡ eeeresources jntugv

eeeresources jntugv is a student-driven academic platform I designed specifically for the Electrical & Electronics Engineering (EEE) department at JNTU-GV.

I built this platform to solve a simple but frustrating problem: resources like lecture notes, previous question papers, and lab manuals are often scattered across WhatsApp groups or lost in drive folders. This project serves as a centralized, searchable digital library where students can access everything they need effortlessly.

🚀 Features

🎓 For Students (Public Access)

📚 Comprehensive Library: Access a curated collection of resources for all 4 years of the EEE curriculum.

🔍 Smart Search: Instantly filter subjects or find specific files using the global search bar powered by Supabase.

🗂️ Organized Structure: Subjects are intuitively categorized by difficulty level (Basics, Intermediate, Advanced) and years.

📱 Google Drive-Style UI: A clean, responsive file grid with preview icons that feels familiar and easy to use.

⚡ Mobile-First Design: Fully optimized for smartphones and tablets, so you can study on the go.

🔓 No Login Required: I believe education should be barrier-free, so students get instant access to all materials.

🛡️ For Admins (Secure Management)

🔐 Role-Based Access Control (RBAC):

Super Admin: I have retained controls to manage the admin team (add/remove admins).

Content Admin: Trusted student representatives can upload and manage files for their respective years.

📊 Dashboard: A central command center to oversee the platform's activity.

📂 File Manager: A powerful UI to upload, rename, move, or delete files without touching the database directly.

☁️ Virtual Folder System: Automatically organizes uploads into a clean Subject/Category/Filename structure in cloud storage.

🛠️ Tech Stack

I chose a modern, scalable stack to ensure performance and ease of maintenance:

Frontend: Next.js 14 (App Router, Server Components for speed)

Styling: Custom CSS (I avoided heavy frameworks like Tailwind to keep the design unique and "human-made")

Database & Auth: Supabase (PostgreSQL for data, Row Level Security for protection)

Storage: Supabase Storage (Secure hosting for PDFs and Docs)

Deployment: Vercel (For instant global deployment)

⚙️ Local Development Setup

If you want to run this project on your local machine to test features or fix bugs, follow these steps:

1. Clone the Repository

git clone [https://github.com/Krishna2646/eeeresourcesjntugv.git](https://github.com/Krishna2646/eeeresourcesjntugv.git)
cd eeeresourcesjntugv


2. Install Dependencies

npm install


3. Configure Environment Variables

Create a .env.local file in the root directory. You will need your own Supabase project credentials for this to work.

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key


4. Run the Development Server

npm run dev


Open http://localhost:3000 in your browser to see the site live!

🗄️ Database Schema

For those interested in the backend, I use a relational PostgreSQL schema hosted on Supabase:

Tables

subjects: Stores subject names and difficulty levels.

id (int8), name (text), level (int2 - defines color coding)

resources: Metadata for uploaded files.

id (int8), file_name, file_url, file_type, category (e.g., Unit 1), subject_id (FK)

user_roles: Manages admin permissions.

id (uuid, FK to auth.users), role ('admin' or 'super_admin')

Security

Row Level Security (RLS) is enabled on all tables to prevent unauthorized access.

Public: Can SELECT (read) subjects and resources.

Admins: Can INSERT, UPDATE, and DELETE resources.

Super Admins: Can manage the user_roles table.

🤝 Contributing

I built this for the community, and I welcome help from my fellow students! If you know how to code and want to improve the site (e.g., fix a bug, add a feature, or improve the UI), here is how you can contribute:

Fork this repository to your own GitHub account.

Create a new branch for your feature (git checkout -b feature/AmazingFeature).

Make your changes and commit them (git commit -m 'Add some AmazingFeature').

Push to your branch (git push origin feature/AmazingFeature).

Open a Pull Request on this repository, and I will review it!

Note: If you just want to upload notes and don't code, please contact me to become a Content Admin instead.

📜 License

Distributed under the MIT License. See LICENSE for more information.

<div align="center">
<strong>Built with ❤️ by the EEE Students of JNTU-GV</strong>
</div>
