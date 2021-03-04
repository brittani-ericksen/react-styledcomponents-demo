import SubTitle from "./SubTitle";

import Styled from "styled-components";

const Wrapper = Styled.div`
  color: purple;
  background-color: gray;
  padding: 16px;
`;

const Banner = (props) => {
  const { message } = props;
  return (
    <Wrapper>
      {message}
      <SubTitle>This is a subtitle in the banner</SubTitle>
    </Wrapper>
  );
};

export default Banner;
