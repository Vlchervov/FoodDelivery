import styled from "styled-components";

export const BodySection = styled.div`
  @media (max-width: 812px) {
    padding: 15px;
  }
  max-width: 1530px;
  margin: 0 auto;
  padding-left: 45px;
  padding-right: 45px;
  background-color: white;
  color: #4a465c;
  font-family: sans-serif;
  font-family: sans-serif;
  border-bottom: 1px solid #ebeff0;

  .body__wrapper {
    margin-bottom: 100px;
    padding-top: 150px;

    @media (max-width: 812px) {
      padding-top: 0;
    }
  }

  a {
    text-decoration: none;
    color: #4a465c;
  }

  .categories__list {
    display: flex;
    flex-wrap: wrap;
  }

  .body__categories {
    margin-bottom: 100px;
    @media (max-width: 812px) {
      margin-top: 150px;
    }
  }

  .categories__item {
    cursor: pointer;
    margin: 14px;
    @media (max-width: 812px) {
      margin: 5px;
      font-size: 12px;
    }
    a {
      padding: 10px 24px;
      @media (max-width: 812px) {
        font-size: 12px;
        padding: 10px 17px;
      }
    }
  }

  .sushiAndRolls {
    flex: 1 0 20%;
    border-radius: 25px;
    background-position: 100%;
    background-size: cover;
    background-image: url("https://s3.smartofood.ru/smartofood/menu/55424660-c19e-587a-b078-4db9bf326ac6.jpg");

    div {
      padding: 25px 25px 25px 25px;
      display: flex;
      justify-content: center;

      :hover {
        backdrop-filter: blur(6px);
        transition: 0.3s;
        border-radius: 25px;
      }
    }

    a {
      text-align: center;
      line-height: 22px;
      border-radius: 30px;
      background: rgba(255, 255, 255, 0.9);
      color: rgba(74, 70, 92);
    }
  }

  .pizza {
    background-image: url("https://s3.smartofood.ru/smartofood/menu/ea94e68d-44e5-5155-8d80-95a1a061df16.jpg");
    flex: 1 0 20%;
    border-radius: 25px;
    background-size: cover;
    background-position: 100%;

    div {
      padding: 25px 25px 25px 25px;
      display: flex;
      justify-content: center;

      :hover {
        backdrop-filter: blur(6px);
        transition: 0.2s;
        border-radius: 25px;
      }
    }

    a {
      text-align: center;
      line-height: 22px;
      border-radius: 30px;
      background: rgba(255, 255, 255, 0.9);
      color: rgb(74, 70, 92);
    }
  }

  .wokAndPaste {
    flex: 1 0 20%;
    border-radius: 25px;
    background-size: cover;
    background-position: 100%;
    background-image: url("https://s3.smartofood.ru/smartofood/menu/e6442a58-c117-58d3-97bb-2ba37a596066.jpg");

    div {
      padding: 25px 25px 25px 25px;
      display: flex;
      justify-content: center;

      :hover {
        backdrop-filter: blur(6px);
        transition: 0.3s;
        border-radius: 25px;
      }
    }
    a {
      text-align: center;
      line-height: 22px;
      border-radius: 30px;
      color: rgb(74, 70, 92);
      background: rgba(255, 255, 255, 0.9);
    }
  }

  .burgers {
    flex: 1 0 20%;
    background-size: cover;
    background-position: 100%;
    border-radius: 25px;
    background-image: url("https://s3.smartofood.ru/smartofood/menu/e8661a36-d9f2-5335-8f74-54a586840c72.jpg");

    div {
      padding: 25px 25px 25px 25px;
      display: flex;
      justify-content: center;

      :hover {
        backdrop-filter: blur(6px);
        transition: 0.3s;
        border-radius: 25px;
      }
    }

    a {
      text-align: center;
      line-height: 22px;
      border-radius: 30px;
      color: rgb(74, 70, 92);
      background: rgba(255, 255, 255, 0.9);
    }
  }

  .breakfasts {
    flex: 1 0 20%;
    background-size: cover;
    border-radius: 25px;
    background-position: 100%;
    background-image: url("https://s3.smartofood.ru/smartofood/menu/81ba0842-1ff3-5c2b-b580-b949cacc6d32.jpg");

    div {
      padding: 25px 25px 25px 25px;
      display: flex;
      justify-content: center;

      :hover {
        backdrop-filter: blur(6px);
        transition: 0.3s;
        border-radius: 25px;
      }
    }

    a {
      text-align: center;
      line-height: 22px;
      border-radius: 30px;
      color: rgb(74, 70, 92);
      background: rgba(255, 255, 255, 0.9);
    }
  }

  .saladsAndAppetizers {
    flex: 1 0 20%;
    background-size: cover;
    border-radius: 25px;
    background-position: 100%;
    background-image: url("https://s3.smartofood.ru/smartofood/menu/2aa9189c-c115-58d9-aaf2-4fb9fe7e4053.jpg");

    div {
      padding: 25px 25px 25px 25px;
      display: flex;
      justify-content: center;

      :hover {
        backdrop-filter: blur(6px);
        transition: 0.3s;
        border-radius: 25px;
      }
    }
    a {
      text-align: center;
      line-height: 22px;
      border-radius: 30px;
      color: rgb(74, 70, 92);
      background: rgba(255, 255, 255, 0.9);
    }
  }

  .drinkables {
    flex: 1 0 20%;
    background-size: cover;
    background-position: 100%;
    border-radius: 25px;
    background-image: url("https://s3.smartofood.ru/smartofood/menu/b075c9c9-1765-57ed-8b00-e0a3e7b7d341.png");

    div {
      padding: 25px 25px 25px 25px;
      display: flex;
      justify-content: center;

      :hover {
        backdrop-filter: blur(6px);
        transition: 0.3s;
        border-radius: 25px;
      }
    }
    a {
      text-align: center;
      line-height: 22px;
      border-radius: 30px;
      color: rgb(74, 70, 92);
      background: rgba(255, 255, 255, 0.9);
    }
  }
`;
