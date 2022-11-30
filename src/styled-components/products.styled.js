import styled from "styled-components";

export const ProductSection = styled.section`
  @media (max-width: 812px) {
    padding-left: 35px;
    padding-right: 35px;
  }
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

  .products__item {
    cursor: pointer;
  }
  .products {
    z-index: 1;
    margin: -20px -10px 40px;
    display: flex;
    flex-wrap: wrap;
    overflow: initial;
    justify-content: flex-start;
  }

  .products__button {
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

  .minsk {
    @media (max-width: 812px) {
      flex: 1 0 100%;
      margin-bottom: 25px;
    }
    margin-right: 24px;
    flex: 1 0 20%;
    box-shadow: 3px 6px 12px rgb(0 0 0 / 10%);
    -webkit-box-shadow: 3px 6px 12px rgb(0 0 0 / 10%);
    border-radius: 25px;
    overflow: hidden;

    img {
      display: block;
      user-select: none;
      width: 100%;
      height: 209px;
      margin: 0;
      object-fit: cover;
      border-radius: 10px;
    }

    .bodyMinsk {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 16px;
      padding: 24px;
    }

    .bodyNameMinsk {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 16px;
    }

    .bodySizeMinsk {
      font-size: 12px;
      line-height: 17px;
      color: #94a2ae;
      margin-bottom: 16px;
    }

    .bodyDescMinsk {
      font-size: 12px;
      line-height: 17px;
      color: #94a2ae;
      overflow: hidden;
    }

    .footerMinsk {
      display: flex;
      -webkit-box-align: center;
      justify-content: space-between;
      padding-top: 20px;
      align-items: center;
    }

    .footerMinskPrice {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
    }
  }

  .bodyMinskContent {
    margin-bottom: 10px;
  }
  .bodySingaporeContent {
    margin-bottom: 10px;
  }

  .bodyCaliforniaContent {
    margin-bottom: 10px;
  }

  .bodyMoscowContent {
    margin-bottom: 10px;
  }

  .singapore {
    @media (max-width: 812px) {
      flex: 1 0 100%;
      margin-bottom: 25px;
    }

    margin-right: 24px;
    border-radius: 25px;
    flex: 1 0 20%;
    box-shadow: 3px 6px 12px rgb(0 0 0 / 10%);
    -webkit-box-shadow: 3px 6px 12px rgb(0 0 0 / 10%);
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 209px;
      margin: 0;
      user-select: none;
      object-fit: cover;
      border-radius: 10px;
    }

    .bodySingapore {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 24px;
    }

    .bodyNameSingapore {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 16px;
    }

    .bodySizeSingapore {
      font-size: 12px;
      line-height: 17px;
      color: #94a2ae;
      margin-bottom: 16px;
    }

    .bodyDescSingapore {
      font-size: 12px;
      line-height: 17px;
      color: #94a2ae;
      overflow: hidden;
    }

    .footerSingapore {
      display: flex;
      -webkit-box-align: center;
      justify-content: space-between;
      align-items: center;
    }

    .footerSingaporePrice {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
    }
  }

  .california {
    @media (max-width: 812px) {
      flex: 1 0 100%;
      margin-bottom: 25px;
    }
    margin-right: 24px;
    flex: 1 0 20%;
    box-shadow: 3px 6px 12px rgb(0 0 0 / 10%);
    -webkit-box-shadow: 3px 6px 12px rgb(0 0 0 / 10%);
    border-radius: 25px;
    overflow: hidden;

    img {
      display: block;
      user-select: none;
      width: 100%;
      height: 209px;
      margin: 0;
      object-fit: cover;
      border-radius: 10px;
    }

    .bodyCalifornia {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 16px;
      padding: 24px;
    }

    .bodyNameCalifornia {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 16px;
    }

    .bodySizeCalifornia {
      font-size: 12px;
      line-height: 17px;
      color: #94a2ae;
      margin-bottom: 16px;
    }

    .bodyDescCalifornia {
      font-size: 12px;
      line-height: 17px;
      color: #94a2ae;
      overflow: hidden;
    }

    .footerCalifornia {
      display: flex;
      -webkit-box-align: center;
      justify-content: space-between;
      padding-top: 20px;
      align-items: center;
    }

    .footerMinskCalifornia {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
    }
  }

  .moscow {
    @media (max-width: 812px) {
      flex: 1 0 100%;
    }
    margin-right: 24px;
    flex: 1 0 20%;
    box-shadow: 3px 6px 12px rgb(0 0 0 / 10%);
    -webkit-box-shadow: 3px 6px 12px rgb(0 0 0 / 10%);
    border-radius: 25px;
    overflow: hidden;

    img {
      display: block;
      user-select: none;
      width: 100%;
      height: 209px;
      margin: 0;
      object-fit: cover;
      border-radius: 10px;
    }

    .bodyMoscow {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 16px;
      padding: 24px;
    }

    .bodyNameMoscow {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 16px;
    }

    .bodySizeMoscow {
      font-size: 12px;
      line-height: 17px;
      color: #94a2ae;
      margin-bottom: 16px;
    }

    .bodyDescMoscow {
      font-size: 12px;
      line-height: 17px;
      color: #94a2ae;
      overflow: hidden;
    }

    .footerMoscow {
      display: flex;
      -webkit-box-align: center;
      justify-content: space-between;
      align-items: center;
    }

    .footerMoscowPrice {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
    }
  }
`;
