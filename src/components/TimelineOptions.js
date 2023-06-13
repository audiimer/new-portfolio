import React from 'react'
import styles from "../styles.module.css"

function TimelineOptions({ setActiveComponent }) {
  return (
    <div>
      <section className={styles.timeline}>
        <button className={styles.timelinebtn} onClick={() => setActiveComponent("projects")}>
          <p>Projects</p>
        </button>
        <button className={styles.timelinebtn} onClick={() => setActiveComponent("experience")}>
          <p>Experience</p>
        </button>
        <button className={styles.timelinebtn} onClick={() => setActiveComponent("education")}>
          <p>Education</p>
        </button>
        <button className={styles.timelinebtn} onClick={() => setActiveComponent("certification")}>
          <p>Certification</p>
        </button>
      </section>
    </div>
  );
}

export default TimelineOptions
