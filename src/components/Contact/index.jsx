import styles from './style.module.scss';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

export default function Contact() {
    const container = useRef(null);

    // Framer Motion scroll progress
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"],
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                {/* Title Section */}
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <img
                                src="/images/background2.jpg"
                                alt="Background"
                                className={styles.image}
                            />
                        </div>
                        <h2>Let's work</h2>
                    </span>
                    <h2>together</h2>

                    {/* Animated Button */}
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <Rounded
                            backgroundColor="#334BD3"
                            className={styles.button}
                        >
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>

                    {/* Rotating SVG */}
                    <motion.svg
                        style={{ rotate, scale: 2 }}
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                            fill="white"
                        />
                    </motion.svg>
                </div>

                {/* Contact Navigation */}
                <div className={styles.nav}>
                    <Rounded>
                        <p>sumitgusain5311@gmail.com</p>
                    </Rounded>
                    <Rounded>
                        <p>+91 7982416604</p>
                    </Rounded>
                </div>

                {/* Additional Info */}
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2024 © Edition</p>
                        </span>
                        <span>
                            <h3>Time</h3>
                            <p>{new Date().toLocaleTimeString()}</p>
                        </span>
                    </div>

                    {/* Social Links */}
                    <div>
                        <Magnetic>
                            <a
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                href="https://www.instagram.com/sum.it____"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p>Instagram</p>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                href="https://www.behance.net/deathbringer2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p>Behance</p>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                href="https://in.linkedin.com/in/sumitgusain05"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p>LinkedIn</p>
                            </a>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
