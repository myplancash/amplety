import React from 'react'
import { Headline } from './Header.styles';
import Posts from '../Posts/Posts'

const Header = () => {
  return (
    <>
    <Headline>
      <h1>The freedom to have a choice.</h1>
    </Headline>
    <Posts />
    </>
  )
}

export default Header