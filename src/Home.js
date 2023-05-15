import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { blogs, pending, error } = useFetch("http://localhost:8000/blogs");
  //   const handleDelete = (id) => {
  //     const newblogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newblogs);
  //   };

  return (
    <div className="home">
      {error && <h1>{error}</h1>}
      {pending && <h2>Still Loading</h2>}

      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
