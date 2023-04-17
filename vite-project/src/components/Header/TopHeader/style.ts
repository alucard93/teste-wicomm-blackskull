import styled from "styled-components";

export const TopHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 32px;

  background-color: ${(props) => props.theme.dark1};
  
  & > .container {
    flex-direction: row;
    max-width: 71.125rem;
    align-items: center;
    justify-content: space-between;
  }

  .content-contact{
    flex-direction: row;
    max-width: 90px;
  }

  .content-icon-text{
    flex-direction: row;
    align-items: center;
    max-width: 320px;
    gap: 10px;
  }

  .content-icon-text > p {
    min-width: 252px;
  }

  .content-blog {
    max-width: 105px;
  }
`;
