import styled, { keyframes, css } from "styled-components";
import { useState, useEffect, useRef } from "react";

export const Arrow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const arrowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); 
          }
        },
        { threshold: 0.8 }
      );

      if (arrowRef.current) observer.observe(arrowRef.current);

      return () => observer.disconnect();
    }, []);

  return (
    <Things>
      <Content>
        <ArrowWrapper ref={arrowRef}>
          <Curve isVisible={isVisible} />
          <Point />
        </ArrowWrapper>
      </Content>
    </Things>
  );
};


const Things = styled.div`
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  flex: 1;
  height: 100px;
  box-sizing: border-box;
  position: relative;
`;

const ArrowWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100px;
`;

const drawCurve = keyframes`
  0% {
    clip-path: inset(0 100% 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`;

const Curve = styled.div<{ isVisible: boolean }>`
  border: 6px solid #be5f4b;
  border-color: #be5f4b #be5f4b transparent transparent;
  height: 460px;
  width: 700px;
  border-radius: 1300px 1300px 0 30px;

  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${drawCurve} 1.5s ease-in-out forwards;
    `}

  @media (max-width: 1200px) {
    width: 600px;
  }
  @media (max-width: 1100px) {
    width: 500px;
  }
  @media (max-width: 1000px) {
    width: 300px;
    height: 750px;
  }
`;

const Point = styled.div`
  position: absolute;
  left: 410px;
  top: 191px;

  &:before,
  &:after {
    border: 7px solid #be5f4b;
    height: 25px;
    content: "";
    position: absolute;
  }

  &:before {
    top: 245px;
    left: 300px;
    transform: rotate(-139deg);
  }

  &:after {
    top: 247px;
    left: 281px;
    transform: rotate(129deg);
  }

  @media (max-width: 1200px) {
    &:before {
      left: 200px;
    }
    &:after {
      left: 180px;
    }
  }
  @media (max-width: 1100px) {
    &:before {
      left: 100px;
    }
    &:after {
      left: 80px;
    }
  }
`;
