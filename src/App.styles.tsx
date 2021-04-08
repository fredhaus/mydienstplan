import styled, { createGlobalStyle } from "styled-components";

// export const GlobalStyle = createGlobalStyle`
//   html {
//     height: 100%;
//   }

//   body{

//     background-size: cover;
//     margin: 0;
//     padding: 0 20px;
//     display: flex;
//     justify-content: center
//   }

// * {
//   box-sizing: border-box;
//   /* font-family: 'Catamaran', sans-serif; */
// }

// `;

export const GlobalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const Background = styled.div`
  background-image: url("https://images.unsplash.com/photo-1518607692857-bff9babd9d40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80");
  background-size: cover;
  width: 100%;
`;

export const BackgroundOverlay = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.5) 100%
  );
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* opacity: 1; */
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 80vh;
  justify-content: center;
  filter: drop-shadow(0px 0px 16px white);
`;

export const HomeHeading = styled.div`
  font-size: 3rem;
  margin: 10px;
`;

export const HomeButtonWrapper = styled.div`
  margin: 50px;
  text-decoration: none;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px lightgrey solid;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
`;

export const NavbarShadow = styled.div`
  filter: drop-shadow(30px 10px 4px black);
  width: 100%;
  height: 1px;
  background-color: white;
`;

export const NavbarLogoWrapper = styled.span`
  text-decoration: none;
  margin-left: 20px;
`;

export const MenuWrapper = styled.div``;

export const MenuItemWrapper = styled.span`
  margin: 20px;
`;



export const DataInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
`;

export const DataInputNav = styled.div`
  width: 100px;
  margin: 20px;
  padding: 20px;
`;

export const DataInputFields = styled.div`
  width: 600px;
`;
