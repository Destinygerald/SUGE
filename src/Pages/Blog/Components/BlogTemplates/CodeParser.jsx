import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { URL } from "../../../../Api/FetchData";

export function parseCode (arg) {
    return (
        <Markdown children={arg} rehypePlugins={rehypeRaw} />
    )
}

export function imageProcessor (data, element_id) {

    if (typeof data == 'object') {
        let reader = new FileReader();
        
                
        reader.readAsDataURL(data?.get('image'));
        // reader.readAsDataURL(data);

        try {
            reader.onload = () => {
                if (reader.result){
                    document.querySelector(`#${element_id}`).src = reader.result
                }              
            };

        } catch (err) {
            return ("err", err)
        }



        reader.onerror = () => {
            console.log("Error : ", error)
        }

        return;
    } else {
        document.querySelector(`#${element_id}`).src = `${URL}/blog/blog-image/${data}`;
        return;
    }
}