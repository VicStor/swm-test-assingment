/**
*
* UserLi
*
*/

// import React from 'react';
import styled from 'styled-components';


// function UserLi() {
//   return (
//     <div>
//     </div>
//   );
// }
// UserLi.propTypes = {
// };

const UserLi = styled.li`
  background-color: #FFF;
  height: 64px;
  position: relative;
  display: flex;
  &:hover {
    background-color: rgba(0, 0, 0, .05);
  }
`;

export default UserLi;
