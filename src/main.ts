import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

const app = document.getElementById('app')
if (app) {
  app.innerHTML = `
    <div style="padding: 2rem; font-family: system-ui;">
      <h1>Anglo Learner</h1>
      <p>Powered by Google Gemini AI</p>
    </div>
  `
}

console.log('App initialized with Gemini AI')
