import React, { useState, useEffect } from "react";
import OpenAI from "openai";
import './ChatGPT.css'

const ChatGPT = () => {
  const [response, setResponse] = useState("");
  const [input, setInput] = useState("");
  const [openAI, setOpenAI] = useState(null);

  useEffect(() => {
    const openAI = new OpenAI({ 
      apiKey: "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" 
    });
    setOpenAI(openAI);
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await openAI.complete({
      engine: "davinci",
      prompt: input,
      maxTokens: 150,
      n: 1,
      stop: "\n",
    });
    setResponse(result.data.choices[0].text);
    setInput("");
  };

  return (
    <div className="new-expense">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Ask a question"
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default ChatGPT;
