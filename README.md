# 🧮 Options Trading UI (Frontend Only)

A **frontend-only prototype** of an options trading interface, inspired by apps like **Betmount** and **Probo**. This React-based UI lets users explore categories, simulate trades, and view their wallet — but does **not** connect to any backend or submit real trades.   

Live Demo - https://chiragobhan.github.io/options-trading-ui/

---

## Overview

This project is primarily a **UI mockup**. It demonstrates how a typical options trading platform might look and feel to a user.

### Key Features

- **Categories Menu** – All trading categories are shown at the top of the homepage.
- **Trading Modal** – Users can simulate a trade by clicking **Yes** or **No**.
- **Live Calculations** – Quantity, price, and potential win are dynamically calculated.
- **Wallet Balance Display** – Shows available balance on the top-left by extending the side navbar.
- **Side Navbar** – Contains navigation for viewing trades and accessing the profile.
- **Responsive UI** – Works well on desktop, tablet and mobile screens.

> ⚠️ **Note:** This is strictly a frontend prototype — no backend integration, no API calls.

---

## Tech Stack

- **React** (Create React App)
- **HTML / CSS / JavaScript**
- **Custom Components** for slider, modals, and trade cards

---

## Getting Started

Clone the repository and run locally:

```bash
git clone https://github.com/chiragobhan/options-trading-ui.git
cd options-trading-ui
npm install
npm start
