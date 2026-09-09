# Sprint - Role: Senior UI/UX Engineer.

Task: Refactor the main navigation header component (`Navbar.tsx` or `Header.tsx`) to improve brand legibility, fix text layout, and remove redundant menu options.

Visual & Layout Requirements:

1. Brand Identity / Logo (Left Side):
   - Restructure the DevFest logo into a clean stacked layout:
     - Top line: "DevFest" in bold, legible typography with standard Google GDG color dots/icon next to it.
     - Sub-line (directly underneath "DevFest"): "Lauro de Freitas" in smaller uppercase/muted text (`text-xs tracking-wider`).
     - Badge: Place the "2026" year pill right beside the "DevFest" title.

2. Navigation Links (Center):
   - REMOVE the redundant "DevFest 2026" button/link from the menu list (it duplicates the brand logo).
   - Keep only necessary navigation links: "Trilhas", "Palestrantes", "Local", "Patrocinadores", "Edições Anteriores".
   - Navigation links styling: Clean horizontal layout with comfortable spacing (`gap-6` or `gap-8`), subtle hover states (`hover:text-amber-500 transition-colors`), and smooth font weight.

3. Action & Utility Controls (Right Side):
   - Theme Toggle (Dark/Light mode icon button) with subtle glassmorphic hover effect.
   - Primary CTA Button: "Ingressos" (or "Garantir Ingresso") using the vibrant brand yellow/amber color, rounded pill shape, and bold text.

4. Container & Glassmorphism Header:
   - Ensure the header uses a clean, fixed or sticky backdrop style (`backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/50`).
   - Standardize vertical padding (`py-3` or `py-4`) and horizontal alignment to align perfectly with the container grid of the hero section below.

Please update the header component code with clean Tailwind CSS and React/Framer Motion animations.
