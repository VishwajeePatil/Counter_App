import React, { useState } from 'react'
import styles from "./Counter.module.css"
import CounterCard from '../CounterCard/CounterCard';

const Counter = () => {
    const [counters, setCounters] = useState([]);
    const [counterId, setCounterId] = useState(1);
    const handelClick = (prev) => {
        setCounters([...counters, { id: counterId }]);
        setCounterId(counterId + 1);
    }
    const handelDelete = (id)=>{
        setCounters(counters.filter((counter) => counter.id !== id));
    }
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <button onClick={handelClick}> Add Counter </button>
            </div>
            <div className={styles.counterholder}>
                {
                    counters.length === 0 ? (<div className={styles.heading}>Click On Add Counter</div>) : 
                    (<div className={styles.holder}> 
                    {counters.map((counter) => (
                        <CounterCard key={counter.id} id={counter.id} handelDelete={handelDelete}/>
                    ))}
                    </div>)
                }
            </div>
        </div>
    )
}

export default Counter
