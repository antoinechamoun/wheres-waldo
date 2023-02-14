import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const Header = () => {
  const { isPlaying, play } = useGlobalContext();
  return (
    <div className="header-container">
      {isPlaying.isPlaying ? (
        <div className="play-header">
          <Link to={"/"} onClick={() => play(0)} className="goback-header-btn">
            Back home
          </Link>
          <div className="pic-to-find">
            {isPlaying.selectedLevel.toFind.map((char, id) => {
              return <img src={char} key={id} className="char-to-find" />;
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
