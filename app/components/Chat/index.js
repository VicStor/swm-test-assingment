import React, { PropTypes } from 'react';
import styled from 'styled-components';
// import TextInput from 'components/TextInput';
import { flexComponent } from 'components/Flex';
import ChatInfo from 'components/ChatInfo';
import ChatBoard from 'components/ChatBoard';
import SectionHeader from 'components/SectionHeader';

const FlexDiv = flexComponent('div');

const ChatHeader = styled(SectionHeader)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(FlexDiv)`
  border-left: 1px solid rgba(0, 0, 0, .20);
  min-width: 0;
`;
function Chat({ user, onChatInputChange, uploadedFiles, onImageChange, imgPreviewUrl }) {
  return (
    <Wrapper
      flex="3"
      flow="cn"
    >
      <ChatHeader
        border="bottom: 1px solid rgba(0, 0, 0, .10)"
      >
        <p>{user.name}</p>
      </ChatHeader>
      <FlexDiv
        flex="auto"
        flow="rn"
      >
        <ChatBoard
          user={user}
          onChatInputChange={onChatInputChange}
          onImageChange={onImageChange}
          imgPreviewUrl={imgPreviewUrl}
        />
        <ChatInfo
          user={user}
          uploadedFiles={uploadedFiles}
        />
      </FlexDiv>
    </Wrapper>
  );
}

Chat.propTypes = {
  user: PropTypes.object.isRequired,
  onChatInputChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  uploadedFiles: PropTypes.array,
  imgPreviewUrl: PropTypes.string,
};

export default Chat;
