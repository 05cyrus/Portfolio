import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';

export default function Description() {
    const phrase =
        "Empowering brands to shine in the digital age. Together, we’ll redefine the norm. No fluff, just innovation";
    const description = useRef(null);
    const isInView = useInView(description, { once: true }); // Ensure animation triggers once when in view

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {phrase.split(" ").map((word, index) => (
                        <span key={index} className={styles.mask}>
                            <motion.span
                                variants={slideUp}
                                custom={index}
                                animate={isInView ? "open" : "closed"}
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </p>
                <motion.p
                    variants={opacity}
                    animate={isInView ? "open" : "closed"}
                >
                    Fueled by a passion for design, coding, and interaction, this
                    unique combination sets me apart in the web design world.
                </motion.p>
                <div>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    );
}
