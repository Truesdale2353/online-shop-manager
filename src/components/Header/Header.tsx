import { colors } from "@/assets";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeaderCartWithData } from "./components/HeaderCartWithData";

const StyledHeader = styled.header`
  background-color: ${colors.indigo};
  padding: 1rem;
`;

const Logo = styled.h1`
  color: ${colors.white};
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const Nav = styled.nav`
  margin-top: 1rem;
  display: flex;
`;

const NavLink = styled(Link)`
  color: ${colors.white};
  margin-right: 1rem;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <Logo>Logo</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product-list">Product List</NavLink>
        <NavLink to="/delivery-requests">Delivery Requests</NavLink>
        {/* <NavLink to="/services">Services</NavLink> */}
        <HeaderCartWithData />
      </Nav>
    </StyledHeader>
  );
};

export { Header };
