import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogPage = () => {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blogs.find((b) => b.id === id)
  );

  return (
    <div style={styles.blogContainer}>
      <h1 style={styles.blogTitle}>{blog.title}</h1>
      <img
        src={blog.coverImage}
        alt={blog.title}
        style={styles.blogImage}
      />
      <p style={styles.blogDescription}>{blog.description}</p>
      <Link style={styles.editLink} to={`/edit/${blog.id}`}>
        Edit Blog
      </Link>
    </div>
  );
};

const styles = {
  blogContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  blogTitle: {
    fontSize: "32px",
    margin: "0 0 20px 0",
    color: "#333",
  },
  blogImage: {
    width: "100%",
    height: "auto",
    marginBottom: "20px",
  },
  blogDescription: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
  },
  editLink: {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "18px",
    marginTop: "20px",
    display: "block",
  },
};

export default BlogPage;
