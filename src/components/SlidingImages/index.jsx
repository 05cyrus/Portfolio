import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';

const slider1 = [
    {
        color: "#e3e5e7",
        src: "Parkinsons.png",
    },
    {
        color: "#d6d7dc",
        src: "Fastaid.png",
    },
    {
        color: "#e3e3e3",
        src: "Mondiran.png",
    },
    {
        color: "#21242b",
        src: "Touch.png",
    },
];

const slider2 = [
    {
        color: "#d4e3ec",
        src: "Poster.png",
    },
    {
        color: "#e5e0e1",
        src: "car.png",
    },
    {
        color: "#d7d4cf",
        src: "CLOTH.png",
    },
    {
        color: "#e1dad6",
        src: "hospital.png",
    },
];

export default function SlidingImages() {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

    return (
        <div ref={container} className={styles.slidingImages}>
            {/* First Slider */}
            <motion.div style={{ x: x1 }} className={styles.slider}>
                {slider1.map((project, index) => (
                    <div
                        key={index}
                        className={styles.project}
                        style={{ backgroundColor: project.color }}
                    >
                        <div className={styles.imageContainer}>
                            <img
                                src={`/images/${project.src}`}
                                alt="Sliding Project"
                                className={styles.image}
                            />
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Second Slider */}
            <motion.div style={{ x: x2 }} className={styles.slider}>
                {slider2.map((project, index) => (
                    <div
                        key={index}
                        className={styles.project}
                        style={{ backgroundColor: project.color }}
                    >
                        <div className={styles.imageContainer}>
                            <img
                                src={`/images/${project.src}`}
                                alt="Sliding Project"
                                className={styles.image}
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
            {/* Circle Animation */}
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    );
}
