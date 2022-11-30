import { BodySection } from "../../styled-components/body.styled";
import { Product } from "../products/products";

export function Body() {
  return (
    <BodySection>
      <div className="body__wrapper">
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
