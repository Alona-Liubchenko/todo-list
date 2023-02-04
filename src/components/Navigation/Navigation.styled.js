import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled(NavLink)`
  align-items: center;
  padding: 10px;
  border-radius: 10%;
  text-decoration: none;
  color: #0e0e9c;
  cursor: pointer;
  &.active {
    background: #ffffffb3;
    color: #43282d;
  }
`;