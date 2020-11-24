import React from 'react';
import './custom-bottom.styles.scss';

const CustomButton = ({children, isGooleSignIn,...otherProps}) => (
    <button className={`${isGooleSignIn ? 'google-sign-in' : ''} custom-button`} 
    {...otherProps}>
    {children}

    </button>
)

export default CustomButton;