import Banner from "./components/Banner";
import SubTitle from "./components/SubTitle";

import Styled from "styled-components";

const Title = Styled.h1`
  font-size: 64px;
  color: purple;
`;

export default function App() {
  return (
    <div className="App">
      <Banner message={"this is the banner"} />
      <Title>Hello CodeSandbox</Title>
      <SubTitle>Start editing to see some magic happen!</SubTitle>
    </div>
  );
}
