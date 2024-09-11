import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import BlogPage from "./components/BlogPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NewBlog from "./components/NewBlog";
import EditBlog from "./pages/EditBlog";
import ErrorPage from "./pages/404Errorpage";

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <Navbar />
        <div style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/new" element={<NewBlog />} />
            <Route path="/edit/:id" element={<EditBlog />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    fontFamily: '"Arial", sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  mainContent: {
    padding: "20px",
  },
};

export default App;
