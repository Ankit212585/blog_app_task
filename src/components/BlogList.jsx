import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs);

  return (
    <div style={styles.blogListContainer}>
      <h2 style={styles.heading}>All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog.id} style={styles.blogCard}>
          <h3 style={styles.blogTitle}>{blog.title}</h3>
          <p style={styles.blogDescription}>
            {blog.description.substring(0, 100)}...
          </p>
          <Link style={styles.readMore} to={`/blog/${blog.id}`}>
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

const styles = {
  blogListContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  heading: {
    fontSize: "32px",
    color: "#333",
  },
  blogCard: {
    width: "100%",
    maxWidth: "600px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
  },
  blogTitle: {
    fontSize: "24px",
    margin: "0 0 10px 0",
  },
  blogDescription: {
    fontSize: "16px",
    color: "#666",
  },
  readMore: {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "18px",
    marginTop: "10px",
    display: "block",
  },
};

export default BlogList;
