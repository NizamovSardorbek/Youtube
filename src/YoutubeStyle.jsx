import styled from "styled-components";

// NavbarStyle

export const WrapNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  background-color: #828282;
  border-radius: 10px;
  color: #c6bdbd;
  margin: 0 9%;
  padding: 0 40px;
  box-shadow: 7px 7px 7px #1b1212;
  > h4 {
    text-shadow: 7px 7px 7px #1b1212;
    :hover {
      text-shadow: 7px 7px 7px red;

      color: red;
      cursor: pointer;
    }
  }
`;
export const Nav = styled.div`
  background-color: red;
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  > h3 {
    text-shadow: 7px 7px 7px #1b1212;
    cursor: pointer;

    :hover {
      color: white;
      text-shadow: 7px 7px 7px red;
    }
  }

  > i {
    font-size: 50px;
    :hover {
      color: white;
      cursor: pointer;
    }
  }
`;
// Navbar boldi

// Search Style

export const InputWrap = styled.div`
  background-color: red;
  padding: 1.6% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Input = styled.input`
  color: #4f2222;
  font-size: 30px;
  padding: 7px 20%;
  background: grey;
  border-radius: 20px;
  box-shadow: 7px 7px 7px #1b1212;

  ::placeholder {
    color: #4f2222;
  }
  :hover {
    cursor: pointer;
  }
`;
export const InputButton = styled.button`
  padding: 16px 2.5%;
  color: black;
  border-radius: 20px;
  box-shadow: 7px 7px 7px #1b1212;

  background-color: grey;
  :hover {
    color: red;
    background-color: black;
    cursor: pointer;
  }
`;
