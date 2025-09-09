# React UI Library

FRONTEND ENGINEER PROBLEM 1: 
SUBMITTED BY:
```
Gokulakrishnan G
2022cs0792@svce.ac.in
Final Year B.E CSE
```

A UI Component Library built using React, TypeScript, TailwindCSS, and Storybook. This library provides a set of reusable, fully-typed, and customizable components for building modern web applications quickly. Currently, it includes essential components such as Button, Card, Modal, and Input, each designed with accessibility, responsiveness, and ease of integration in mind.
These components are fully documented in Storybook, allowing developers to explore, test, and integrate them seamlessly into their projects.

```
🚀 Features

⚡ Blazing-Fast Development with Vite – instant reloads and optimized builds
🎨 TailwindCSS-Powered Styling – fully customizable utility-first design
🧩 Reusable & Type-Safe Components – written entirely in TypeScript
📚 Interactive Documentation with Storybook – explore and test components live
✅ Robust Testing – unit and integration tests with Vitest & Testing Library 
```

📦 Installation  

Clone the repo and install all the dependencies:  

```bash
git clone https://github.com/your-username/simple-ui.git
cd simple-ui
npm install




make sure the project structure looks like this
simple-ui/
 ┣ .storybook/          # Storybook configuration
 ┣ dist/                # Build output
 ┣ node_modules/        # Dependencies
 ┣ src/                 # Components source code
 ┣ .eslintrc.cjs        # ESLint config
 ┣ package.json         # Project metadata & dependencies
 ┣ postcss.config.js    # PostCSS config
 ┣ tailwind.config.js   # Tailwind config
 ┣ tsconfig.json        # TypeScript config
 ┣ vite.config.ts       # Vite bundler config
 ┣ README.md            # Project documentation

```
Installation

Install the library in your project:
```bash
npm install simple-ui
# or
yarn add simple-ui
```

🛠 Development

Setup andRun Storybook for component development:
```bash
# Install Storybook
npx sb init
# Run Storybook
npm run storybook
# or
yarn storybook
```

## Getting Started

We leverage Storybook as a showcase of the various components implemented by this library.
To launch Storybook run:

```bash
yarn storybook
```

or

```bash
npm run storybook
```

Run tests:
Vitest Setup

Vitest is used for unit and integration tests:
```bash
# Install Vitest and Testing Library if not included
npm install -D vitest @testing-library/react @testing-library/jest-dom
# Run tests in Node environment
npx vitest
# Run tests in browser environment
npx vitest --browser
```
“Tests can also be executed directly through the UI by selecting the ‘Run Test’ option.”

To Build the library:
```bash
npm run build
   or
yarn build
```

## Built With

- [Vite](https://vitejs.dev/) - The web framework used




