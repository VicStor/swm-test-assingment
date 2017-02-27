import { fromJS } from 'immutable';
import { random } from 'lodash';
import { makeUsers, dataStr, makeMsgs } from 'utils/fakeUsers';


import {
  NEW_MSG,
} from './constants';

const initialState = makeUsers(10).map((user) =>
  ({
    ...user,
    chat: {
      lastMsg: dataStr(),
      msg: makeMsgs(random(1, 15)),
    },
  })
);

function chatReducer(chat = fromJS(initialState), { type, owner, msg, imgUrl, userId }) {
  switch (type) {
    case NEW_MSG: {
      const newChat = chat.toJS()
        .map((user) => {
          if (user.id === userId) {
            const newUser = ({
              ...user,
              chat: {
                ...user.chat,
                msg: [
                  ...user.chat.msg,
                  {
                    owner,
                    timestamp: Date.now(),
                    msg,
                    img: imgUrl ? {
                      imgUrl,
                      imgId: null,
                    } : null,
                  }],
              },
            });
            return newUser;
          }
          return user;
        });
      return fromJS(newChat);
    }
    default:
      return chat;
  }
}

export default chatReducer;
