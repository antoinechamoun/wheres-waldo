import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/context";
import checkImg from "../utils/checkImg";

const Modal = ({ imgSize }) => {
  const { isPlaying, currentCoords, findChar } = useGlobalContext();
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current.style.left = `${currentCoords.x + 10}px`;
    modalRef.current.style.top = `${currentCoords.y + 10}px`;
  }, [currentCoords]);

  const handleChar = (name) => {
    let char = isPlaying.selectedLevel.toFind.find(
      (char) => char.name === name
    );
    let coords = {
      x: currentCoords.x / imgSize.width,
      y: (currentCoords.y - 90) / imgSize.height,
    };

    let result = checkImg(coords, char.coords);
    if (result) {
      findChar(name);
    } else {
      window.alert("Try again");
    }
  };
  if (!currentCoords.isShown) {
    return null;
  }

  return (
    <div className="modal-container" ref={modalRef}>
      {isPlaying.selectedLevel.toFind.map((item, id) => {
        return (
          <button
            key={id}
            onClick={() => handleChar(item.name)}
            className="char-btn">
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default Modal;
