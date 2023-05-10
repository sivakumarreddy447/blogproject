import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blogs = props.blogs;

  return (
    <div className="blog-list">
      <h1>Homepage</h1>
      <h2>{props.title}</h2>
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>written by {blog.author}</p>
            </Link>

            {/* <button
              onClick={() => {
                props.handleDelete(blog.id);
              }}
            >
              Delete
            </button>  */}
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
