import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <div className='nav'>
            <Link to='/'>
                 <div>Stocks</div>
                 </Link>
                 <Link to='/stocks'>
                  <div>Stocks</div>
                 </Link>
        </div>
    );
}

export default Nav;