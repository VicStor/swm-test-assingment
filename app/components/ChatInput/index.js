import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Input from 'components/TextInput';
import Img from 'components/ImgFill';

const ImgPreview = styled('div')`
  position: absolute;
  width: 200px;
  height: 200px;
  left: 10px;
  top: -210px;
  display: ${({ display }) => (display || 'none')};
`;

const InputContainer = styled('div')`
  flex: none;
  border-top: 1px solid rgba(0, 0, 0, .10);
  height: 64px;
  display: flex;
  flex-flow: row wrap;
  position: relative;
`;

function ChatInput({ onChatInputChange, onImageChange, imgPreviewUrl }) {
  let fInput;
  const getFileInput = (fi) => { fInput = fi; };
  function openFileUplod() {
    fInput.click();
  }

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="Введите сообщение"
        className="chat-input"
        onKeyUp={onChatInputChange}
      />
      <div className="chat-input-pannel">
        <button
          className="chat-input-pic"
          onClick={openFileUplod}
        />
        <input
          type="file"
          className="chat-input-file"
          onChange={onImageChange}
          ref={getFileInput}
        />
      </div>
      <ImgPreview
        display={imgPreviewUrl ? 'block' : 'none'}
      >
        <Img
          src={imgPreviewUrl}
          alt="uploaded"
          fit="cover"
        />
      </ImgPreview>
    </InputContainer>
  );
}

ChatInput.propTypes = {
  onChatInputChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  imgPreviewUrl: PropTypes.string,
};

export default ChatInput;
