import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: white;
  color: #4a465c;
  font-family: sans-serif;
  flex-direction: column;
  position: fixed;
  width: 100%;

  @media (max-width: 812px) {
    padding: 0;
    width: 100%;
    position: fixed;
  }

  .headerNav__section {
    display: flex;
    padding-left: 190px;
    padding-right: 190px;

    @media (max-width: 812px) {
      padding: 0;
    }
    :nth-child(2) {
      @media (max-width: 812px) {
        width: 100%;
      }
    }
  }

  .header__appSection {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ebeff0;
  }

  .header__nav {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    padding-top: 20px;
    @media (max-width: 812px) {
      width: 100%;
    }
  }

  .iconContainer {
    @media (max-width: 812px) {
      display: flex;
      padding-top: 10px;
    }
  }

  .headerNav__item {
    @media (max-width: 812px) {
      display: none;
    }
    padding: 10px 15px;
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
    color: rgb(74, 70, 92);
    cursor: pointer;
    text-decoration-style: solid;
    margin-left: 5px;

    a:hover {
      color: #ffcd00;
    }
  }

  .headerNavIcons {
    justify-content: space-between;
    width: 100%;
    display: flex;
    padding-left: 10px;
    padding-top: 0px;
    padding-bottom: 0px;

    @media (max-width: 812px) {
      margin: 0;
    }
  }

  .burgerMenu {
    display: none;
    @media (max-width: 812px) {
      display: flex;
      flex-direction: row;
      width: 100%;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2px 5px 5px;

        span {
          :not(:nth-of-type(3)) {
            margin-bottom: 2px;
          }
          background-color: black;
          width: 15px;
          height: 3px;
        }
      }

      p {
        display: block;
      }
    }
  }

  .headerPerson {
    @media (max-width: 812px) {
      padding-right: 15px;
      width: 15px;
      height: 20px;
    }
    display: inline-flex;
    width: 30px;
    height: 44px;
    padding-right: 100px;
  }

  .headerBasket {
    display: inline-flex;

    @media (max-width: 812px) {
      padding-right: 10px;
      width: 15px;
      height: 20px;
    }
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
    padding-left: 190px;
    padding-right: 190px;

    @media (max-width: 812px) {
      padding: 0;
    }

    :nth-of-type(2) {
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
