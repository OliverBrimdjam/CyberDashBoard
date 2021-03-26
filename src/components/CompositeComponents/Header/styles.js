import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;

  width: 100%;

  background-color: var(--color-background-light);

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  div > img:nth-child(1) {
    width: 300px;
    height: auto;
    padding: 1%;
  }

  div > img:nth-child(2) {
    width: 4%;
    height: auto;
    padding-right: 1%;
  }

  img {
    width: 100%;
  }
`;

export default HeaderContainer;
