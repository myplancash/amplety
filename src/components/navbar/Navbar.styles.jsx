import styled from 'styled-components';

export const Headline = styled.nav`
  display: flex;
  border-bottom: #333;
  flex-flow: row wrap;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.25);
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
  position: sticky;
  top: 0;

  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    list-style: none;
    margin: 0; 
  }

  a {
    color: #070606;
    text-decoration: none;
    padding: 1em;
    align-self: center; 
  }

  a:hover {
    color: var(--light-color);
  }

  span {
    margin-right: 0.6rem;
  }
/* 
  @media (max-width: 700px) {
    display: block;
    text-align: center;
    ul {
      text-align: center;
      justify-content: center;
    }
  } */

  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }

  /* Text Styles */
  .x-large {
    font-size: 3rem;
  }

  .large {
    font-size: 2rem;
  }

  .lead {
    font-size: 1rem;
  }
`