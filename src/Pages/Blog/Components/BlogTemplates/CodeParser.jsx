import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { URL } from "../../../../Api/FetchData";

export function parseCode(arg) {
  return <Markdown children={arg} rehypePlugins={rehypeRaw} />;
}

export async function imageProcessor(data, element_id) {
  if (!data) return;

  if (typeof data == "object") {
    let reader = new FileReader();

    reader.readAsDataURL(data?.get("image"));
    try {
      reader.onload = () => {
        if (reader.result) {
          document.querySelector(`#${element_id}`).src = reader.result;
        }
      };
    } catch (err) {
      return "err", err;
    }

    reader.onerror = () => {
      console.log("Error : ", error);
    };

    return;
  } else {
    try {
      const res = await fetch(`${URL}/blog/blog-image?id=${data}`);
      const _data = await res.json();

      //   console.log(_data);

      document.querySelector(`#${element_id}`).src = _data.imageUrl;
    } catch (err) {
      document.querySelector(
        `#${element_id}`
      ).src = `${URL}/blog/blog-image/${data}`;
      return;
    }
  }
}
