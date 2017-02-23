/**
*
* UserListItem
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router';
import UserLi from '../UserLi';
import Img from '../ImgFill';

const UserListItem = ({ name, avatar, id, lastMsgTime, selectUser }) => (
  <UserLi>
    <button
      className="friend-link"
      to={`/${id}`}
      onClick={() => { selectUser(id); }}
    >
      <div className="user-img-container">
        <Img src={avatar} alt={name} />
      </div>
      <div className="user-data-container">
        <span className="user-data">{name}</span>
        <span className="timestamp">{lastMsgTime}</span>
      </div>
    </button>
  </UserLi>
);

UserListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  lastMsgTime: PropTypes.string,
  avatar: PropTypes.string,
  selectUser: PropTypes.func,
};

export default UserListItem;
