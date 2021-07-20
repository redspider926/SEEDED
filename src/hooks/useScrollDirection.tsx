import React from 'react'

const useScrollDirection = () => {
    const [direction, setDirection] = React.useState('stop');
    const [lastScrollTop, setLastScrollTop] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop) {
                setDirection('down');
            } else {
                setDirection('up');
            }
            setLastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            setDirection('stop');
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return direction;
}

export default useScrollDirection;