import "../style.css";
import "../style.mobile.css";
import "../style.1600.css";
import { useState, useEffect } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DAYS, MONTH } from "./PlaceholderData.js";
import { setBlogData } from "../../../Redux/Blogs.jsx";
import { parseCode } from "./BlogTemplates/CodeParser.jsx";
import { fetch_image } from "../../../Api/FetchData.js";
import { URL } from "../../../Api/FetchData";

export function BlogCard({ id, image, title, content, readtime, date, slug }) {
  const [dateConvert, setDateConvert] = useState("");
  const [image_source, setImage_source] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  function readBlog() {
    if (pathname.includes("admin")) {
      // navigate(`/admin/dashboard/blog/${id}`);
      navigate(`/admin/dashboard/blog/${slug}`);
      return;
    } else {
      dispatch(
        setBlogData({
          _id: "",
          template: "",
          readTime: 0,
          title: "",
          content: [],
        })
      );
      navigate(`/blog/${slug}`);
    }
  }

  async function getImage() {
    try {
      const res = await fetch(`${URL}/blog/blog-image-thumbnail?id=${image}`);
      const _data = await res.json();

      return _data.imageUrl;
    } catch (err) {
      return "";
    }
  }

  function imageGetter() {
    const response = getImage().then((res) => {
      setImage_source(res);
    });
  }

  useEffect(() => {
    if (!date) {
      setDateConvert("");
    }

    let convertedDate = new Date(date);

    setDateConvert(convertedDate);
  }, [date]);

  useEffect(() => {
    imageGetter();
  }, []);

  return (
    <div className="blog-card" onClick={readBlog}>
      <div className="blog-card-img">
        {image ? (
          <img src={image_source} alt="blog-image" />
        ) : (
          <div className="blog-img-alt">{title?.split("")[0]}</div>
        )}
      </div>

      <div className="blog-card-cnt">
        <div className="blog-card-title">
          {title ? (
            <>{title.length <= 60 ? title : title.slice(0, 60) + "..."}</>
          ) : (
            "----"
          )}
        </div>

        <div className="blog-card-datetime">
          <div>
            <span>
              {" "}
              <IoCalendarOutline />{" "}
            </span>
            <span>
              {date
                ? dateConvert
                  ? `${DAYS[dateConvert.getDay()]} ${
                      MONTH[dateConvert.getMonth()]
                    } ${dateConvert.getFullYear()} `
                  : "----"
                : "----"}
            </span>
          </div>

          <div />

          <div>
            <span>
              {" "}
              <GoClock />{" "}
            </span>
            <span>{readtime || 3} mins</span>
          </div>
        </div>

        <div className="blog-card-content">{parseCode(content)}</div>
      </div>
    </div>
  );
}
