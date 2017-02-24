import React, { Component, PropTypes } from 'react';
// import styled from 'styled-components';

import { connect } from 'react-redux';
// import toJS from 'immutable-to-js';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import Lightbox from 'react-images';

// import { flexItem } from 'components/Flex';
import UsersList from 'containers/UsersList';
import Chat from 'components/Chat';
// import Img from 'components/ImgFill';

import { sendMsg } from './actions';

const replyMsg = {
  owner: 'in',
  msg: 'И я тебе рад!!!',
};

// const MainContainer = flexItem('div');
// styled(flexComponent('div'))`
// flex: auto;
// display: flex;
// background-color: #fff;
// font-size: 14px;
// `;


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUserId: props.users[0].id,
      uploadedFiles: [],
      imgPreviewUrl: null,
      isOpenGallery: false,
    };
  }
  onChatInputChange = (e) => {
    if (e.key === 'Enter') {
      this.props.dispatch(sendMsg({
        owner: 'out',
        userId: this.state.activeUserId,
        msg: e.target.value,
        imgUrl: this.state.imgPreviewUrl,
      }));

      setTimeout(() => {
        console.log('Dispatch responce');
        this.props.dispatch(sendMsg(replyMsg));
      }, 550);

      e.target.value = '';
      this.setState({ imgPreviewUrl: null });
    }
  }
  onImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.setState({
        uploadedFiles: [file],
        imgPreviewUrl: reader.result,
      });
    };
  }
  openGallery = (imgIndex) => () => {
    this.setState({
      isOpenGallery: true,
      currentImgIndex: imgIndex,
    });
  }
  closeGallery = () => {
    this.setState({ isOpenGallery: false });
  }
  prevImg = () => {
    let { currentImgIndex } = this.state;

    currentImgIndex = currentImgIndex - 1 < 0
    ? this.props.users
      .find((user) => (user.id === this.state.activeUserId))
      .chat.fotos.length - 1
    : currentImgIndex - 1;

    this.setState({ currentImgIndex });
  }

  nextImg = () => {
    let { currentImgIndex } = this.state;
    currentImgIndex = this.props.users
      .find((user) => (user.id === this.state.activeUserId))
      .chat.fotos.length - 1 === currentImgIndex
    ? 0
    : currentImgIndex + 1;

    this.setState({ currentImgIndex });
  }
  thumbClick = (imgIndex) => {
    this.setState({
      currentImgIndex: imgIndex,
    });
  }
  selectUser = (userId) => {
    this.setState({ activeUserId: userId });
  }
  renderImages() {
    return this.props.users
      .find((user) => (user.id === this.state.activeUserId))
      .chat.fotos.map((foto) => ({ src: foto.fotoUrl }));
  }

  render() {
    const {
      activeUserId,
      uploadedFiles,
      imgPreviewUrl,
      isOpenGallery,
      currentImgIndex,
    } = this.state;
    return (
      <div className="main-container">
        <UsersList
          users={this.props.users}
          selectUser={this.selectUser}
        />
        <Chat
          user={this.props.users.find(({ id }) => (id === activeUserId))}
          uploadedFiles={uploadedFiles}
          onChatInputChange={this.onChatInputChange}
          onImageChange={this.onImageChange}
          imgPreviewUrl={imgPreviewUrl}
          openGallery={this.openGallery}
        />
        <Lightbox
          isOpen={isOpenGallery}
          images={this.renderImages()}
          onClose={this.closeGallery}
          onClickPrev={this.prevImg}
          onClickNext={this.nextImg}
          showThumbnails
          onClickThumbnail={this.thumbClick}
          currentImage={currentImgIndex}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  users: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { users: state.get('users').toJS() };
}
function mapDispatchToProps(dispatch) {
  return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
