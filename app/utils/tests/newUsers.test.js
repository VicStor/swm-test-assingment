import makeUsers from '../fakeUsers';

describe('test makeUsers to produce fake user data', () => {
  it('check number of users', () => {
    const users = makeUsers(10);
    expect(users.length).toEqual(10);
  });
});
