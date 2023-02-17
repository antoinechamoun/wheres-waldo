import { useEffect, useState } from "react";
import { displayScores } from "../firebase/firebase";

const Leaderboard = () => {
  const [level1, setLevel1] = useState([]);
  const [level2, setLevel2] = useState([]);

  const loadData = async () => {
    const res1 = await displayScores("1");
    const res2 = await displayScores("2");
    setLevel1(res1);
    setLevel2(res2);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="leaderboard-container">
      <div>
        <h1 className="red">Leaderboard (Top 3 for each level)</h1>
        <div className="levels">
          <h2 className="red">Level 1</h2>
          {level1.length !== 0 &&
            level1.map((score, id) => {
              return (
                <div key={id} className="person-score">
                  <h4>{score.name}</h4>
                  <h4>{score.score} seconds</h4>
                </div>
              );
            })}
        </div>
        <div className="levels">
          <h2 className="red">Level 2</h2>
          {level2.length !== 0 &&
            level2.map((score, id) => {
              return (
                <div key={id} className="person-score">
                  <h4>{score.name}</h4>
                  <h4>{score.score} seconds</h4>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
