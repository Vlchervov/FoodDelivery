import { BodySection } from "../../styled-components/body.styled";
import { Product } from "../products/products";

export function Body() {
  return (
    <BodySection>
      <div className="body__wrapper">
        <div className="body__nav">
          <div className="body__section">
            <div className="body__item bodyButton">
              <a href="#">Суши и роллы</a>
            </div>
            <div className="body__item bodyButton">
              <a href="#">Пицца</a>
            </div>
            <div className="body__item bodyButton">
              <a href="#">WOK и паста</a>
            </div>
            <div className="body__item bodyButton">
              <a href="#">Бургеры</a>
            </div>
            <div className="body__item bodyButton">
              <a href="#">Завтраки</a>
            </div>
            <div className="body__item bodyButton">
              <a href="#">Салаты и закуски</a>
            </div>
            <div className="body__item bodyButton">
              <a href="#">Напитки</a>
            </div>
          </div>
          <div className="body__section">
            <div className="body__item bodyNavIcons">
              <div className="body__item burgerMenu">
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>Меню</p>
              </div>
              <div className="iconContainer">
                <a className="bodyPerson">
                  <img src="../img/3289576-individual-man-people-person_107097.svg"></img>
                </a>
                <a className="bodyBasket">
                  <img src="../img/basket_96252.svg"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="body__content">
          <div className="body__categories">
            <div className="categories__list">
              <div className="categories__item sushiAndRolls">
                <div>
                  <a>Суши и роллы</a>
                </div>
              </div>
              <div className="categories__item pizza">
                <div>
                  <a>Пицца</a>
                </div>
              </div>
              <div className="categories__item wokAndPaste">
                <div>
                  <a>WOK и паста</a>
                </div>
              </div>
              <div className="categories__item burgers">
                <div>
                  <a>Бургеры</a>
                </div>
              </div>
              <div className="categories__item breakfasts">
                <div>
                  <a>Завтраки</a>
                </div>
              </div>
              <div className="categories__item saladsAndAppetizers">
                <div>
                  <a>Салаты и закуски</a>
                </div>
              </div>
              <div className="categories__item drinkables">
                <div>
                  <a>Напитки</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Product />
      </div>
    </BodySection>
  );
}
