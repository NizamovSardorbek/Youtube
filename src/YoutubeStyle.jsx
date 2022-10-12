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
  box-shadow: 7px 7px 7px #aa2424;
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
  background-color: #0f0f0f;

  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  > h3 {
    text-shadow: 7px 7px 7px #a52727;
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
  background-color: #0f0f0f;
  padding: 1.6% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Input = styled.input`
  /* color: #4f2222; */
  color: #0c0808;
  font-size: 30px;
  padding: 7px 20%;
  background: grey;
  border-radius: 20px;
  box-shadow: 0px 7px 7px #9a2e2e;

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
  box-shadow: 0px 7px 7px #9a2e2e;

  background-color: grey;
  :hover {
    color: red;
    background-color: black;
    cursor: pointer;
  }
`;

// Search end

// Table Start

export const TableWrap = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  grid-gap: 80px;
  border: 1px solid red;
  padding: 5% 0;
  height: 500px;
  overflow: auto;
`;

export const TableData = styled.div`
  margin-left: 40px;
  border: 1px solid red;
  width: 200px;
  height: 200px;
`;

export const ImgTable = styled.img`
  width: 200px;
  height: 200px;
  box-shadow: 7px 7px 7px #e59090;

  :hover {
    box-shadow: 7px 7px 7px #ab3c3c;
    cursor: pointer;
  }
`;

export const NameTable = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  > h4 {
    color: white;
    :hover {
      color: red;
      text-shadow: 7px 7px 7px #d21616;
      cursor: pointer;
    }
  }
`;
