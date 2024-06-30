import { CoverContainer, Emoji } from "./styled-elements.js";

const Cover = () => {
  return (
    <CoverContainer>
      <Emoji role="img" aria-label="Book Cover Emoji">
        📚
      </Emoji>
    </CoverContainer>
  );
};

export default Cover;
