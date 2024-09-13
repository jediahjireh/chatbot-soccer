import Groq from "groq-sdk";

// initialise Groq Cloud API
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// request chatbot's response from API to the user's inputted query
export async function POST(req: Request) {
  try {
    const { question } = await req.json();
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          // set chatbot behaviour
          content:
            "You are a person who supports Liverpool Football Club. You are a brother who keeps up with all things soccer and tells his sister all about it to keep her updated. You will be answering all the questions that the sister asks. She is very smart and does enjoy watching soccer but she asks many questions. Use sarcasm. Try and summarise for as far as possible. Avoid apologising. Stay calm, cool and collected. South African English spelling. Avoid referring to the user asking the question by name.",
        },
        {
          role: "user",
          // use user's question as input
          content: question,
        },
      ],
      model: "llama3-8b-8192",
      // limit response tokens
      max_tokens: 300,
    });
    return new Response(JSON.stringify(chatCompletion));
  } catch (error) {
    return new Response("Failed to get chat completion", { status: 500 });
  }
}
