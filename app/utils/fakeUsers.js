import faker from 'faker';
import { times } from 'lodash';

export const dataStr = () => faker.date.past().toString().split(' ', 3).join(' ');

const makeFoto = () => ({
  fotoUrl: faker.image.animals(),
  uploadTime: dataStr(),
});

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
