import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import QuoteSlice from "./Redux/Quote.js";
import QuotePopupSlice from "./Redux/QuotePopup.js";
import LoadPopupSlice from "./Redux/LoadPopup.js";
import BlogDataSlice from "./Redux/Blogs.jsx";
import BlogListSlice from "./Redux/BlogList.jsx";
import BlogCreateSlice from "./Redux/AdminBlog.jsx";
import PopupListSlice from "./Redux/PopupList.jsx";
import MessageSlice from "./Redux/messages.js";

const store = configureStore({
  reducer: {
    blogData: BlogDataSlice,
    blogCreate: BlogCreateSlice,
    quote: QuoteSlice,
    quote_popup: QuotePopupSlice,
    loadPopup: LoadPopupSlice,
    blogList: BlogListSlice,
    admin_popups: PopupListSlice,
    messages: MessageSlice,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
