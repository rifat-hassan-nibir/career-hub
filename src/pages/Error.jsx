import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Oops...</h1>
      <Link to="/">
        <button className="btn">Go Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
