import "../style.css";
import { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

export function FAQCard({ title, description }) {
  const [open, setOpen] = useState(false);

  function toggleState() {
    setOpen(!open);
  }

  function caret() {
    return open ? <RxCaretUp /> : <RxCaretDown />;
  }

  return (
    <div className="waste-water-tankering-faq-card" onClick={toggleState}>
      <div className="waste-water-tankering-faq-card-title">
        <span>{title}</span>
        <span>{caret()}</span>
      </div>

      {open ? (
        <>
          <span className="waste-water-tankering-faq-card-desc">
            {description}
          </span>

          <div className="waste-water-tankering-faq-card-line" />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
