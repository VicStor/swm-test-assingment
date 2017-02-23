import {
  MSG_IN,
  MSG_OUT,
} from './constants';

export function msgOut({ userId, msg, imgUrl }) {
  return {
    type: MSG_OUT,
    msg,
    imgUrl,
    userId,
  };
}

export function sendMsg({ owner, userId, msg, imgUrl }) {
  return {
    type: owner === 'in' ? MSG_IN : MSG_OUT,
    msg,
    imgUrl,
    userId,
  };
}
