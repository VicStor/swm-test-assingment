import React, { PropTypes } from 'react';
import ChatMsg from 'components/ChatMsg';
import Img from 'components/ImgFill';

function MsgGroup({ avatar, name, owner, msgs }) {
  return (
    <div className="msg-group-wrapper">
      <div className={`msg-group ${owner}`}>
        <h3>дата сообщения</h3>
        <div className="msg-wrapper">
          {
            owner === 'in' && (
              <div className="avatar-container">
                <div className="user-img-container">
                  <Img src={avatar} alt={name} />
                </div>
              </div>
            )
          }

          <div className="msg-container">
            {msgs.map((msg) => <ChatMsg key={msg.msgTime} owner={owner} {...msg} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

MsgGroup.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  owner: PropTypes.string,
  msgs: PropTypes.array,
};

export default MsgGroup;
