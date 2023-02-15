import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import useTimer from "../custom_hooks/useTimer";

const Header = () => {
  const { isPlaying, play } = useGlobalContext();
  // const time = useTimer();

  return (
    <div className="header-container">
      {isPlaying.isPlaying ? (
        <div className="play-header">
          <Link to={"/"} onClick={() => play(0)} className="goback-header-btn">
            Back home
          </Link>
          {/* Time: {time} */}
          <div className="pic-to-find">
            {isPlaying.selectedLevel.toFind.map((char, id) => {
              return (
                <img
                  src={char.url}
                  key={id}
                  className={`${
                    char.isFound ? "char-to-find found" : "char-to-find"
                  }`}
                  alt="Not available"
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <img
            src="/title_img.jpg"
            alt="Where's Waldo?"
            className="title_img"
          />
          <img
            src="/Wheres_Waldo_title.svg"
            alt="logo"
            className="title_logo"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
