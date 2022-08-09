import styled from "styled-components";
import { variant } from "styled-system";

export const Dot = styled("div")(
  {
    position: "fixed",
    width: "90px",
    height: "90px",
    borderRadius: "100px",
    zIndex: "1",
    cursor: "grab",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "rotate(1deg)"
  },
  variant({
    prop: "color",
    variants: {
      red: {
        background: "#C1381A",
        right: "5%",
        top: "25px"
      },
      green: {
        background: "#188443",
        right: "30px",
        bottom: "60px"
      },
      blue: {
        background: "#1A40C8",
        left: "10%",
        top: "10%"
      },
      black: {
        background: "#000",
        left: "15%",
        bottom: "10%",
        color: "white"
      }
    }
  })
);
