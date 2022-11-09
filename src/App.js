import "./App.css";

import { Configuration, OpenAIApi } from "openai";

import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);
  
  const generateImage = async () => {
    const res = await openai.createImage({
      model: "text-davinci-002",
      prompt: prompt,
      n: 1,
      size: "512x512",
    });

    setResult(res.data.data[0].url);
  };

  return (
    <div className="app-main">
      <>
        <h2>Generate an Image using Artificial Inteligence</h2>

        <textarea
          className="app-input"
          placeholder="Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
          onChange={(e) => setPrompt(e.target.value)}
          rows="10"
          cols="50"
        />
       
      </>
      <>
      <button className="button-generate" onClick={generateImage}>Generate an Image</button>
      </>

      <>
      {result.length > 0 ? (
          <img className="result-image" src={result} alt="result" />
        ) : (
          <></>
        )}
      </>
    </div>
  );
}

export default App;