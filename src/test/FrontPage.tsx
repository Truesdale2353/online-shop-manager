import React, { useEffect, useRef, useState } from "react";
import { Waves } from "./Waves";
import styled from "styled-components";
import { ImageContainer } from "./ImageContainer";
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 113px);
  scroll-snap-align: start;
  position: relative;
  &:last-child {
    height: 100vh;
  }
  transform: translateY(150px);
  transition: 5s all ease;
`;

const StyledContainer = styled.div`
  overflow-y: scroll;
  height: 100vh;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
  transition: 5s all ease;
`;

function observeAndScroll(targetElement: React.MutableRefObject<any>) {
  // Create an intersection observer
  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        // Element is visible, scroll to the bottom of the page
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      } else {
        // Element is not visible, scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
    { threshold: 0.1 } // Adjust threshold value based on your preference
  );

  // Start observing the target element
  observer.observe(targetElement.current);
}
const FrontPage: React.FC = () => {
  const lastRef = useRef(null);
  const [text, setText] = useState("");
  useEffect(() => {
    observeAndScroll(lastRef);
  }, [lastRef]);
  return (
    <StyledContainer>
      <StyledSection>
        <h2>Section 1: Breaking News</h2>
        <input
          type="text"
          name="name"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <ImageContainer text={text} />
        <Waves />
      </StyledSection>
      <StyledSection>
        <h2>Section 2: Technology</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          turpis non massa condimentum gravida. Proin in nulla ex.
        </p>
        <Waves />
      </StyledSection>
      <StyledSection>
        <h2>Section 3: Sports</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          turpis non massa condimentum gravida. Proin in nulla ex.
        </p>
        <Waves />
      </StyledSection>
      <StyledSection>
        <h2>Section 4: Entertainment</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          turpis non massa condimentum gravida. Proin in nulla ex.
        </p>
        <Waves />
      </StyledSection>
      <StyledSection ref={lastRef}>
        <h2>Section 5: Lifestyle</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          turpis non massa condimentum gravida. Proin in nulla ex.
        </p>
        <Waves />
      </StyledSection>
    </StyledContainer>
  );
};

export default FrontPage;
