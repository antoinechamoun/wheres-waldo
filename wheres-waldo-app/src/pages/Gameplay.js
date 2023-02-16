import { useRef } from "react";
import Modal from "../components/Modal";
import { useGlobalContext } from "../context/context";

const Gameplay = () => {
  const { isPlaying, changeCoords, currentCoords } = useGlobalContext();
  const imageRef = useRef(null);

  const checkFound = (e) => {
    changeCoords({ x: e.pageX, y: e.pageY }, true);
  };

  return (
    <div className="game-container">
      {currentCoords.isShown && (
        <Modal
          imgSize={{
            width: imageRef.current.width,
            height: imageRef.current.height,
          }}
        />
      )}
      <img
        ref={imageRef}
        src={isPlaying.selectedLevel.path}
        alt="not available"
        className="gameplay-img"
        onClick={(e) => checkFound(e)}
      />
    </div>
  );
};

export default Gameplay;
