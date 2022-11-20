import styled from 'styled-components';

export const PostsContainer = styled.div`
  background: #e2e8d5;
  display: flex;
  flex: 1 1 auto;
  flex-flow: column wrap;
  padding: 3%;
  margin: 0 2%;
  
`
export const Heading = styled.h1`
  /* height: 126px; */
  height: 10vh;
  width: 100%;
	text-align: center;
	display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Img = styled.img`
  width: 100%;
  border: .5px solid #ddd;
  border-radius: 8px;

  &:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  }
`

export const Info = styled.div`
  align-items: center;
  h4 {
    font-size: 1rem;
    text-align: center;
  }
`
