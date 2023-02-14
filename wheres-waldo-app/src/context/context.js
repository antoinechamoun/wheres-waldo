import React, { useContext, useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const levels = [
    {
      level: 1,
      path: "/level1.jpg",
      toFind: ["/waldo.jpg"],
    },
    {
      level: 2,
      path: "/level2.jpg",
      toFind: ["/waldo.jpg", "/odlaw.jpg", "/wizard.jpg"],
    },
  ];

  const [isPlaying, setIsPlaying] = useState({ isPlaying: false, level: 0 });

  const play = (selectedLevel) => {
    if (selectedLevel === 0) {
      setIsPlaying({ isPlaying: false, selectedLevel: 0 });
    } else {
      setIsPlaying({
        isPlaying: true,
        selectedLevel: levels.find((level) => level.level === selectedLevel),
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
