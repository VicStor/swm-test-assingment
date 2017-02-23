import React, { PropTypes } from 'react';

import styled from 'styled-components';
import { flexComponent, flexItem } from 'components/Flex';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import makeSelectUsersList from './selectors';
// import { makeUsers } from 'utils/fakeUsers';
import UserListItem from 'components/UserListItem';
import Input from 'components/TextInput';
import SectionHeader from 'components/SectionHeader';

const ListWrapper = styled(flexComponent('div'))`
  max-width: 420px;
  min-width: 240px;
`;
const ListContainer = styled(flexItem('div'))`
  overflow-y: auto;
`;

const UsersList = ({ users, selectUser }) => (
  <ListWrapper
    flow="cn"
    flex="0 0 25%"
  >
    <SectionHeader
      jc="center"
      ai="center"
      flex="none"
      border="bottom: 1px solid rgba(0, 0, 0, .10)"
    >
      <Input
        className="list-search-input"
        type="text"
        placeholder="Search in messanger"
      />
    </SectionHeader>
    <ListContainer
      flex="auto"
    >
      <div>
        <ul>
          {
            users.map((user) => (
              <UserListItem
                key={user.id}
                {...user}
                selectUser={selectUser}
              />
            ))
          }
        </ul>
      </div>
    </ListContainer>
  </ListWrapper>
);


UsersList.propTypes = {
  users: PropTypes.array,
  selectUser: PropTypes.func,
};

export default UsersList;
