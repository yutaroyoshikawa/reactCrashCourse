import React from "react";
import { NextPage } from "next";
import ChatMessage from "../components/ChatMessage";
import { useHome } from '../hooks/useHome';

const Home: NextPage = props => {
  const { state, pRef } = useHome();

  return (
    <>
      <ChatMessage userName="hoge" postedAt={new Date()}>
        hogehoge
      </ChatMessage>
      <p ref={pRef}>{state}</p>
    </>
  );
};

export default Home;
