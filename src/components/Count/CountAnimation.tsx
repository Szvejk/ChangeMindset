import { useState, useEffect } from "react";


interface CounterProps {
  duration: number;
  endCount: number;
}

const DELAY=500;

 export const CountAnimation = ({ duration, endCount }: CounterProps) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const start = Date.now();
      const end = start + duration;
      const step = () => {
        const now = Date.now();
        const remaining = end - now;
        if (remaining < 0) {
          setCount(endCount);
          return;
        }
        const value = Math.round(((now - start) / duration) * endCount);
        setCount(value);
      };
      const intervalId = setInterval(step, 20);
      return () => clearInterval(intervalId);
    }, DELAY);

    return () => clearTimeout(timerId);
  }, []); //[DELAY, duration, endCount]

  return (
    <div 
      style={{
        animation: `${duration / 1000}s infinite alternate ease-in-out`,
        counterReset: "num",
        fontWeight: 800,
        fontSize: "40px",
      }}>
    
      {count}
    </div>
  );
};


