import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper'
import './About.scss';
import { urlFor, client } from '../../client';
import { useState, useEffect } from 'react'

// const abouts = [
//   { title: 'Web Development', description: 'Proficient web developer', imgUrl: images.web_dev },
//   { title: 'Frontend Development', description: 'Component based developer with React', imgUrl: images.frontend_dev },
//   { title: 'Backend Development', description: 'APIRest developer with .Net Core', imgUrl: images.backend_dev },
//   { title: 'Web Animation', description: 'Smooth animations with Framer Motion Framework', imgUrl: images.web_animation }
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => {
        setAbouts(data);
      })
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Development</span> <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item" key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about', 'app__whitebg'
);
