import faker from 'faker';
import { times, random } from 'lodash';

export const dataStr = () => faker.date.past().toString().split(' ', 3).join(' ');

const makeFoto = () => {
  const imgId = random(100, 500);
  return ({
    fotoUrl: `https://unsplash.it/900/600?image=${imgId}`,
    uploadTime: dataStr(),
    imgId,
  });
};

const makeImg = () => {
  const imgId = random(100, 500);
  return ({
    imgUrl: `https://unsplash.it/900/600?image=${imgId}`,
    imgId,
  });
};

const makeUser = () => {
  const user = faker.helpers.contextualCard();
  return {
    ...user,
    id: faker.random.number(),
    lastMsgTime: dataStr(),
  };
};

const makeMsg = () => {
  const rand = random(0, 1);
  return ({
    owner: rand ? 'in' : 'out',
    timestamp: null,
    msg: faker.lorem.sentences(),
    img: rand ? (random(0, 5) ? null : makeImg()) : makeImg(),
  });
};

// const chat = {
//   lastMsg: dataStr(),
//   messages: [
//     {
//       owner: 'in',
//       msgs: [
//         { msgText: '', msgTime: '' },
//         { msgText: '', msgTime: '' },
//       ],
//     },
//     {
//       owner: 'out',
//       msgs: [
//         { msgText: '', msgTime: '' },
//         { msgText: '', msgTime: '' },
//       ],
//     },
//   ],
// };
// faker.lorem.sentences()

export const makeUsers = (num) => times(num, makeUser);
export const makeFotos = (num) => times(num, makeFoto);
export const makeMsgs = (num) => times(num, makeMsg);
