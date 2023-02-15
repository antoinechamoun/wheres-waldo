import { useRef, useState } from "react";
import Modal from "../components/Modal";
import { useGlobalContext } from "../context/context";

const Gameplay = () => {
  // const { level } = useParams();
  const { isPlaying } = useGlobalContext();
  const imageRef = useRef(null);
  const [cuurentCoords, setCurrentCoords] = useState();
  const [modalCoords, setModalCoords] = useState({
    x: 0,
    y: 0,
    isShown: false,
  });

  const checkFound = (e) => {
    setCurrentCoords({
      x: e.pageX / imageRef.current.width,
      y: (e.pageY - 90) / imageRef.current.height,
    });
    setModalCoords({ x: e.pageX, y: e.pageY, isShown: true });
  };

  return (
    <div className="game-container">
      {modalCoords.isShown ? (
        <Modal
          coords={modalCoords}
          char={isPlaying.selectedLevel}
          cuurentCoords={cuurentCoords}
        />
      ) : null}
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
