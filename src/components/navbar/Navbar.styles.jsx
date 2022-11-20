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
  background-color: #FFFDFA;
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
 
 @media all and (max-width: 600px) {

  flex-flow: column wrap;
  padding: 0;

  a { 
    text-align: center; 
    padding: 10px;
    border-top: 1px solid rgba(255, 255, 255,0.3); 
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); 
  }
  li:last-of-type a {
    border-bottom: none;
  }
}
`