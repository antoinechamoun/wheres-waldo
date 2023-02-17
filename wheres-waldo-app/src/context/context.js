import React, { useContext, useEffect, useState } from "react";
import useLocalStorage from "../custom_hooks/useLocalStorage";
import useModal from "../custom_hooks/useModal";
import useTimer from "../custom_hooks/useTimer";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const levels = [
    {
      level: 1,
      path: "/level1.jpg",
      toFind: [
        {
          name: "waldo",
          url: "/waldo.jpg",
          isFound: false,
          coords: { minX: 0.853, maxX: 0.895, minY: 0.785, maxY: 0.905 },
        },
      ],
    },
    {
      level: 2,
      path: "/level2.jpg",
      toFind: [
        {
          name: "waldo",
          url: "/waldo.jpg",
          isFound: false,
          coords: { minX: 0.5, maxX: 0.6, minY: 0.45, maxY: 0.65 },
        },
        {
          name: "odlaw",
          url: "/odlaw.jpg",
          isFound: false,
          coords: { minX: 0.19, maxX: 0.28, minY: 0.45, maxY: 0.58 },
        },
        {
          name: "wizard",
          url: "/wizard.jpg",
          isFound: false,
          coords: { minX: 0.57, maxX: 0.65, minY: 0.4, maxY: 0.6 },
        },
      ],
    },
  ];
  const [isPlaying, setIsPlaying] = useLocalStorage("isPlaying", {
    isPlaying: false,
    level: 0,
    timer: 0,
  });
  const [currentCoords, setCurrentCoords] = useState({
    x: 0,
    y: 0,
    isShown: false,
  });
  const [didWin, setDidWin] = useState(false);
  const { isShowing, show, hide } = useModal();
  const [winnerName, setWinnerName] = useState("");
  const [winnerTime, setWinnerTime] = useState("");
  const time = useTimer();

  const changeCoords = (coords, show) => {
    setCurrentCoords({ x: coords.x, y: coords.y, isShown: show });
  };

  const findChar = (name) => {
    let selectedLevelNew = isPlaying.selectedLevel.toFind.map((char) => {
      if (char.name === name) {
        return { ...char, isFound: true };
      }
      return char;
    });
    setIsPlaying({
      isPlaying: true,
      selectedLevel: { ...isPlaying.selectedLevel, toFind: selectedLevelNew },
      timer: 0,
    });
    changeCoords({ x: 0, y: 0, isShown: false });
  };

  const play = (selectedLevel) => {
    if (selectedLevel === 0) {
      setIsPlaying({ isPlaying: false, selectedLevel: 0, timer: 0 });
      hide();
    } else {
      setIsPlaying({
        isPlaying: true,
        selectedLevel: levels.find((level) => level.level === selectedLevel),
        timer: 0,
      });
    }
  };

  const checkWin = () => {
    const numOfFoundChar =
      isPlaying.isPlaying &&
      isPlaying.selectedLevel.toFind.filter((char) => char.isFound === true)
        .length;
    const numOfToFoundChar =
      isPlaying.isPlaying && isPlaying.selectedLevel.toFind.length;
    if (numOfFoundChar && numOfFoundChar === numOfToFoundChar) {
      setDidWin(true);
      show();
      setWinnerTime({
        min: time.props.children[0],
        sec: Number.parseInt(time.props.children[2]),
      });
    }
  };

  useEffect(() => {
    checkWin();
    // eslint-disable-next-line
  }, [isPlaying, didWin]);

  return (
    <AppContext.Provider
      value={{
        levels,
        play,
        isPlaying,
        currentCoords,
        changeCoords,
        findChar,
        didWin,
        setDidWin,
        time,
        isShowing,
        show,
        hide,
        winnerName,
        setWinnerName,
        winnerTime,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
