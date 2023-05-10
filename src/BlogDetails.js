import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Blogdetails = () => {
  const { id } = useParams();
  const { blogs, pending, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  const history = useNavigate();
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };
  return (
    <div className="blog-details">
      {error && <h1>{error}</h1>}
      {pending && <h2>Still Loading</h2>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>written by {blogs.author}</p>
          <div>{blogs.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default Blogdetails;
