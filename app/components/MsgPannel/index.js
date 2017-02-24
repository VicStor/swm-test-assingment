/**
*
* Chat
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';
import MsgGroup from 'components/MsgGroup';

function MsgPannel({ user }) {
  const { avatar, name } = user;
  return (
    <div className="chat-board">
      {
        user.chat.msgs.map((msgGroup, i) => (
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
