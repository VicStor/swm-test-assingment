import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Img from 'components/ImgFill';
import SectionHeader from 'components/SectionHeader';

const ImgBtn = styled.button`
  display: block;
  flex: 0 0 33.33%;
  position: relative;
  &::before {
    content: '';
    padding-top: 100%;
    display: block;
  }
`;
const ImgWrapper = styled.div`
  position:  absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2px;
`;

function ChatImgs({ fotos, openGallery }) {
  return (
    <div className="chat-img-container">
      <SectionHeader>Фотографии в чате</SectionHeader>
      <div className="imgs-wrapper">
        {
          fotos.map((foto, i) => (
            <ImgBtn
              onClick={openGallery(i)}
              key={i}
            >
              <ImgWrapper>
                <Img
                  src={foto.fotoUrl}
                  fit="cover"
                />
              </ImgWrapper>
            </ImgBtn>
          ))
        }
      </div>
    </div>
  );
}

ChatImgs.propTypes = {
  fotos: PropTypes.array,
  openGallery: PropTypes.func.isRequired,
};

export default ChatImgs;
