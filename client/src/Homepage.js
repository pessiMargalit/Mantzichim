import "./style/homepage.css";
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";

import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import ShowAll from './showAll/ShowAll';
import { Footer } from "./Footer";

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
        if (window.scrollY > 500) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };


    const scrollToBottom = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
    let t1 = '(יוסף אומץ) "לימוד התורה מועיל שבעתיים מכל התפילה, ועל ידי כן מכניסים המת לגן עדן"'
    let t2 = '(האר"י. ה"ע ח קח) "כי אין הקדיש בא רק להציל נפש המת מגהינם, אלא יש בו עוד תועלת גדולה להכניסו לגן עדן ולהעלותו ממדרגה למדרגה בגן עדן"'
    // let t1 = '"לימוד התורה מועיל שבעתיים מכל התפילה שעל ידי כן מכניסים המת לגן עדן"'
    return (
        <>
            <div className="wrap-homepage">
                <div className={scrolling ? 'header-scroll' : 'header'}>
                    <br></br>
                    <img src={logo1} style={{ width: "200px" }}></img>
                    <br></br>
                    <img src={logo2} style={{ width: "120px", marginLeft: "15px" }}></img>

                </div>

                <div className="content">
                    <h2 className="text-title">מיזם מיוחד לסיומי ש"ס ואמירת קדיש לע"נ הקדושים הי"ד במלחמת חרבות ברזל</h2>
                    <br></br>
                    <br></br>
                    <h3 className="text">{t1}</h3>
                    <h3 className="text" id="phone-text-cansle">{t2}</h3>
                    <div className="down">
                        <h2 className="text-title">הצטרף ללימוד משניות ואמירת קדיש</h2>
                        <svg id="svg-container" onClick={scrollToBottom} xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                </div>

                <div ref={ref} id="my-div" className="showall">
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    <h4>באפשרותך לבחור מסכת אחת או יותר או רק אמירת קדיש</h4>
                    <ShowAll></ShowAll>
                </div>
            </div >
            <Footer />

        </>
    );
}