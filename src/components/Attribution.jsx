import { styled } from "styled-components";

const AttributionWrapper = styled.p`
  color: ${({ theme }) => theme.colors.bodyPrimary};
  font-weight: 700;
  width: 100%;
  text-align: center;
  margin-top: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  @media only screen and (min-width: 60em) {
    position: absolute;
    bottom: 1rem;
    left: 0;

    a {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1.5px;
        background-color: ${({ theme }) => theme.colors.primary};
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 175ms ease;
      }

      &:hover,
      &:focus-visible {
        &:after {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    }
  }
  @media only screen and (min-width: 60em) and (max-height: 42.5em) {
    display: none;
  }
`;

export const Attribution = () => {
  return (
    <AttributionWrapper>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/semperprimum">Bogdan Kim</a>.
    </AttributionWrapper>
  );
};
