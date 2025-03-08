import '../style.css'
import '../style.mobile.css'
import { useNavigate } from 'react-router-dom'
import Template1 from '/images/SugeTemplates/Template1.webp'
import Template2 from '/images/SugeTemplates/Template2.webp'
import Template3 from '/images/SugeTemplates/Template3.webp'
import Template4 from '/images/SugeTemplates/Template4.webp'
import Template5 from '/images/SugeTemplates/Template5.webp'

function BlogTemplate ({ template, nav, display }) {

    const navigate = useNavigate()

    function handleClick () {
        navigate(`/admin/dashboard/blog/create/template-${nav}`)
    }

    return (
    <div className='blog-template-display' onClick={handleClick}>
        <div>
            <img src={display} />
        </div>

        <span>{template}</span>
    </div>
    ) 
}

export function BlogTemplatePick () {

    const navigate = useNavigate()

    return (
        <div className='blog-template-choice'>
            <div className='create-blog-hdr'>
                <span onClick={() => navigate(-1)}> {'<'} </span>
                <span>Choose a Template</span>
            </div>

            <div className='blog-template-cnt'>
                <BlogTemplate template='template-1' nav='1' display={Template1} />
                <BlogTemplate template='template-2' nav='2' display={Template2} />
                <BlogTemplate template='template-3' nav='3' display={Template3} />
                <BlogTemplate template='template-4' nav='4' display={Template4} />
                <BlogTemplate template='template-5' nav='5' display={Template5} />
            </div>
        </div>
    )
}