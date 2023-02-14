import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <img src="/error404.jpg" alt="Not available" className="error-img" />
      <Link className="goback-btn" to="/">
        Go back
      </Link>
    </div>
  );
};

export default Error;
