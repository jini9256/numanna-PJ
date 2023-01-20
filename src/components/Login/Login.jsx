import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import login from "../../assets/login.png";

const Login = () => {
  return (
    <div>
      <StBox>
        <StLogoBox>
          <StLogo src={logo} alt="logo" />
        </StLogoBox>

        <StInputBox>
          <StLogo src={login} alt="logo" style={{ maxWidth: "40%" }} />
          <StInput placeholder="아이디를 입력하세요." type="text"></StInput>
          <StInput
            placeholder="비밀번호를 입력하세요."
            type="password"
            style={{ marginTop: "20px" }}
          ></StInput>
          <StBtn>Login</StBtn>
        </StInputBox>
      </StBox>
    </div>
  );
};

export default Login;

const StBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* text-align: center; */
`;
const StLogo = styled.img`
  max-width: 65%;
  margin: 40px;
`;

const StLogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #fe6473;
  max-width: 80%;
  height: 500px;
  background-color: white;
  border-radius: 5px;
`;

const StInput = styled.input`
  width: 290px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #fa8033;
  padding: 20px;
  box-sizing: border-box;
  outline: none;

  & input:focus {
    outline: none;
    border: 1px solid #fe6473;
  }
`;

const StBtn = styled.button`
  width: 290px;
  height: 40px;
  border-radius: 5px;
  color: #f25a5a;
  background-color: white;
  margin: 20px;
  border: 1px solid #fa8033;
  &:hover {
    background-color: #f25a5a;
    color: white;
  }
`;
