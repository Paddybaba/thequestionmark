import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  return (
    <>
      <div className="countdown">
        <h3>{counter}</h3>
      </div>
    </>
  );
};

export default Countdown;
