import "../style.css";
import "../style.mobile.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBlogs } from "../../../Api/FetchData.js";
import { BlogCard } from "../../Blog/Components/BlogCard.jsx";
import { CreateBlog } from "./BlogForm.jsx";
import { BlogTemplatePick } from "./BlogTemplatePick.jsx";
import { BlogPreview } from "./BlogPreview.jsx";

function BlogComponentHeader() {
  const navigate = useNavigate();

  return (
    <div className="admin-blog-hdr">
      <span>Blogs</span>
      <button
        onClick={() => {
          navigate("/admin/dashboard/blog/template");
        }}
      >
        {" "}
        Create New Blog{" "}
      </button>
    </div>
  );
}

function BlogIndex({ search }) {
  const [blogs, setBlogs] = useState([]);
  const [blogSearch, setBlogSearch] = useState([]);
  const [loadBlogs, setLoadBlogs] = useState(false);

  async function getAllBlogs() {
    const res = await fetchBlogs();

    if (!res?.result) return;

    setBlogs(res.result);

    setLoadBlogs(true);
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  useEffect(() => {
    if (!search) {
      setBlogSearch([]);
    }

    const searchResult = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );

    setBlogSearch([...searchResult]);
  }, [search]);

  return (
    <div className="admin-blog">
      <BlogComponentHeader />

      <div className="admin-blog-cnt">
        {loadBlogs ? (
          <div className="admin-blog-grid">
            {!blogSearch[0]
              ? blogs.map((item, i) => (
                  <BlogCard
                    key={"admin-blog-card-" + i}
                    id={item?._id}
                    slug={item.slug}
                    image={item?.img}
                    title={item?.title}
                    content={item?.content}
                    readtime={item?.readTime}
                    date={item?.dateAdded}
                  />
                ))
              : blogSearch.map((item, i) => (
                  <BlogCard
                    key={"admin-blog-card-" + i}
                    id={item?._id}
                    slug={item.slug}
                    image={item?.img}
                    title={item?.title}
                    content={item?.content}
                    readtime={item?.readTime}
                    date={item?.dateAdded}
                  />
                ))}
          </div>
        ) : (
          <div className="loader-x blogs-loading">
            <div className="loader-ball" />
            <div className="loader-ball" />
            <div className="loader-ball" />
            <span>Loading</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function Blog({ search }) {
  const [msg, setMsg] = useState("");

  return (
    <>
      <Routes>
        <Route index element={<BlogIndex search={search} />} />
        <Route path="/template" element={<BlogTemplatePick />} />
        <Route
          path="/create/:id"
          element={<CreateBlog msg={msg} setMsg={setMsg} />}
        />
        <Route path="/:id" element={<CreateBlog msg={msg} setMsg={setMsg} />} />
        <Route
          path="/preview"
          element={<BlogPreview msg={msg} setMsg={setMsg} />}
        />
      </Routes>
    </>
  );
}
