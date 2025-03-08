import '../../style.css'
import '../../style.mobile.css'
import '../../style.1600.css'

export function BlogTemplate2ListItem({title, content, index}) {
    return (
        <div className='blog-template-2-frame-list-cnt-item'>
            <span>{index}</span>
    
            <div>
                <span>{title}</span>
                <p>{content}</p>
            </div>
        </div>
    )
}