import React, { useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import ChatMessage from "../components/ChatMessage";

const Home: NextPage = props => {
  const [hoge, updateHoge] = useState<string>("");

  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    console.log("mounted!");
    updateHoge("hoge");
    pRef.current.innerHTML = "huga";
  }, []);

  return (
    <>
      <ChatMessage userName="hoge" postedAt={new Date()}>
        hogehoge
      </ChatMessage>
      <p ref={pRef}>{hoge}</p>
    </>
  );
};

export default Home;
