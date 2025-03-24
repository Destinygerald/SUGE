import '../../style.css'
import '../../style.mobile.css'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { AiOutlineDelete } from 'react-icons/ai'
import { useEffect, useState, useRef } from 'react'
import { all_popups, activate_popup, popup_content, deactivate_popup, create_popup, edit_popup, delete_popup } from '../../../../Api/FetchData.js'
import { useSelector, useDispatch } from 'react-redux'
import { setPopups } from '../../../../Redux/PopupList.jsx'

function MessageDisplay ({ msg, setMsg }) {

    setTimeout(() => {
        setMsg('')
    }, 2000)

    return (
        <div className='alert-message'>
            {msg}
        </div>
    )
}



function PopupCard ({  _id, title, activated, setMsg, setLoading, setReload, loading, reload }) {

    const btn1Ref  = useRef(null)
    const btn2Ref = useRef(null)

    const navigate = useNavigate()

    function popupContents (e) {
        if ( btn1Ref.current.contains(e.target) || btn2Ref.current.contains(e.target)) {
            return;
        }

        navigate(`/admin/dashboard/popups/${_id}`)
    }

    async function activatePopup () {
        const res = await activate_popup(_id)

        if (res.status == 'Ok' || res.status == 200) {
            setMsg('Successfully Activated')

            setReload(reload => reload = reload + 1 )
            
            return;
        }

        setMsg('Error, Try Again')
    }

    async function deactivatePopup () {
        const res = await deactivate_popup(_id)

        if (res.status == 'Ok' || res.status == 200) {
            
            setMsg('Successfully Deactivated')
            
            setReload(reload => reload = reload + 1 )
            return;
        }

        setMsg('Error, Try Again')
    }

    async function deletePopup () {
        if (loading) return;

        setLoading(true)

        const res = await delete_popup(_id)

        if (res.status == 'Ok' || res.status == 200) {
            setReload(reload => reload = reload + 1 )
            setMsg('Successfully Deleted')
            setLoading(false)    
            return;
        }

        setLoading(false)
        setMsg('Error, Try Again')
    }

    async function activate_deactivate () {

        if (loading) return;

        setLoading(true)

        if (activated) {
            await deactivatePopup()
            setLoading(false)
            return;
        }

        await activatePopup()
        setLoading(false)
        return;
    }

    return (    
        <div className='admin-popup-card' onClick={popupContents}>
            <span>{_id}</span>

            <span>{!title ? '----' : title.length < 28 ? (title.slice(0, 28) + '...') : title}</span>

            <span>
                <div className='admin-popup-activate' ref={btn1Ref} onClick={activate_deactivate} disabled={loading}>
                    <div className={activated ? 'admin-popup-activate-btn activated' : 'admin-popup-activate-btn'}>
                        Activated
                    </div>
                
                    <div className={activated ? 'admin-popup-activate-btn' : 'admin-popup-activate-btn deactivated'}>
                        Deactivated
                    </div>
                </div>
            </span>

            <span ref={btn2Ref} onClick={deletePopup}><AiOutlineDelete /></span>
        </div>
    )
}

function Index () {

    const [ loading, setLoading ] = useState(true)
    const [ actionLoading, setActionLoading ] = useState(false)
    const [ msg, setMsg ] = useState('')
    const [ reload, setReload ] = useState(0)
    const popupList = useSelector(state => state.admin_popups.value.list)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function createPopup () {
        navigate('/admin/dashboard/popups/create')
    }

    async function getPopups () {
        const res = await all_popups()
        setLoading(false)

        if (res.status == 200 || res.status == 'Ok'  ) {
            dispatch(setPopups([...res.data]))
            return
        }
    }

    useEffect(() => {
        getPopups()
    }, [reload])

    return (
        <div className='admin-popup-list-page'>
            <div className='admin-blog-hdr'>
                <span>Popups</span>
                <button onClick={createPopup}> Create New Popup </button>
            </div>

            {
                loading
                ?
                <div className='loader-x'>
                    <div className='loader-ball' />
                    <div className='loader-ball' />
                    <div className='loader-ball' />
                </div>
                :
                popupList[0]
                ?
                <div className='admin-popup-list'>
                    <div className='admin-popup-list-cnt'>
                        {
                            popupList.map((item, i) => (
                                <PopupCard key={'popup-card-' + i} _id={item?._id} title={item?.title} activated={item?.activated} setMsg={setMsg} setLoading={setActionLoading} loading={actionLoading} setReload={setReload} reload={reload} />
                            ))
                        }
                    </div>

                    {
                        actionLoading
                        ?
                        <div className='loader-x'>
                            <div className='loader-ball' />
                            <div className='loader-ball' />
                            <div className='loader-ball' />
                        </div>
                        :
                        <></>
                    }
                </div>
                :
                <div className='unavailable'>No Popup available</div>
            }

            {
                msg
                ?
                <MessageDisplay msg={msg} setMsg={setMsg} />
                :
                <></>
            }
        </div>
    )
}

function PopupForm ({ form, changeHandler }) {
    return (
        <div className='admin-popup-form'>
            <input maxLength={40} type='text' name='title' placeholder='Popup Title' value={form?.title} onChange={changeHandler} />
            <textarea maxLength={360} name='content' placeholder='Popup Content' value={form?.content} onChange={changeHandler}></textarea>
            {/* <input name='navigation' type='text' placeholder='Link that the popup leads to [*Can be set to null]' value={form?.navigation} onChange={changeHandler} /> */}
        </div>
    )
}

function PopupCreateForm () {
    
    const [form, setForm] = useState({
        title: '',
        content: '',
        navigation: ''
    })
    const [ loading, setLoading ] = useState(false)
    const [ msg, setMsg ] = useState('')

    const navigate =  useNavigate()

    function goBack() {
        navigate('/admin/dashboard/popups')
    }

    function changeHandler (e) {
        setForm({...form, [e.target.name]: e.target.value })
    }

    async function createPopup () {

        if (!form?.content || !form?.title) {
            setMsg('Cant submit empty details')
            return;
        }

        setLoading(true)
        const res = await create_popup({...form})

        if (res.status == 'Created' || res.status == 201) {
            setMsg('Successfully Activated')
            setLoading(false)
            goBack()
            return;
        }

        setLoading(false)
        setMsg('Error, Try Again')
    }

    return (
        <div className='admin-popup-create'>
            
            <div className='admin-blog-hdr'>
                <span>Create Popup</span>

                <button className='back-btn' onClick={goBack}>Back</button>
            </div>

            <PopupForm form={form} changeHandler={changeHandler} />

            
            <button onClick={createPopup} disabled={loading}>Create Popup</button>

            {
                loading
                ?
                <div className='loader-x'>
                    <div className='loader-ball' />
                    <div className='loader-ball' />
                    <div className='loader-ball' />
                </div>
                :
                <></>
            }

            {
                msg
                ?
                <MessageDisplay msg={msg} setMsg={setMsg} />
                :
                <></>
            }
        </div>
    )
}

function PopupEditForm () {
    
    const [editForm, setEditForm] = useState({
        title: '',
        content: '',
        navigation: ''
    })

    const [ loading, setLoading ] = useState(false)
    const [ msg, setMsg ] = useState('')

    const navigate = useNavigate()
    const { id } = useParams()

    function goBack() {
        navigate('/admin/dashboard/popups')
    }

    function changeHandler (e) {
        setEditForm({...editForm, [e.target.name]: e.target.value })
    }

    async function popupContents () {
        setLoading(true)
        const res = await popup_content(id)

        // console.log(res)

        if (res.status == 'Ok' || res.status == 200) {
            setEditForm({...res.data})
        }

        setLoading(false)

        // setEditForm({...editForm,  })
    }

    async function popupEdit() {
        setLoading(true)
        const res = await edit_popup(id, {...editForm})

        if (res.status == 'Ok' || res.status == 200) {
            setMsg('Successfully Edited')

            setTimeout(() => {
                goBack()
            }, 1200)
            
        } else {
            setMsg('Error Try again')
        }

        setLoading(false)
    }

    async function popupDelete () {
         
        setLoading(true)

        const res = await delete_popup(id)

        if (res.status == 'Ok' || res.status == 200) {
            setMsg('Successfully Deleted')
            
            setTimeout(() => {
                goBack()
            }, 600)

            setLoading(false)
            return;
        }

        setLoading(false)
        setMsg('Error, Try Again')
        
    }

    useEffect(() => {
        popupContents()
    }, [])

    return (
        <div className='admin-popup-create'>
            
            <div className='admin-blog-hdr'>
                <span>Edit Popup</span>

                <button className='back-btn' onClick={goBack}>Back</button>
            </div>

            <PopupForm form={editForm} changeHandler={changeHandler} />

            <div className='admin-popup-btn'>
                <button onClick={popupEdit} disabled={loading}>Edit Popup</button>
                <button onClick={popupDelete} disabled={loading}>Delete Popup</button>
            </div>

            {
                loading
                ?
                <div className='loader-x'>
                    <div className='loader-ball' />
                    <div className='loader-ball' />
                    <div className='loader-ball' />
                </div>
                :
                <></>
            }

            {
                msg
                ?
                <MessageDisplay msg={msg} setMsg={setMsg} />
                :
                <></>
            }


        </div>
    )
}

export default function Page () {
    return (
        <div className='admin-popup-page'>
            <Routes>
                <Route index element={<Index />} />
                <Route path='/create' element={<PopupCreateForm />} />
                <Route path='/:id' element={<PopupEditForm />} />
            </Routes>
        </div>
    )
}