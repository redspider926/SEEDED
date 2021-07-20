import React from 'react'

const useScrollTop = () => {
    const [scrollTop, setScrollTop] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            setScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return scrollTop;
}

export default useScrollTop;