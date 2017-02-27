import {
  NEW_MSG,
} from './constants';

export function sendMsg({ owner, userId, msg, imgUrl }) {
  return {
    type: NEW_MSG,
    owner,
    msg,
    imgUrl,
    userId,
  };
}
