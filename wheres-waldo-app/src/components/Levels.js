import { useGlobalContext } from "../context/context";
import CardLevel from "./CardLevel";

const Levels = () => {
  const { levels } = useGlobalContext();

  return (
    <div className="levels-container">
      {levels.map((level, id) => {
        return <CardLevel key={id} cardLevel={level} />;
      })}
    </div>
  );
};

export default Levels;
