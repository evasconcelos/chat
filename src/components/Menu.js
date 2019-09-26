import React from 'react';
import styled from 'styled-components';
import { atLeastTabletSize } from '../theme';

export default ({ setActivePage }) => (
  <NavContainer>
    <List>
      <Item>
        <ItemText onClick={() => setActivePage('CHAT')}>Chat</ItemText>
      </Item>
      <Item>
        <ItemText onClick={() => setActivePage('SETTINGS')}>Settings</ItemText>
      </Item>
    </List>
  </NavContainer>
);

const NavContainer = styled.nav`
  border: 1px solid red;
  ${atLeastTabletSize} {
    border: 1px solid blue;
  }
`;
const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 5px;
`;
const Item = styled.li`
  padding-right: 10px;
`;
const ItemText = styled.span`
  cursor: pointer;
`;
