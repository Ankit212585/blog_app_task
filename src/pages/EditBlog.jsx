import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateBlog } from "../redux/blogSlice";
import { RichTextEditor } from "@mantine/rte";

const EditBlog = () => {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blogs.find((b) => b.id === id)
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setDescription(blog.description);
      setCoverImage(blog.coverImage);
    }
  }, [blog]);

  const handleSubmit = () => {
    dispatch(
      updateBlog({
        id: blog.id,
        title,
        description,
        coverImage,
      })
    );
    navigate(`/blog/${blog.id}`);
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>Edit Blog</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={styles.input}
      />
      <RichTextEditor
        value={description}
        onChange={setDescription}
        style={styles.editor}
      />
      <input
        type="text"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
        placeholder="Cover Image URL"
        style={styles.input}
      />
      <button onClick={handleSubmit} style={styles.submitButton}>
        Update Blog
      </button>
    </div>
  );
};

const styles = {
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "28px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  editor: {
    width: "100%",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
};

export default EditBlog;
