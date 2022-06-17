import * as React from "react";
import styled from "styled-components";

const SCarouselWrapper = styled.div`
  display: flex;
`;

interface IProps {
  children: JSX.Element[];
}

const Carousel = ({ children }: IProps) => {
  const activeSlide = children.map(slide => (
    <>
      {slide}
    </>
  ));

  return (
    <div>
      <SCarouselWrapper>
        {activeSlide}
      </SCarouselWrapper>
    </div>
  );
};

export default Carousel;