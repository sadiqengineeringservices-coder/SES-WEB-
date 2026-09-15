# sesweb
# Sadiq Engineering Services - Web Platform (`sesweb`)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000)

Welcome to the official web application repository for **Sadiq Engineering Services (SES)**. This repository houses the front-end source code for the SES web platform, built with performance, accessibility, and modern web standards in mind.

---

##  Project Overview

**SES-WEB** serves as the primary digital presence for Sadiq Engineering Services. It delivers information regarding engineering solutions, service portfolios, client engagement, and project updates.

* **High Performance**: Built with Vite for rapid module bundling and instant HMR (Hot Module Replacement).
* **Type-Safe**: Full TypeScript coverage for safe, scalable development.
* **Seamless Deployment**: Optimized for automated CI/CD pipelines via Vercel.

---

## Tech Stack

* **Framework/Library**: [React](https://react.dev/)
* **Build Tool**: [Vite](https://vitejs.js.org/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Deployment**: [Vercel](https://vercel.com/)
* **Package Manager**: `npm`

---

## Project Structure

```text
SES-WEB/
├── public/              # Static assets (favicons, images, public files)
├── src/                 # Application source code
│   ├── assets/          # Global styles, icons, and media files
│   ├── components/      # Reusable UI components
│   ├── pages/           # View pages / routes
│   └── main.ts          # Application entry point
├── index.html           # Main HTML entry file
├── package.json         # Dependencies and project scripts
├── tsconfig.json        # TypeScript master configuration
├── tsconfig.app.json    # Application-specific TS config
├── tsconfig.node.json   # Node-specific TS config (Vite toolchain)
├── vite.config.ts       # Vite configuration
└── vercel.json          # Vercel deployment configuration
