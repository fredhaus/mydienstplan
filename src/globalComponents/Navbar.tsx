import React from "react";
import { Link } from "react-router-dom";
import { Store } from "../utils/Store";

import {
  NavbarWrapper,
  MenuWrapper,
  MenuItemWrapper,
  NavbarLogoWrapper,
} from "../App.styles";

const linkStyle = { textDecoration: "none", color: "black" };

function Navbar() {
  const { state, dispatch } = React.useContext(Store);

  return (
    <>
      <NavbarWrapper>
        <NavbarLogoWrapper>
          <Link style={linkStyle} to="/">
            Instant<b style={{ color: "#fa7f38" }}>Roster</b>
          </Link>
        </NavbarLogoWrapper>
        <MenuWrapper>
          <button onClick={() => console.log(state)}>
            _________CLG Store State
          </button>
          <MenuItemWrapper>
            <Link style={linkStyle} to="/">
              Create
            </Link>
          </MenuItemWrapper>
          <MenuItemWrapper>
            {" "}
            <Link style={linkStyle} to="/">
              About
            </Link>
          </MenuItemWrapper>
          <MenuItemWrapper>
            {" "}
            <Link style={linkStyle} to="/">
              Login
            </Link>
          </MenuItemWrapper>
        </MenuWrapper>
      </NavbarWrapper>
    </>
  );
}

export default Navbar;
