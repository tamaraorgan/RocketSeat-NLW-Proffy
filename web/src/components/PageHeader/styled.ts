import styled from 'styled-components'

export const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);

  .top-bar-container {
    width: 90%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--color-text-in-primary);
    padding: 1.6rem 0;

    > img {
      height: 1.6rem;
    }
    a {
      height: 3.2rem;
      transition: opacity 0.2s;
      :hover {
        opacity: 0.6;
      }
    }
  }
  .header-content {
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin: 3.2rem auto;
    margin-bottom: 6.4rem;

    strong {
      font: 700 3.6rem Archivo;
      line-height: 4.2rem;
      color: var(--color-title-in-primary);
    }
    p {
      max-width: 30rem;
      font-size: 1.6rem;
      line-height: 2.6rem;
      margin-top: 2.4rem;
      color: var(--color-title-in-primary);
    }
  }
  @media (min-width: 700px) {
    height: 340px;

    .top-bar-container {
      max-width: 1100px;
    }
    .header-content {
      flex: 1;
      max-width: 740px;
      margin: 0 auto;
      padding-bottom: 48px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      strong {
        max-width: 350px;
      }
    }
  }
`