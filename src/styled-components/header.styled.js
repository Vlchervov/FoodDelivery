import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  padding-left: 190px;
  padding-right: 190px;
  justify-content: space-between;
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: white;
  color: #4a465c;
  font-family: sans-serif;
  border-bottom: 1px solid #ebeff0;

  @media (max-width: 812px) {
    padding: 0;
  }

  a {
    color: #4a465c;
    text-decoration: none;
    cursor: pointer;
  }

  .headerCitySelector a {
    color: #ffcd00;

    :hover {
      text-decoration: underline;
      color: #ffcd00;
    }
  }

  .header__section {
    display: flex;
    align-items: center;

    :nth-child(2) {
      @media (max-width: 812px) {
        display: none;
      }
    }
  }

  .header__item {
    padding: 10px 15px;
    font-size: 13px;
    margin-left: 5px;
  }

  .headerLogo img {
    height: 30px;
    width: 146px;
    padding-top: 10px;
    padding-right: 15px;
    user-select: none;
  }

  .headerCitySelector {
    padding-right: 0px;

    a {
      @media (max-width: 812px) {
        border: none;
      }
      border-right: 1px solid #ebeff0;
      border-right-width: 1px;
      padding-right: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  .headerPromotions {
    cursor: pointer;
    color: #4a465c;
    @media (max-width: 812px) {
      display: none;
    }
    :hover {
      color: #ffcd00;
      text-decoration: underline;
    }
  }

  .headerShippingAndPayment {
    cursor: pointer;
    @media (max-width: 812px) {
      display: none;
    }
    :hover {
      color: #ffcd00;
      text-decoration: underline;
    }
  }
`;
