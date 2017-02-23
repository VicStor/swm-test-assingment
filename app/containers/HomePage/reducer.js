import { fromJS } from 'immutable';
import { makeUsers, dataStr, makeFotos } from 'utils/fakeUsers';

import {
  MSG_IN,
  MSG_OUT,
} from './constants';

const initialState = makeUsers(10).map((user) =>
  ({
    ...user,
    chat: {
      lastMsg: dataStr(),
      msgs: [
        {
          owner: 'in',
          msgs: [
            { msgText: 'Lorem ipsum dolor sit amet, an iuvaret noluisse antiopam nec, ex mollis inermis persecuti eum. Id ius nulla zril ridens. Ad pro iuvaret placerat, vix ipsum lorem an. Ius ad magna noster animal. Dictas ceteros an nam. Ad est iisque definitiones, diam ubique id duo, commodo eligendi platonem id pro. Cu apeirian urbanitas per, vivendo facilisi invenire ea ius. Nec tale inani vulputate et. Sea no aeque equidem. Vis brute aperiam torquatos ei.', msgTime: '1' },
            { msgText: 'test in 2', msgTime: '2' },
          ],
        },
        {
          owner: 'out',
          msgs: [
            { msgText: 'test out 1', msgTime: '3' },
            { msgText: 'Lorem ipsum dolor sit amet, an iuvaret noluisse antiopam nec, ex mollis inermis persecuti eum. Id ius nulla zril ridens. Ad pro iuvaret placerat, vix ipsum lorem an. Ius ad magna noster animal. Dictas ceteros an nam. Ad est iisque definitiones, diam ubique id duo, commodo eligendi platonem id pro. Cu apeirian urbanitas per, vivendo facilisi invenire ea ius. Nec tale inani vulputate et. Sea no aeque equidem. Vis brute aperiam torquatos ei.', msgTime: '4' },
          ],
        },
      ],
      fotos: makeFotos(Math.floor(Math.random() * (10 - 4)) + 4),
    },
  })
);

function chatReducer(chat = fromJS(initialState), { type, msg, imgUrl, userId }) {
  switch (type) {
    case MSG_IN: {
      return chat;
    }
    case MSG_OUT: {
      // console.log('Msg ', type, msg, imgUrl, userId);
      const newChat = chat.toJS()
        .map((user) => {
          if (user.id === userId) {
            const newUser = ({
              ...user,
              chat: {
                ...user.chat,
                msgs: user.chat.msgs.map((msgGroup, i) => {
                  if (i === user.chat.msgs.length - 1) {
                    return ({
                      ...msgGroup,
                      msgs: [...msgGroup.msgs, { msgText: msg, msgTime: Date.now() }],
                    });
                  }
                  return msgGroup;
                }),
                fotos: imgUrl
                  ? [{ fotoUrl: imgUrl, uploadTime: Date.now() }, ...user.chat.fotos]
                  : user.chat.fotos,
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
