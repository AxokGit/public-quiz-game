# 🎯 Quiz Challenge Game

An interactive quiz game built with Next.js 16, TypeScript, and Tailwind CSS. Test your knowledge with fun questions and win an amazing prize!

## ✨ Features

- **Beautiful UI**: Attractive gradient design with smooth animations
- **Interactive Quiz**: 5 multiple-choice questions to test your knowledge
- **Instant Feedback**: Get immediate results after each answer
- **Success Reward**: Complete the quiz successfully to unlock a special gift! 🎁
- **Retry Option**: Failed a question? Try again with the retry button
- **Discord Integration**: Webhook notification when quiz is completed
- **Responsive Design**: Works great on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AxokGit/public-quiz-game.git
cd public-quiz-game
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. (Optional) Set up Discord webhook:
   - Copy `.env.example` to `.env.local`
   - Add your Discord webhook URL in the `.env.local` file

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_URL_HERE
```

### Running the Application

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the quiz!

### Building for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              # Landing page with Start button
│   ├── quiz/page.tsx         # Quiz interface
│   ├── success/page.tsx      # Success page with gift link
│   ├── failure/page.tsx      # Failure page with retry option
│   ├── api/
│   │   ├── questions/        # API route for quiz questions
│   │   └── webhook/          # Discord webhook integration
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── data/
│   └── questions.json        # Quiz questions database
└── public/                   # Static assets
```

## 🎮 How to Play

1. Click the **Start Quiz** button on the home page
2. Answer each multiple-choice question by selecting an option
3. Click **Next Question** to proceed
4. If you answer incorrectly, you'll see a sad emoji 😢 with a retry button
5. Complete all questions correctly to unlock your prize! 🎁

## 🔧 Customization

### Adding/Modifying Questions

Edit `data/questions.json`:

```json
[
  {
    "id": 1,
    "question": "Your question here?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswer": 2  // Index of correct answer (0-3)
  }
]
```

### Changing the Gift Link

Edit `app/success/page.tsx` and update the `href` in the gift button.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
