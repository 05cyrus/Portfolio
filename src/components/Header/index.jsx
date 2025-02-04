import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';

export default function Header() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();
    const button = useRef(null);

    // Close the menu on route change
    useEffect(() => {
        if (isActive) {
            setIsActive(false);
        }
    }, [location]); // Only listen to location changes

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Scale button when scrolling
        const animation = gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {
                    gsap.to(button.current, {
                        scale: 1,
                        duration: 0.25,
                        ease: 'power1.out',
                    });
                },
                onEnterBack: () => {
                    gsap.to(button.current, {
                        scale: 0,
                        duration: 0.25,
                        ease: 'power1.out',
                    });
                    // Do not modify isActive here
                },
            },
        });

        // Clean up on component unmount
        return () => {
            ScrollTrigger.kill();
            animation.kill();
        };
    }, []); // Empty dependency array; only initialize once

    return (
        <>
            <div ref={header} className={styles.header}>
                <div className={styles.logo}>
                    <p className={styles.copyright}>©</p>
                    <div className={styles.name}>
                        <p className={styles.codeBy}>Code by</p>
                        <p className={styles.dennis}>Sumit</p>
                        <p className={styles.snellenberg}>Gusain</p>
                    </div>
                </div>
                <div className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el}>
                            <a style={{ textDecoration: "none",color:"white"}} href="/work">Work</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a href="/about">About</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a href="/contact">Contact</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>
            <div ref={button} className={styles.headerButtonContainer}>
                <Rounded
                    onClick={() => setIsActive((prev) => !prev)} // Toggle menu state
                    className={`${styles.button}`}
                >
                    <div
                        className={`${styles.burger} ${
                            isActive ? styles.burgerActive : ''
                        }`}
                    ></div>
                </Rounded>
            </div>
            <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        </>
    );
}
