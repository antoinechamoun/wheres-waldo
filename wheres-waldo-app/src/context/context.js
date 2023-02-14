import React, { useContext, useEffect, useState } from "react";
import useTimer from "../custom_hooks/useTimer";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const levels = [
    {
      level: 1,
      path: "/level1.jpg",
      toFind: [{ url: "/waldo.jpg", isFound: false }],
    },
    {
      level: 2,
      path: "/level2.jpg",
      toFind: [
        { url: "/waldo.jpg", isFound: false },
        { url: "/odlaw.jpg", isFound: false },
        { url: "/wizard.jpg", isFound: false },
      ],
    },
  ];

  const [isPlaying, setIsPlaying] = useState({
    isPlaying: false,
    level: 0,
    timer: 0,
  });

  const play = (selectedLevel) => {
    if (selectedLevel === 0) {
      setIsPlaying({ isPlaying: false, selectedLevel: 0, timer: 0 });
    } else {
      setIsPlaying({
        isPlaying: true,
        selectedLevel: levels.find((level) => level.level === selectedLevel),
        timer: 0,
      });
    }
  };

  return (
    <AppContext.Provider value={{ levels, play, isPlaying }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
