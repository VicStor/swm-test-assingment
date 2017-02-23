/**
*
* Chat
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';
import Img from 'components/ImgFill';
import SectionHeader from 'components/SectionHeader';


function ChatImgs({ fotos }) {
  return (
    <div className="chat-img-container">
      <SectionHeader>Фотографии в чате</SectionHeader>
      <div className="imgs-wrapper">
        {
          fotos.map((foto) => (
            <div className="chat-img">
              <Img src={foto.fotoUrl} fit="cover" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

ChatImgs.propTypes = {
  fotos: PropTypes.array,
};

export default ChatImgs;
