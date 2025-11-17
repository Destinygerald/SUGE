import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMessage } from "../Redux/messages";
import "./style.css";
import "./style.1600.css";
import "./style.mobile.css";

function MessageBox({ label, type, id }) {
  const dispatch = useDispatch();

  function handleClass() {
    if (type == "success") return "success-message message-box";
    if (type == "error") return "error-message message-box";
    if (type == "warning") return "warning-message message-box";

    return "warning-message message-box";
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeMessage({ id }));
    }, 1200);

    // return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={handleClass()}>
      {label}
      <div className="message-box-timeout" />
    </div>
  );
}

export function MessageQueue() {
  const messages = useSelector((state) => state.messages.value);

  return messages[0] ? (
    <div className="message-queue">
      {messages.map((message, index) => (
        <MessageBox
          key={index}
          label={message.label}
          type={message.type}
          id={message.id}
        />
      ))}
    </div>
  ) : (
    <></>
  );
}
