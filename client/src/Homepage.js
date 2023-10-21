import "./style/homepage.css";
import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import ShowAll from './showAll/ShowAll';

export function Homepage() {
    const [scrolling, setScrolling] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        // Add an event listener to track the scroll position
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Clean up the event listener when the component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolling(true);
            console.log("scroll: ", scrolling);
        } else {
            setScrolling(false);
        }
    };


    const scrollToBottom = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
            <div className="wrap-homepage">
                <div className={scrolling ? 'header-scroll' : 'header'}>
                    <h1 className="text">מנציחים - יהיה פה את הלוגו</h1>
                    <h2 className="text">קצת הסבר על המיזם</h2>
                </div>
                <div className="content">
                    <h2 className="text">אמרת חז"ל יפה על הנושא של המשניות והקדיש""</h2>
                    <div className="down">
                        <h1>בוא וקח חלק...</h1>

                        <svg id="svg-container" onClick={scrollToBottom} xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                </div>
                
                <div ref={ref} id="my-div" className="showall">
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    <h1>משניות לבחירה או משהו בסגנון...</h1>
                <ShowAll></ShowAll>
                </div>
            </div >
        </>
    );
}