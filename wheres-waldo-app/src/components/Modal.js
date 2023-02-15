import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/context";

const Modal = ({ char, coords }) => {
  const { selectChar } = useGlobalContext();
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current.style.left = `${coords.x + 50}px`;
    modalRef.current.style.top = `${coords.y + 50}px`;
  }, [coords, char]);

  return (
    <div className="modal-container" ref={modalRef}>
      {char.toFind.map((item, id) => {
        return (
          <button
            key={id}
            onClick={() => selectChar(item.name)}
            className="char-btn">
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default Modal;
