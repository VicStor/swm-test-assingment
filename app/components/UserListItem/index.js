import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import Img from '../ImgFill';

const UserLi = styled.li`
  background-color: #FFF;
  height: 64px;
  position: relative;
  display: flex;
  &:hover {
    background-color: rgba(0, 0, 0, .05);
  }
`;

const UserListItem = ({ name, avatar, id, lastMsgTime, selectUser }) => (
  <UserLi>
    <Link
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
    </Link>
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
