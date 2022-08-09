import { HeaderWrapper } from "./styles";
import { useState } from "react";

export const Header = () => {
  const [header, setHeader] = useState(false);

  const changeHeader = () => {
    if (window.scrollY > 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeHeader);

  return (
    <HeaderWrapper className={header ? "active" : ""}>
      <h1>Access to Medicines Book Exchange</h1>
    </HeaderWrapper>
  );
};
