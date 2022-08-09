import Draggable from "react-draggable";
import { Dot } from "./styles";

export const Dots = () => (
  <>
    <Draggable>
      <Dot color="black">
        <a href="https://twitter.com/home">Index</a>
      </Dot>
    </Draggable>
    <Draggable>
      <Dot color="red">
        <a href="https://twitter.com/home">About</a>
      </Dot>
    </Draggable>
    <Draggable>
      <Dot color="blue">
        <a href="https://twitter.com/home">View Books</a>
      </Dot>
    </Draggable>
    <Draggable>
      <Dot color="green">
        <a href="https://twitter.com/home">Submit book</a>
      </Dot>
    </Draggable>
  </>
);
