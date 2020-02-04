import React from "react";

interface Props {
  userName: string;
  postedAt: Date;
};

const ChatMessage: React.FC<Props> = props => {
  return (
    <div>
      {props.children}
      {props.postedAt.toUTCString()}
    </div>
  )
};

export default ChatMessage;
