import React, { PropTypes } from 'react';

import MsgPannel from 'components/MsgPannel';
import ChatInput from 'components/ChatInput';

function ChatBoard({ user, onChatInputChange, onImageChange, imgPreviewUrl }) {
  return (
    <div className="chat-pannel-container">
      <MsgPannel user={user} />
      <ChatInput
        onChatInputChange={onChatInputChange}
        onImageChange={onImageChange}
        imgPreviewUrl={imgPreviewUrl}
      />
    </div>
  );
}

ChatBoard.propTypes = {
  user: PropTypes.object.isRequired,
  onChatInputChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  imgPreviewUrl: PropTypes.string,
};

export default ChatBoard;
