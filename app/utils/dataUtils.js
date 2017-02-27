// {
//   owner: 'out',
//   msgs: [
//     { msgText: 'test out 1', msgTime: '3' },
//     { msgText: 'Lorem ipsum dolor sit amet, an iuvaret noluisse antiopam nec, ex mollis inermis persecuti eum. Id ius nulla zril ridens. Ad pro iuvaret placerat, vix ipsum lorem an. Ius ad magna noster animal. Dictas ceteros an nam. Ad est iisque definitiones, diam ubique id duo, commodo eligendi platonem id pro. Cu apeirian urbanitas per, vivendo facilisi invenire ea ius. Nec tale inani vulputate et. Sea no aeque equidem. Vis brute aperiam torquatos ei.', msgTime: '4' },
//   ],
// },
// {
//   owner: "out",
//   timestamp: null,
//   msg: null || 'some string',
//   img: {
//     imgUrl: "https://unsplash.it/900/600?image=214",
//     imgId: 214,
//   },
// }
function addMsgGroup(groups, msg) {
  return ([
    ...groups,
    {
      owner: msg.owner,
      msgs: [msg.msg],
    },
  ]);
}

export function groupMsgs(groups, msg) {
  const groupsLastIndex = groups.length - 1;
  if (msg.msg === '' || msg.msg === null) {
    return groups;
  }
  if (groupsLastIndex < 0) {
    return addMsgGroup(groups, msg);
  }
  if (groups[groupsLastIndex].owner === msg.owner) {
    return groups.map((group, groupI) => {
      if (groupsLastIndex === groupI) {
        return ({
          ...group,
          msgs: [
            ...group.msgs,
            msg.msg,
          ],
        });
      }
      return group;
    });
  }
  return addMsgGroup(groups, msg);
}
