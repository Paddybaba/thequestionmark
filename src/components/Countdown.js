import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [counter, setCounter] = useState(1800);
  const [MM, setMM] = useState(0);
  const [SS, setSS] = useState(0);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    let m = Math.round(counter / 60 - (counter % 60) / 60);
    let s = counter % 60;

    let mm = ("0" + m).slice(-2);
    let ss = ("0" + s).slice(-2);

    setMM(mm);
    setSS(ss);

    return () => clearInterval(timer);
  }, [counter]);

  
    return (
    <>
      <div className="countdown">
        <h3>
          {MM}:{SS}
        </h3>
      </div>
    </>
  );
};

export default Countdown;
