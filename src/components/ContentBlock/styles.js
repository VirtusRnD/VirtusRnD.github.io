import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;
  width: 80%; /* Sayfanın yatayda %80'ini kullan */
  margin: 0 auto; /* Yatayda ortala */

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  font-size: 18px; /* Metin boyutunu değiştir */
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 700px;
  margin: auto;
  width: 100%; /* Genişliği %100 yap */
  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
  h6 {
    font-size: 40px; /* Başlık boyutunu değiştir */
    color: #18216d;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 20px; /* Başlık boyutunu değiştir */
  line-height: 1rem;
  padding: 0.5rem 0;

  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 16px; /* Metin boyutunu değiştir */
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
