import React from 'react';

import { SubHeading } from "../../components"
import { images } from "../../constants"
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className='app__header app__wrapper section__padding '>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
      <button type='button' className='custom__button'><Link to='/book-table'>Book Table</Link></button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;