import React from 'react';

import Logo from '../../Logo/Logo';
import NavigastionItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <div>
                <Logo classes={classes.Logo}/>
            </div>
            <nav>
                <NavigastionItems/>
            </nav>
        </div>
    );
};

export default sideDrawer;