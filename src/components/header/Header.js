import { connect } from "react-redux";

function Header(props) {
  return (
    <div className="header">
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
        <div className="header__item headerButton">
          <a>Сегодня работаем с 8:00 до 21:30</a>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(Header);
