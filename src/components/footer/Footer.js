import { FooterStyled } from "../../styled-components/footer.styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer__section">
        <div className="footer__item footerLogo">
          <img src="../img/172f0794-4161-4e28-bbb8-b847954411d3.png"></img>
        </div>
      </div>
      <div className="footer__section">
        <div className="footer__item footerDelivery">
          <a>Food Delivery</a>
        </div>
        <div className="footer__item footerNav">
          <ul>
            <li>Доставка и оплата</li>
            <li>Публичная оферта</li>
            <li>Политика конфиденциальности</li>
          </ul>
        </div>
      </div>
      <div className="footer__section">
        <div className="footer__item footerAppTitle">
          <a>Заказывайте через приложение</a>
        </div>
        <div className="footerLogo">
          <a className="footerGoogleLogo"> Google Play</a>
          <a className="footerAppleLogo"> AppStore</a>
        </div>
      </div>
    </FooterStyled>
  );
};
