import React, { Component, PropTypes } from 'react';
// import styled from 'styled-components';

import { connect } from 'react-redux';
// import toJS from 'immutable-to-js';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// import { flexItem } from 'components/Flex';
import UsersList from 'containers/UsersList';
import Chat from 'components/Chat';

import { sendMsg } from './actions';

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
    };
  }
  onChatInputChange = (e) => {
    if (e.key === 'Enter') {
      const msg = {
        owner: 'out',
        userId: this.state.activeUserId,
        msg: e.target.value,
        imgUrl: this.state.imgPreviewUrl,
      };
      this.props.dispatch(sendMsg(msg));

      e.target.value = '';
      this.state.imgPreviewUrl && this.setState({ imgPreviewUrl: null });
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

  selectUser = (userId) => {
    // const activeUser = this.props.users.find((user) => (user.id === userId));
    this.setState({ activeUserId: userId });
  }
  render() {
    const { activeUserId, uploadedFiles, imgPreviewUrl } = this.state;
    return (
      <div className="main-container">
        <UsersList
          users={this.props.users}
          selectUser={this.selectUser}
        />
        <Chat
          user={this.props.users.find((user) => (user.id === activeUserId))}
          uploadedFiles={uploadedFiles}
          onChatInputChange={this.onChatInputChange}
          onImageChange={this.onImageChange}
          imgPreviewUrl={imgPreviewUrl}
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
