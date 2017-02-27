import React, { PropTypes } from 'react';
// import styled from 'styled-components';
import MsgGroup from 'components/MsgGroup';
import { groupMsgs } from 'utils/dataUtils';

function MsgPannel({ user }) {
  const { avatar, name } = user;
  return (
    <div className="chat-board">
      {
        user.chat.msg
        .reduce(groupMsgs, [])
        .map((msgGroup, i) => (
          <MsgGroup
            key={i}
            avatar={avatar}
            name={name}
            {...msgGroup}
          />
        ))
      }
    </div>
  );
}

MsgPannel.propTypes = {
  user: PropTypes.object,
};

export default MsgPannel;
