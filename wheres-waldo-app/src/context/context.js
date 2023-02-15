import React, { useContext } from "react";
import useLocalStorage from "../custom_hooks/useLocalStorage";

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
          coords: { minX: 0.47, maxX: 0.51, minY: 0.41, maxY: 0.51 },
        },
        {
          name: "odlaw",
          url: "/odlaw.jpg",
          isFound: false,
          coords: { minX: 0.19, maxX: 0.21, minY: 0.4, maxY: 0.52 },
        },
        {
          name: "wizard",
          url: "/wizard.jpg",
          isFound: false,
          coords: { minX: 0.57, maxX: 0.61, minY: 0.41, maxY: 0.48 },
        },
      ],
    },
  ];

  const [charToFind, setCharToFind] = useLocalStorage("char", "hi");

  const [isPlaying, setIsPlaying] = useLocalStorage("isPlaying", {
    isPlaying: false,
    level: 0,
    timer: 0,
  });

  const selectChar = (char) => {
    setCharToFind(char);
  };

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
    <AppContext.Provider
      value={{ levels, play, isPlaying, selectChar, charToFind }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
