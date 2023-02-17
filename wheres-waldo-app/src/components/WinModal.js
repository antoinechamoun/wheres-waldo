import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { addScore, checkIfUnique } from "../firebase/firebase";

const WinModal = () => {
  const navigate = useNavigate();
  const { winnerTime, winnerName, setWinnerName, isPlaying, play } =
    useGlobalContext();

  const submitResult = async (e) => {
    e.preventDefault();
    let res = await checkIfUnique(isPlaying.selectedLevel.level, winnerName);
    let time = winnerTime.min * 60 + winnerTime.sec;
    if (res) {
      window.alert("This username not available. Please choose another");
    } else {
      addScore(isPlaying.selectedLevel.level, winnerName, time);
      navigate("/");
      play(0);
      setWinnerName("");
    }
  };

  return (
    <div className="winner-modal-container">
      <div className="inner-winner-modal-container">
        <h3>
          Congrats! You won in {winnerTime.min}:
          {winnerTime.sec < 10 ? "0" + winnerTime.sec : winnerTime.sec}!
        </h3>
        <form onSubmit={(e) => submitResult(e)}>
          <input
            type="text"
            value={winnerName}
            onChange={(e) => setWinnerName(e.target.value)}
            placeholder="Please Enter your name"
          />
        </form>
      </div>
    </div>
  );
};

export default WinModal;
