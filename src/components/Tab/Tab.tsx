import React from 'react'
import CaretIcon from '../../assets/Svg/menu-arrow-open.svg'

interface TabProps {
    caret?: boolean;
    onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Tab: React.FC<TabProps> = ({ children, caret, onMouseEnter, onMouseLeave }) => {
    return <div className="component-tab" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="component-tab__text text-sm">{children}</div>
        {caret && <img className="component-tab__caret" src={CaretIcon} alt="component-tab-caret-icon" />}
    </div>
}

export default Tab;