import React, { useEffect, useState } from 'react'
import styles from "./CounterCard.module.css"
const CounterCard = ({id,handelDelete}) => {
    let [count, setCount] = useState(0)
    const [up, setUp] = useState(true);
    const [isPlay, setIsPlay] = useState(true);

    const toggleIsPlay = () => {
        setIsPlay(!isPlay);
    }

    const deleteBtn = ()=>{
        handelDelete(id);
    }

    const handleInterval = () => {
        if (isPlay) {
          if (up) {
            setCount((prev) => prev + 1);
          } else {
            setCount((prev) => prev - 1);
          }
        }
      };
      
      const toggleUp = ()=>{
          setUp(!up);
      }
      
      useEffect(() => {
        const intervalId = setInterval(handleInterval, 1000);
        return () => clearInterval(intervalId);
      }, [isPlay, up]);
      
    return (
        <div className={styles.main}>
            <div>
                <p>{count}</p>
            </div>
            <div>
                <button onClick={toggleIsPlay}>{isPlay ? "Pause" : "Play"}</button>
                <button onClick={toggleUp}>{up ? "Down" : "Up"}</button>
                <button onClick={deleteBtn}>Delete</button>
            </div>
        </div>
    )
}

export default CounterCard
