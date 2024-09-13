# Soccer Chatbot

A simple chatbot application that provides soccer-related responses using the Groq Cloud API. This application is customised to answer user questions about soccer, specifically tailored to fans of Liverpool Football Club.

<!-- TOC -->

- [Soccer Chatbot](#soccer-chatbot)
  - [Fun Fact](#fun-fact)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Code Overview](#code-overview)
  - [Customisation](#customisation)
  - [Contributing](#contributing)
  - [Contact](#contact)

## Fun Fact

The chatbot’s responses are based on my brother's persona, a diehard Liverpool supporter and soccer enthusiast. The model emulates our particular interactions where he keeps me updated on soccer news and answers my many (many!) questions.

## Features

- **Interactive Chat**: Users can ask questions about soccer and receive responses.
- **Personalised Responses**: The chatbot simulates a conversation with a Liverpool FC fan who provides insightful, sarcastic summarised answers.
- **Responsive Design**: The application is designed to be user-friendly and visually appealing.

## Tech Stack

- Next.js
- React
- Groq Cloud API
- Tailwind CSS for modern and responsive design
- React hooks for state management

## Installation

To get started with the Soccer Chatbot, follow these steps:

1. **Clone the Repository**

   ```zsh
   git clone https://github.com/jediahjireh/chatbot-soccer.git
   cd chatbot-soccer
   ```

2. **Install Dependencies**

   Ensure that you have [Node.js](https://nodejs.org/) installed. Then, run:

   ```zsh
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env.local` file in the root directory and add your Groq API key:

   ```env
   GROQ_API_KEY=your-groq-cloud-api-key
   ```

   If you don't have a Groq API key, get one [here](https://console.groq.com/keys).

4. **Run the Application**

   ```zsh
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Usage

- **Ask Questions**: Type your soccer-related question into the input field and click "Ask Question" to get a response.
- **Receive Responses**: The chatbot will respond with insightful and sarcastic answers about soccer, particularly Liverpool FC.

## Code Overview

- **[`/app/page.tsx`](/app/page.tsx)**: The main frontend component where the user interacts with the chatbot. It includes the input field, button and response display.
- **[`/app/chat/route.ts`](/app/chat/route.ts)**: The backend route that handles API requests to the Groq Cloud service. It sends user queries and returns responses based on predefined chatbot behaviour.

## Customisation

- **Chatbot Behaviour**: Modify the `content` field in `getGroqChatCompletion` function within [`route.ts`](/app/chat/route.ts) to change how the chatbot responds.

## Contributing

If you wish to contribute to this project, fork the repository and submit a pull request. For any issues or feature requests, open an issue in the repository.

## Contact

For any questions or feedback, feel free to contact [me](mailto:jediahnaicker@gmail.com).

---

Happy chatting with the Soccer Chatbot!
