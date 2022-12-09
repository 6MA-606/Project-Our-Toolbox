import React, { useState } from "react";
import styles from './Shortcut.module.css';
import { motion } from 'framer-motion';


const Shortcut = (props) => {

    const { thumbnail, bgcolor, color, labelAlign, href, thumbnailInvert, icon, bgimage, tooltip, internalThumbnail } = props;

    const [show, setShow] = useState(false);

    let invert = thumbnailInvert ? 1 : 0;
    let style_pack = {
        backgroundColor: bgcolor,
        backgroundImage: bgimage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: icon ? '70px' : '300px',
        height: '70px'
    }

    const content = (
        <div style={{ color: color, display: 'flex', flex: '230px', justifyContent: labelAlign }}>
            { props.children }
        </div>
    );

    const tooltip_form = (tooltip) => {
        if (tooltip !== undefined && tooltip !== '') {
            return (
                <motion.span
                    className={ styles.tooltiptext }
                    animate={show ? { opacity: 1, y: "-120%" } : { opacity: 0, y: "0%" }}
                >
                    { tooltip }
                </motion.span>);
        }
        return '';
    }

    const thumbnail_form = (internalThumbnail) => {

        if (internalThumbnail) return props.children;

        return (
            <img
                src={ thumbnail }
                height="70px"
                weight="auto"
                alt="thumbnail missing"
                style={{ flex: '70px', filter: 'invert(' + invert + ')', pointerEvents: 'none' }}
            />
        );
    }

    return (
        <div className={ styles.shortcut }>
            { tooltip_form(tooltip) }
            <a href={ href } target="_blank">
                <motion.div
                    className={ styles.item }
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", bounce: 0.7 }}
                    onMouseEnter={() => {setShow(true)}}
                    onMouseLeave={() => {setShow(false)}}
                >
                    <div className={ styles.container } style={ style_pack }>
                        { thumbnail_form(internalThumbnail) }
                        { icon ? '' : content }
                    </div>
                </motion.div>
            </a>
        </div>
    );
}

export default Shortcut;