import { connect } from "react-redux";
import { HeaderStyled } from "../../styled-components/header.styled";

function Header(props) {
  return (
    <HeaderStyled>
      <div className="header__appSection">
        <div className="header__section">
          <div className="header__item headerLogo">
            <img src="../img/172f0794-4161-4e28-bbb8-b847954411d3.png"></img>
          </div>
          <div className="header__item headerLanguageSelector">
            <select>
              <option>Русский</option>
              <option>English</option>
            </select>
          </div>
          <div className="header__item headerCitySelector">
            <a
              onClick={() => {
                props.setChange(!props.change);
              }}
            >
              Москва
            </a>
          </div>
          <div className="header__item headerPromotions">Акции</div>
          <div className="header__item headerShippingAndPayment">
            Доставка и оплата
          </div>
        </div>

        <div className="header__section">
          <div className="header__item"> Сегодня работаем с 8:00 до 21:30</div>
        </div>
      </div>
      <div className="header__nav">
        <div className="headerNav__section">
          <div className="headerNav__item headerButton">
            <a href="#">Суши и роллы</a>
          </div>
          <div className="headerNav__item headerButton">
            <a href="#">Пицца</a>
          </div>
          <div className="headerNav__item headerButton">
            <a href="#">WOK и паста</a>
          </div>
          <div className="headerNav__item headerButton">
            <a href="#">Бургеры</a>
          </div>
          <div className="headerNav__item headerButton">
            <a href="#">Завтраки</a>
          </div>
          <div className="headerNav__item headerButton">
            <a href="#">Салаты и закуски</a>
          </div>
          <div className="headerNav__item headerButton">
            <a href="#">Напитки</a>
          </div>
        </div>
        <div className="headerNav__section">
          <div className="headerNav__item headerNavIcons">
            <div className="headerNav__item burgerMenu">
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>Меню</p>
            </div>
            <div className="iconContainer">
              <a className="headerPerson">
                <img src="../img/3289576-individual-man-people-person_107097.svg"></img>
              </a>
              <a className="headerBasket">
                <img src="../img/basket_96252.svg"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(Header);
