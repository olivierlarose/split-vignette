import { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function index({mousePosition, projects}) {
  const [index, setIndex] = useState(0);
  const {x, y} = mousePosition;

  return (
    <div className={styles.description}>
        <div className={styles.descriptionContainer}>
            {
                projects.map( ({name}, i) => {
                    return <p onMouseOver={() => {setIndex(i)}} key={`p${i}`}>
                        {name}
                    </p>
                })
            }
        </div>
         <motion.div
         className={styles.vignette}
         style={{x, y}}
         >
          <Image 
            src={`/images/${projects[index].handle}/about.jpg`}
            alt="image"
            fill
          />
        </motion.div>
    </div>
  )
}
