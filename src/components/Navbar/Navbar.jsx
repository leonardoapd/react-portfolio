import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import './Navbar.scss';
import { images } from '../../constants';
import { motion } from 'framer-motion';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <span class="material-icons-outlined md-36">
                    terminal
                </span>
                <a class="logo" href="#home">Leonardo <br /> Perdomo</a>
                {/* <img src={images.logo_transparent} width="20%" alt="logo" /> */}
            </div>
            <ul className="app__navbar-links">
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div></div>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {
                    toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                        >
                            <HiX onClick={() => setToggle(false)} />
                            <ul>
                                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                    <li key={`{item}`}>
                                        <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )
                }

            </div>
        </nav>
    );
};

export default Navbar;