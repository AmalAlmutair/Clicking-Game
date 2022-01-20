import React, { useState, useEffect } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [increament, setincreament] = useState(50);
  const attemptionCount = () => {
    setCounter(counter + increament);
  };

  //   const upgrade = [500, 300];

  const upgradOption = () => {
    setCounter(counter - 500);
    setincreament(increament + 50);
  };
  const upgradOption2 = () => {
    setCounter(counter - 300);
    setincreament(increament + 100);
  };

  //   const [seconds, setSeconds] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setSeconds((seconds) => seconds + 1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div>
      <h1 className="increament">Your increament per Click is {increament}</h1>
      <h1 className="counter">{counter}$</h1>
      <button className="button" onClick={attemptionCount}>
        {" "}
        Let Start{" "}
      </button>
      <br />

      <div>
        <div className="upgrade">
          {counter >= 500 && (
            <button onClick={upgradOption}>
              {" "}
              You Got Upgrade:
              <br />
              "you can speedup your gain by 50 per click Cost $500"{" "}
            </button>
          )}

          {counter >= 700 && (
            <button onClick={upgradOption2}>
              {" "}
              WOOOW You Got New Upgrade
              <br />
              "you can speedup your gain by 100 per click Cost $300"{" "}
            </button>
          )}

          {/* {counter >= 700 && (
            <button onClick={IntervalExample}>
              {" "}
              WOOOW You Got New Upgrade
              <br />
              "you can speedup your gain by 100 per click Cost $300"{" "}
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Home;
