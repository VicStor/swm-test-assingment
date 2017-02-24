import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { flexComponent } from 'components/Flex';
import ChatInfo from 'components/ChatInfo';
import ChatBoard from 'components/ChatBoard';
import SectionHeader from 'components/SectionHeader';

const FlexDiv = flexComponent('div');
const ChatHeader = flexComponent(SectionHeader);
const FlexWrapper = styled(FlexDiv)`
  border-left: 1px solid rgba(0, 0, 0, .20);
  min-width: 0;
`;

function Chat({
  user,
  onChatInputChange,
  uploadedFiles,
  onImageChange,
  imgPreviewUrl,
  openGallery,
}) {
  return (
    <FlexWrapper
      cn
      flex="3"
    >
      <ChatHeader
        jc="center"
        ai="center"
        border="bottom: 1px solid rgba(0, 0, 0, .10)"
      >
        <p>{user.name}</p>
      </ChatHeader>
      <FlexDiv
        rn
        flex="auto"
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
          openGallery={openGallery}
        />
      </FlexDiv>
    </FlexWrapper>
  );
}

Chat.propTypes = {
  user: PropTypes.object.isRequired,
  onChatInputChange: PropTypes.func.isRequired,
  openGallery: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  uploadedFiles: PropTypes.array,
  imgPreviewUrl: PropTypes.string,
};

export default Chat;
