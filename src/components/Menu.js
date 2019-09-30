import React from 'react';
import styled from 'styled-components';
import { atLeastTabletSize } from '../util/theme';
import l from 'util/localization';

export default ({ setActivePage, activePage }) => (
  <NavContainer>
    <List>
      <Item>
        <ItemText
          onClick={() => setActivePage('CHAT')}
          isCurrent={activePage === 'CHAT'}
        >
          {l(`Chat`)}
        </ItemText>
      </Item>
      <Item>
        <ItemText
          onClick={() => setActivePage('SETTINGS')}
          isCurrent={activePage !== 'CHAT'}
        >
          {l(`Settings`)}
        </ItemText>
      </Item>
    </List>
  </NavContainer>
);

const NavContainer = styled.nav`
  background: linear-gradient(
    180deg,
    ${props => props.theme.bg},
    ${props => props.theme.bg2}
  );
  border-bottom: 1px solid ${props => props.theme.fg};
  height: 5%;
  min-height: 40px;
  ${atLeastTabletSize} {
    background: linear-gradient(
      90deg,
      ${props => props.theme.bg},
      ${props => props.theme.bg2}
    );
    border-bottom: 0;
    border-right: 1px solid ${props => props.theme.fg};
    height: auto;
    min-height: 0;
  }
`;
const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 5px;
  ${atLeastTabletSize} {
    flex-direction: column;
  }
`;
const Item = styled.li`
  padding-right: 10px;
  ${atLeastTabletSize} {
    padding: 10px;
  }
`;
const ItemText = styled.span`
  cursor: pointer;
  user-select: none;
  font-weight: ${props => (props.isCurrent ? 'bold' : 'normal')};
`;
