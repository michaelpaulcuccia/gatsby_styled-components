import styled from "styled-components";

export const MainWrapper = styled.div`
  //background-color: black;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  //background-color: gray;
  margin: 15px 15px;
  width: 1032px;

  @media (max-width: 768px) {
    width: 700px;   
  }
`;

export const FullWidth = styled.div`
  //background-color: green;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 10px;
`;

//Centered, offers margins on sides
export const SubCenteredWidth = styled.div`
  //background-color: yellow;
  margin: 5px 30px;
`;