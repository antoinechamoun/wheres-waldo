import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const CardLevel = ({ cardLevel }) => {
  const { play } = useGlobalContext();
  const { level, path } = cardLevel;
  return (
    <div className="level-container">
      <Link
        to={`/gameplay/${level}`}
        className="level-link"
        onClick={() => play(level)}>
        <img src={path} alt="not available" className="main-level-cover" />
        <h4 className="level-title">Level {level}</h4>
      </Link>
    </div>
  );
};

export default CardLevel;
