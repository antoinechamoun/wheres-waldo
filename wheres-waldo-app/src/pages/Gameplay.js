import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const Gameplay = () => {
  const { level } = useParams();
  const { isPlaying } = useGlobalContext();
  return (
    <div className="game-container">
      <img
        src={isPlaying.selectedLevel.path}
        alt="not available"
        className="gameplay-img"
      />
    </div>
  );
};

export default Gameplay;
