import React from 'react'
import Scroll from 'react-scroll'
import { useScrollTop, usePrevious, useWindowWidth } from '../../hooks';

const PageNumber = () => {
    const [number, setNumber] = React.useState(0);
    const scroller = Scroll.scroller;
    const [scrollY, setScrollY] = React.useState(0);
    const [autoScrolling, setAutoScrolling] = React.useState(false);
    const [scrolling, setScrolling] = React.useState(true);
    const [scrollbarDragging, setScrollbarDragging] = React.useState(false);
    const [timer, setTimer] = React.useState(null);
    const [scrollYUpdated, setScrollYUpdated] = React.useState(false);
    
    // const direction = useScrollDirection();
    const scrollTop = useScrollTop();
    const width = useWindowWidth();

    var Events = Scroll.Events;

    Events.scrollEvent.register('begin', function(to, element) {
        setAutoScrolling(true);
        setScrolling(false);
    });

    Events.scrollEvent.register('end', function (to, element) {
        setAutoScrolling(false);
    });

    const options = {
        duration: 500,
        delay: 100,
        smooth: true,
        offset: -84
    }

    React.useEffect(() => {
        if (scrollYUpdated) {
            setScrollYUpdated(false);
            if (width > 768) {
                switch (scrollY) {
                    case 0:
                        scroller.scrollTo('home', options);
                        break;
                    case 1:
                        scroller.scrollTo('about', options);
                        break;
                    case 2:
                        scroller.scrollTo('investors', options);
                        break;
                    case 3:
                        scroller.scrollTo('projects', options);
                        break;
                    case 4:
                        scroller.scrollTo('partners', options);
                        break;
                    case 5:
                        scroller.scrollTo('footer', options);
                        break;
                    default:
                        break;
                }
            }
        }
    }, [scrollY, scrollYUpdated])

    React.useEffect(() => {
        console.log('autoScrolling', autoScrolling);
        if (autoScrolling === false) {
            setTimeout(() => setScrolling(true), 100);
        }
    }, [autoScrolling])

    React.useEffect(() => {
        if (autoScrolling === false && scrolling===true && scrollbarDragging===false && scrollYUpdated===false) {
            if (scrollTop > previousScrollTop) {
                clearTimeout(timer);
                console.log('down');
                setTimer(setTimeout(() => {
                    if (scrollY === number) {
                        setScrollY(scrollY < 5 ? scrollY + 1 : 5);
                        setScrollYUpdated(true);
                    }
                    else {
                        setScrollY(number);
                        setScrollYUpdated(true);
                    }
                }, 500))
            }

            else if (scrollTop < previousScrollTop) {
                clearTimeout(timer);
                console.log('up');
                setTimer(setTimeout(() => {
                    if (scrollY === number) {
                        setScrollY(scrollY > 0 ? scrollY - 1 : 0);
                        setScrollYUpdated(true);
                    }
                    else {
                        setScrollY(number);
                        setScrollYUpdated(true);
                    }
                }, 500))
            }
        }
    }, [scrollTop, scrollbarDragging])

    const previousScrollTop = usePrevious(scrollTop);

    React.useEffect(() => {
        switch (Math.round(scrollTop / (window.innerHeight - 84))) {
            case 0:
                setNumber(0)
                break;
            case 1:
                setNumber(1)
                break;
            case 2:
                setNumber(2)
                break;
            case 3:
                setNumber(3)
                break;
            case 4:
                setNumber(4)
                break;
            default:
                break;
        }
    }, [scrollTop])

    window.onmousedown = (evt) => {
        const scrollbarWidth = window.outerWidth - document.body.clientWidth;
        
        console.log('evt.clientX', evt.clientX);
        console.log('scrollbarWidth', scrollbarWidth);
        console.log('document.body.clientWidth', document.body.clientWidth);
        console.log('window.outerWidth', window.outerWidth);
        console.log('window.outerWidth.exceptScrollbarWidth', window.outerWidth - scrollbarWidth);
        
        if (evt.clientX > window.outerWidth - scrollbarWidth) {
            setScrollbarDragging(true);
        }
    }

    window.onmouseup = (evt) => {
        if (scrollbarDragging) {
            setScrollbarDragging(false);
            switch (number) {
                case 0:
                    setScrollY(0)
                    setScrollYUpdated(true);
                    break;
                case 1:
                    setScrollY(1)
                    setScrollYUpdated(true);
                    break;
                case 2:
                    setScrollY(2)
                    setScrollYUpdated(true);
                    break;
                case 3:
                    setScrollY(3)
                    setScrollYUpdated(true);
                    break;
                case 4:
                    setScrollY(4)
                    setScrollYUpdated(true);
                    break;
                default:
                    setScrollY(5)
                    setScrollYUpdated(true);
                    break;
            }
        }
    }

    return <div className="component-pagenumber">
        <div className="component-pagenumber__item" onClick={() => { setScrollY(0); setScrollYUpdated(true); }}>
            {number !== 0 ? (<div className="component-pagenumber__item__inactive"></div>) :
                (<><div className="component-pagenumber__item__active"></div>
                    <div className="component-pagenumber__item__text">Home</div></>)}
        </div>
        <div className="component-pagenumber__item" onClick={() => { setScrollY(1); setScrollYUpdated(true);}}>
            {number !== 1 ? (<div className="component-pagenumber__item__inactive"></div>) :
                (<><div className="component-pagenumber__item__active"></div>
                    <div className="component-pagenumber__item__text">About</div></>)}
        </div>
        <div className="component-pagenumber__item" onClick={() => { setScrollY(2); setScrollYUpdated(true);}}>
            {number !== 2 ? (<div className="component-pagenumber__item__inactive"></div>) :
                (<><div className="component-pagenumber__item__active"></div>
                    <div className="component-pagenumber__item__text">Investors</div></>)}
        </div>
        <div className="component-pagenumber__item" onClick={() => { setScrollY(3); setScrollYUpdated(true);}}>
            {number !== 3 ? (<div className="component-pagenumber__item__inactive"></div>) :
                (<><div className="component-pagenumber__item__active"></div>
                    <div className="component-pagenumber__item__text">Projects</div></>)}
        </div>
        <div className="component-pagenumber__item" onClick={() => { setScrollY(4); setScrollYUpdated(true);}}>
            {number !== 4 ? (<div className="component-pagenumber__item__inactive"></div>) :
                (<><div className="component-pagenumber__item__active"></div>
                    <div className="component-pagenumber__item__text">Partners</div></>)}
        </div>
    </div>
}

export default PageNumber;