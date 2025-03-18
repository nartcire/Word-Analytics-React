import Stats from "./Stats";
import Textarea from "./Textarea";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats text={text} />
    </main>
  );
}
