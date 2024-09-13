"use client";

import { useState } from "react";
import axios from "axios";
import "./globals.css";
import Image from "next/image";
import { FileQuestion } from "lucide-react";
import { Input } from "@/components/ui/input";
import Confetti from "@/components/Confetti";

const App = () => {
  // store and update responses received from the API with a default message
  const [response, setResponse] = useState<string>(
    "Go ahead! Ask your questions. I'm listening."
  );
  // store and update the user's input
  const [value, setValue] = useState<string>("");

  // confetti firing state
  const [fireConfetti, setFireConfetti] = useState<boolean>(false);

  // update input value each time the user types
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  // form submission
  const handleSubmit = async () => {
    const response = (await axios.post("/chat", { question: value })).data
      .choices[0].message.content;
    // update the response displayed on the page
    setResponse(response);

    // trigger confetti
    setFireConfetti(true);

    // reset confetti trigger after a short delay
    setTimeout(() => setFireConfetti(false), 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-2xl mx-auto mt-4 mb-8 p-8 border-4 border-red-700 rounded-lg bg-gray-100">
        {/* input field for user's question */}
        <div className="relative">
          <label htmlFor="question" className="sr-only">
            Ask your question.
          </label>
          <Input
            id="question"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="My question is..."
            className="w-full p-4 mb-4 border border-gray-300 rounded-md text-xl px-10"
          />
          <FileQuestion className="mr-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div>
          <button
            onClick={handleSubmit}
            className="w-full p-4 bg-red-600 text-white rounded-md text-xl shadow-lg transition-colors duration-300 ease-in-out hover:bg-red-700"
          >
            Ask Question
          </button>
        </div>

        {/* response from Groq Cloud API */}
        <div className="flex items-center mt-5">
          <span className="mr-1 flex-shrink-0">
            <Image
              src={"/child-bitmoji.svg"}
              alt={"Chat bitmoji"}
              width={150}
              height={150}
            />
          </span>
          <span className="p-4 bg-white rounded-md text-xl shadow-md">
            {response}
          </span>
        </div>
      </div>
      {/* confetti component */}
      <Confetti fireConfetti={fireConfetti} />
    </div>
  );
};

export default App;
