import React from 'react';
import ArrowIcon from '../../assets/Svg/arrow.svg';

interface ButtonProps {
    header?: boolean;
    href: string;
}

const Button: React.FC<ButtonProps> = ({ children, header, href }) => {
    return <a className={header === undefined ? "component-button text-sm" : "component-button-header"} href={href}>
        <div className="text-white text-sm">{children}</div>
        {header === undefined && <img src={ArrowIcon} alt="arrow-icon" width={5} />}
    </a >
}

export default Button;