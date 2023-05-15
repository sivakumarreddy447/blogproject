import { Link } from "react-router-dom";

const NotFoound = () => {
  return (
    <div className="not-found">
      <h1>Soory</h1>
      <p>That page cannot be found</p>
      <Link to="/">Back to the homepage....</Link>
    </div>
  );
};

export default NotFoound;
