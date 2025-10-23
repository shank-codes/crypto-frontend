# Crypto Dashboard Frontend

A responsive web UI built with **Next.js**, **React**, **Tailwind CSS**, and **Shadcn UI components** to display top 10 cryptocurrencies and interact with a chatbot assistant.

[Crypto Dashboard](https://crypto-frontend-gamma.vercel.app/)

---

## Features

- **Dashboard Page**

  - Table of top 10 coins: price, % change, market cap rank, and volume.
  - Responsive design for mobile and desktop.
  - Click a coin to see a historical price chart (last 30 days) and navigate back.

- **Chat Assistant**

  - Floating chat icon at the bottom-right.
  - Users can type natural queries about coins.
  - Assistant responds via backend API.
  - Supports greeting messages and example queries.

- **Theme Toggle**
  - Light/Dark mode toggle with Shadcn `Button` component.
  - Fully responsive and accessible.

---

## Requirements

- Node.js >= 18.x
- npm >= 9.x or yarn
- Backend API running (see backend README)
- Environment variables

---

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd crypto-frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Add .env.local:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
BACKEND_URL = http://localhost:4000
```

---

## Running the App

Development mode

```bash
npm run dev
# or
yarn dev
```

Production build

```bash
npm run build
npm start
```
