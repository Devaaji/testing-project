# Integration Testing in React / Next.js

A practical repository that demonstrates **integration testing with a user-first mindset** in React and Next.js.

Instead of testing implementation details, this project focuses on **real user behavior**: typing, clicking, submitting forms, and seeing UI changes.

---

## 🧭 Overview

This repo shows how integration tests can scale from simple interactions to real application behavior.

The examples progress gradually:

* 🟢 **Simple** — Basic user interactions (type, click)
* 🟡 **Medium** — Complete form flows with validation, API calls, and UI feedback
* 🔴 **Complex** — Real app behavior using Redux, async actions, and state-driven UI updates

The goal is simple:

> **Test what the user sees and does, not how the code is written.**

---

## 🧰 Tools Used

* **Jest** — Test runner
* **jest-environment-jsdom** — Browser-like environment
* **React Testing Library** — Test components the way users interact with them
* **@testing-library/user-event** — Simulate real user actions (type, click, tab)

---

## 📦 Installation

```bash
npm install
```

Additional package for realistic user interaction:

```bash
npm install --save-dev @testing-library/user-event
```

---

## 🟢 Simple Level — Basic Interaction

**What is tested:**

* User types into an input
* User clicks a button
* Callback receives the correct value

This level ensures the most basic interaction works as expected.

---

## 🟡 Medium Level — Form + Validation + API

**What is tested:**

* Empty input shows validation error
* Valid input triggers API call
* Failed API response shows error
* Successful API response clears error

This level tests a **complete user flow**, not just a single action.

---

## 🔴 Complex Level — Global State + Async Flow

**What is tested:**

* User triggers an async action
* Loading state appears
* Global state updates
* UI reflects the final state

Redux is treated as an implementation detail. The test only cares about what the **user can see**.

---

## ✅ What We Test

* User actions (type, click, submit)
* Form behavior
* Mocked API interactions
* State-driven UI changes

## ❌ What We Don’t Test

* CSS or styling
* Internal implementation details
* Logic already covered by libraries

---

## 🧠 Testing Philosophy

When writing a test, always ask:

1. What does the user do?
2. What should the UI show?
3. What happens next from the user’s perspective?

If the test answers those questions, it’s probably a good test.

---

## 📁 Repository Structure (Simplified)

```
/components
  ├─ SearchBox.tsx
  ├─ LoginForm.tsx
  └─ UserProfile.tsx

/store
  ├─ userSlice.ts
  ├─ index.ts
  └─ hooks.ts

/__tests__
  ├─ SearchBox.test.tsx
  ├─ LoginForm.test.tsx
  └─ UserProfile.test.tsx
```

---

## 🔗 Repository

GitHub: [https://github.com/Devaaji/testing-project](https://github.com/Devaaji/testing-project)

---

## ✨ Final Note

This repository is meant to be **practical**, **readable**, and **close to real-world usage**.

If a test reads like a user story, you’re doing it right.
