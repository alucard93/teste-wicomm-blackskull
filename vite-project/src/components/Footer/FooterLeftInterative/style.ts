import styled from "styled-components";

export const FooterLeftInterativeStyled = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;

  .container {
    height: 500px;
  }
  .content-top {
    gap: 40px;
    margin-top: 40px;
    flex-direction: row;
    height: 238px;
    justify-content: center;
  }

  .content-top-brand {
    flex-direction: row;
    gap: 40px;
    margin-top: 24px;
    height: 214px;
    max-width: 546px;
  }

  .content-brand-icons {
    gap: 32px;
    max-width: 245px;
    align-items: center;

    & > img {
      max-width: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .content-social {
    justify-content: center;
    max-width: 200px;

    gap: 16px;
  }

  .content-title-follower {
    align-items: center;
  }

  .content-imgs {
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: center;
  }

  .content-about {
    /* background: blue; */
    max-width: 141px;
    gap: 14px;
    height: 211px;
  }

  .content-norms {
    /* background-color: pink; */
    max-width: 160px;
    height: 149px;
    gap: 14px;
  }
  //
  .content-regulation {
    max-width: 156px;
    /* background-color: beige; */
    height: 214px;
    gap: 14px;
  }

  //
  .content-bottom {
    height: 99px;
    margin-top: 48px;
    flex-direction: row;

    justify-content: center;
    gap: 48px;
    padding-left: 120px;
  }

  .content-payment-options {
    gap: 24px;
    max-width: 202px;
  }

  .content-payment {
    flex-direction: row;
    max-width: 202px;
    flex-wrap: wrap;
    gap: 8px;
  }

  .content-save {
    max-width: 128px;
    height: 95px;
    gap: 24px;
  }

  .content-securition {
    flex-direction: row;
    gap: 10px;
    max-width: 128px;
  }
`;
