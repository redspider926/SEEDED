import React from 'react'

const Container: React.FC = ({ children }) => {
    return <div className="component-container">
        {children}
    </div>
}

export default Container;