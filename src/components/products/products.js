import { ProductSection } from "../../styled-components/products.styled";

export const Product = () => {
  return (
    <ProductSection>
      <div className="body_products title">Популярное</div>
      <div className="products">
        <div className="products__item minsk">
          <div>
            <a>
              <img src="https://s3.smartofood.ru/smartofood/menu/43a7af5c-146d-575d-92e9-4eda0e54bae6.jpg"></img>
            </a>
            <div className="products__item bodyMinsk">
              <div className="products__item bodyMinskContent">
                <div className="products__item bodyNameMinsk">Минск</div>
                <div className="products__item bodySizeMinsk">250 г</div>
                <div className="products__item bodyDescMinsk">
                  Лосось, огурец, творожный сыр
                </div>
              </div>
              <div className="products__item footerMinsk">
                <div className="products__item footerMinskPrice">
                  <p>320 </p>
                </div>
                <div className="products__button">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="products__item singapore">
          <div>
            <a>
              <img src="https://s3.smartofood.ru/smartofood/menu/02d23bc6-ad35-5dae-986d-1eacfa2d5e8f.jpg"></img>
            </a>
            <div className="products__item bodySingapore">
              <div className="products__item bodySingaporeContent">
                <div className="products__item bodyNameSingapore">Сингапур</div>
                <div className="products__item bodySizeSingapore">205 г</div>
                <div className="products__item bodyDescSingapore">
                  Угорь, лосось, огурец, творожный сыр, унаги соус, кунжут
                </div>
              </div>
              <div className="products__item footerSingapore">
                <div className="products__item footerSingaporePrice">
                  <p>400 </p>
                </div>
                <div className="products__button">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="products__item california">
          <div>
            <a>
              <img src="https://s3.smartofood.ru/smartofood/menu/cd7915e8-bdb6-5766-aabf-73d902b90553.jpg"></img>
            </a>
            <div className="products__item bodyCalifornia">
              <div className="products__item bodyCaliforniaContent">
                <div className="products__item bodyNameCalifornia">
                  Калифорния
                </div>
                <div className="products__item bodySizeCalifornia">265 г</div>
                <div className="products__item bodyDescCalifornia">
                  Снежный краб, творожный сыр, икра летучей рыбы
                </div>
              </div>
              <div className="products__item footerCalifornia">
                <div className="products__item footerCaliforniaPrice">
                  <p>320 </p>
                </div>
                <div className="products__button">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="products__item moscow">
          <div>
            <a>
              <img src="https://s3.smartofood.ru/smartofood/menu/39b9050b-e92d-50d6-91b5-2c99401783f3.jpg"></img>
            </a>
            <div className="products__item bodyMoscow">
              <div className="products__item bodyMoscowContent">
                <div className="products__item bodyNameMoscow">Москва</div>
                <div className="products__item bodySizeMoscow">250 г</div>
                <div className="products__item bodyDescMoscow">
                  Лосось, огурец, творожный сыр, пекинская капуста, икра
                  лососевая
                </div>
              </div>
              <div className="products__item footerMoscow">
                <div className="products__item footerMoscowPrice">
                  <p>520 </p>
                </div>
                <div className="products__button">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductSection>
  );
};
