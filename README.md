# TypeScript Chatbot

A lightweight chatbot UI built with TypeScript that supports sending messages, rendering a conversation thread, and handling loading and error states. The project focuses on clean component structure, predictable state updates, and a mobile-friendly chat layout.

## Live Demo
- Demo: (https://tobe-chatbot.vercel.app/)
- Repo: (https://github.com/Tobe01/typeScript-chatbot)

## Note: Project is still ongoing

## Features
- Send and render chat messages (user + bot)
- Empty state (“Type a message to begin”)
- Loading state while awaiting a response
- Error handling for failed requests
- Mobile-friendly composer (input area pinned to bottom)
- Clear conversation 

## Tech Stack
- TypeScript
- React
- Styling: CSS / Tailwind
- API: REST endpoint / mocked responses 

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm / yarn / pnpm

### Installation
```bash
git clone https://github.com/tobe01/typeScript-chatbot.git
cd typeScript-chatbot
npm install
npm run dev
Build
npm run build
npm run preview

Project Structure (example)
src/
  components/
  pages/
  hooks/
  services/       # API calls
  utils/
  styles/
API Notes 

Request: POST /chat

Body: { message: string }

Response: { reply: string }

Roadmap

Message persistence (localStorage)

Streaming responses

Markdown rendering for bot messages

Basic tests (unit + integration)

License

MIT

Author

Tobechi Duru (Tobe)

Portfolio: https://tobechiduru.vercel.app

GitHub: https://github.com/Tobe01

LinkedIn: https://www.linkedin.com/in/tobechiduru
