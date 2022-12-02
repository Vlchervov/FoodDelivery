import styled from "styled-components";

export const ProductSection = styled.section`
  .title {
    @media (max-width: 550px) {
      font-size: 20px;
    }
    font-size: 32px;
    font-weight: 700;
    text-align: left;
    line-height: 38px;
    margin-bottom: 40px;
  }

  .product {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 812px) {
      justify-content: center;
    }
  }

  .product__item {
    @media (max-width: 812px) {
      flex: 1 0 100%;
      margin-bottom: 25px;
    }
    display: flex;
    flex-direction: column;
    max-width: 330px;
    border-radius: 20px;
    flex: 1 0 25%;
    background-color: white;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
    text-decoration: none;

    img {
      object-fit: cover;
      max-height: 209px;
      border-radius: 20px 20px 0px 0px;
      width: 100%;
    }
  }

  .product__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 24px;
  }

  .product__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .product__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 16px;
  }

  .product__weight {
    font-size: 12px;
    line-height: 17px;
    color: #94a2ae;
    margin-bottom: 16px;
  }

  .product__description {
    font-family: sans-serif;
    font-size: 12px;
    line-height: 17px;
    color: #94a2ae;
  }

  .product__footer {
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .product__price {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }

  .product__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: #ffcd00;
    border-radius: 18px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);

    span {
      display: block;
      position: absolute;
      background-color: white;
      width: 15px;
      height: 3px;
    }

    span:nth-child(2) {
      transform: rotate(90deg);
    }
  }
`;
