import { useState, useEffect } from "react";
import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/components/prism-jsx"
import Prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function App() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  async function reviewCode() {
    try {
      setLoader(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/v1/ai/get-review`,
        { code }
      );

      setReview(response.data);

      console.log(response.data);

      setLoader(false);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    } 
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                Prism.highlight(code, Prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,

                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            ></Editor>
          </div>
          
          <div className="review" onClick={reviewCode}>
            Review
          </div>
        </div>
        <div className="right">
          {loader == false ? (
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          ) : (
            <DotLottieReact
              src="https://lottie.host/b9c336d5-c863-4180-99f4-95a8befada2e/Kz8jPX320U.lottie"
              loop
              autoplay
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
