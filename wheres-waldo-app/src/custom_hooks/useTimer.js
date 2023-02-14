import { useEffect, useState } from "react";

const useTimer = () => {
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    setRestart(true);
  }, [window.location.href]);

  useEffect(() => {
    if (restart === true) {
      setTimer({ minutes: 0, seconds: 0 });
      setRestart(false);
    } else if (timer.seconds < 60) {
      setTimeout(
        () => setTimer({ ...timer, seconds: timer.seconds + 1 }),
        1000
      );
    } else {
      setTimer({ minutes: timer.minutes + 1, seconds: 0 });
    }
  }, [timer]);
  return (
    <span>
      {timer.minutes}:{timer.seconds < 10 ? "0" + timer.seconds : timer.seconds}
    </span>
  );
};

export default useTimer;
