import React, { PropTypes } from 'react';
// import styled from 'styled-components';
import ImgFill from 'components/ImgFill';
import ChatImgs from 'components/ChatImgs';
import SectionHeader from 'components/SectionHeader';

function ChatInfo({ user, openGallery }) {
  return (
    <div className="info-pannel-container">
      <div className="info-pannel-header">
        <div className="friend-link">
          <div className="user-img-container">
            <ImgFill src={user.avatar} />
          </div>
          <div className="user-data-container">
            <span className="user-data">{user.name}</span>
            <span className="timestamp">07.12.2016</span>
          </div>
        </div>
      </div>
      <div className="info-pannel">
        <div className="user-info-container">
          <SectionHeader>Информация о друге</SectionHeader>
          <div className=""></div>
        </div>
        <ChatImgs
          msgs={user.chat.msg}
          openGallery={openGallery}
        />
      </div>
    </div>
  );
}

ChatInfo.propTypes = {
  user: PropTypes.object,
  openGallery: PropTypes.func,
};

export default ChatInfo;
