import styled from 'styled-components';


function borderPosition(border) {
  return border.split(':', 2)[0];
}

function borderProp(border) {
  return border.split(':', 2)[1];
}

const SectionHeader = styled.div`
  flex: none;
  height: 50px;
  padding: 8px;
  ${({ border }) => border ? `border-${borderPosition(border)}: ${borderProp(border)};` : ''}
`;

export default SectionHeader;
