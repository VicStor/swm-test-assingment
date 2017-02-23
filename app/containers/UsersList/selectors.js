import { createSelector } from 'reselect';

/**
 * Direct selector to the usersList state domain
 */
const selectUsersListDomain = () => (state) => state.get('usersList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UsersList
 */

const makeSelectUsersList = () => createSelector(
  selectUsersListDomain(),
  (substate) => substate.toJS()
);

export default makeSelectUsersList;
export {
  selectUsersListDomain,
};
