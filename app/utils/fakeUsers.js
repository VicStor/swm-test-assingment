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

const makeUser = () => {
  const user = faker.helpers.contextualCard();
  return {
    ...user,
    id: faker.random.number(),
    lastMsgTime: dataStr(),
  };
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
