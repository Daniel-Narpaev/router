import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const isActiveLink = ({isActive}) => ({color: isActive ? "black":'white'})

const Navigation = () => {
  return (
    <div>
      <NavBar>
        <NavLink
          to="/products"
          style={({ isActive }) => ({ color: isActive ? "black" : "white" })}
        >
          Products
        </NavLink>
        <NavLink to="/mycart" style={isActiveLink}>
          MyCart
        </NavLink>
        <NavLink to="/myorder" style={isActiveLink}>
          MyOrder
        </NavLink>
      </NavBar>
    </div>
  );
};

export default Navigation;

const NavBar = styled.div`
  a {
    width: 500px;
    text-decoration: none;
    font-size: 1.4rem;
    margin-right: 40px;
    font-weight: bold;
  }
`;
