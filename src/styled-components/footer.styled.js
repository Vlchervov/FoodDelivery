import styled from "styled-components";

export const FooterStyled = styled.div`
  @media (max-width: 812px) {
    align-items: center;
    flex-direction: column;
    white-space: nowrap;
  }
  display: flex;
  justify-content: space-between;
  padding-left: 190px;
  padding-right: 190px;
  padding-top: 0;

  .footer__section {
    padding-top: 53px;
    padding-bottom: 40px;
  }

  .footerLogo {
    img {
      height: 30px;
      width: 146px;
      padding-top: 10px;
      user-select: none;
    }
  }

  .footerDelivery {
    @media (max-width: 812px) {
      text-align: center;
    }
    a {
      font-size: 14px;
      line-height: 20px;
      color: rgba(21, 21, 21, 0.3);
    }
  }

  .footerNav {
    ul {
      @media (max-width: 812px) {
        text-align: center;
      }
      padding: 0;
      list-style: none;

      li {
        cursor: pointer;
        margin-bottom: 13px;
        font-size: 14px;
        line-height: 20px;
        font-family: sans-serif;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }

  .footerAppTitle {
    @media (max-width: 812px) {
      text-align: center;
    }

    font-size: 12px;
    line-height: 17px;
    color: rgba(21, 21, 21, 0.3);
  }

  .footerLogo {
    display: flex;
    margin-top: 10px;
  }

  .footer__itemLogo {
    border: 1px solid rgba(21, 21, 21, 0.3);
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
  }

  .GoogleLogo {
    margin-right: 10px;
    color: rgba(21, 21, 21, 0.3);

    :hover {
      border: 1px solid #ffcd00;
      color: #ffcd00;
    }
  }

  .AppleLogo {
    width: 110px;

    :hover {
      border: 1px solid #ffcd00;
      color: #ffcd00;
    }
  }
`;
