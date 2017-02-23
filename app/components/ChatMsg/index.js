import React, { PropTypes } from 'react';

function ChatMsg({ owner, msgText, msgTime }) {
  return (
    <div className={`chat-msg ${owner}`}>
      <span>{msgText}</span>
    </div>
  );
}
ChatMsg.propTypes = {
  owner: PropTypes.string,
  msgText: PropTypes.string,
  msgTime: PropTypes.string,
};

export default ChatMsg;
