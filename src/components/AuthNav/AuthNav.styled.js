import styled from "styled-components"
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: blue;
  font-weight: 500;

  &.active {
    background-color: #d0d0d0;
  }
`;
