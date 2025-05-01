import axios from 'axios'
// export const URL = `https://suge-sever.onrender.com`
// export const URL = `http://localhost:8000`
// export const URL = `https://suge-sever.vercel.app`

export const URL = `https://sugeserver.onrender.com`

export async function fetchBlogs() {
    const response = await axios.get(`${URL}/blog`)
    return response.data;
}


export async function fetchBlogContent (Id) {
    const response = await axios.get(`${URL}/blog/${Id}`)
    return response.data;
}

export async function adminLogin (data) {
    try {
        const response = await axios.post(`${URL}/admin/login`, {
            email: data?.email, password: data?.password
        })

        var date = new Date();
        date.setTime(date.getTime() + (24*60*60*1000));
        let expires = "; expires=" + date.toUTCString();

        document.cookie = 'admin_auth_token' + "=" + (response.data?.auth || "")  + expires + "; path=/";


        return response.data;
    } catch (err) {
        console.log(err)
        return {
            status: 400,
            message: 'Invalid Login'
        }
    }
}

export async function editBlogs(id, data){
    try {
        const cookie = getCookie()

        const response = await axios.put(`${URL}/admin/${id}`, 
            { ...data },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + cookie
                },
                // withCredentials: true
            }
        )

        console.log(response)
        
        return response.data
    } catch (err) {
        return {
            status: 400,
            message: 'Error, Try again'
        }
    }
}

export async function addBlog(data){
    try {

        const cookie = getCookie()

        const response = await axios.post(`${URL}/admin`, 
            { ...data },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + cookie
                },
                // withCredentials: true
            }
        )

        return response.data
    } catch (err) {
        return {
            status: 400,
            message: 'Error, Try again',
            error: err
        }
    }
}

export async function deleteBlogs(id){
    
    const cookie = getCookie()

    const response = await axios.delete(`${URL}/admin/${id}`, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookie
            },
            // withCredentials: true
        }
    )

    return response.data
}

export async function profileChecker () {
    
    const cookie = getCookie()

    const response = await axios.get(`${URL}/admin/profile`, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookie
            },
            // withCredentials: true
        }
    )

    return response.data;
}


export function getCookie() {
    // try {

        if (!document.cookie) return false;

        const allCookies = document.cookie.split(' ')

        if (allCookies.length == 0) return false;

        const authCookie = allCookies.find(item => item.includes('admin_auth_token'))
        
        if (!authCookie) return false;

        return authCookie.split('=')[1]
  
}

export function cookieChecker() {
    const allCookies = document.cookie.split(' ')

    const authCookie = allCookies.find(item => item.includes('admin_auth_token'))
   
    return authCookie.split('=')[1]
}

export async function active_popups () {
    try {
        const response = await axios.get(`${URL}/blog/active-popup`)
        return response.data;
    } catch (err) {
        return {
            status: 400,
            message: 'Error, Try again',
            err: err
        }
    }
}

export async function all_popups () {
    try {
        const cookie = getCookie()

        const response = await axios.get(`${URL}/admin/popups`, 
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + cookie
                },
                // withCredentials: true
            }
        )

        return response.data
    } catch (err) {
        return {
            status: 400,
            message: 'Error, Try again',
            err: err
        }        
    }
}

export async function popup_content (id) {
    try {

        const cookie = getCookie()

        const response = await axios.get(`${URL}/admin/popup-message/${id}`, 
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + cookie
                },
                // withCredentials: true
            })

        return response.data
    } catch (err) {
        return {
            status: 400,
            message: 'Error, Try again'
        }       
    }
}

export async function activate_popup (id) {
    try {
        const cookie = getCookie()

        const response = await axios.put(`${URL}/admin/activate-popup/${id}`, 
            {},
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + cookie
                },
                // withCredentials: true
            }
        )

        return response.data
    } catch (err) {
        return {
            status: 400,
            message: 'Error, Try again',
            err: err
        }  
    }
}

export async function deactivate_popup (id) {
    try {
        
        const cookie = getCookie()

        const response = await axios.put(`${URL}/admin/deactivate-popup/${id}`, 
            {},
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + cookie
                },
                // withCredentials: true
            }
        )

        return response.data
    } catch (err) {
        return {
            status: 400,
            message: 'Error, Try again',
            err: err
        }  
    }
}

export async function create_popup (data) {
    try {
        const cookie = getCookie()

        const response = await axios.post(`${URL}/admin/popup-message`, 
            {...data},
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + cookie
                },
                // withCredentials: true
            }
        )

        return response.data
    } catch (err) {
        return {
            status: 400,
            message: 'Error, Try again'
        }
    }
}

export async function edit_popup (id, data) {
    try {
        const cookie = getCookie()

        const response = await axios.put(`${URL}/admin/edit-popup/${id}`, 
            {...data},
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + cookie
                },
                // withCredentials: true
            }
        )

        return response.data
    } catch (err) {
        return {
            status: 400,
            message: 'Error, Try again'
        }
    }
}

export async function delete_popup (id) {
    const cookie = getCookie()

    const response = await axios.delete(`${URL}/admin/popup-message/${id}`, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookie
            },
            // withCredentials: true
        }
    )

    return response.data
}

export async function add_image (imgData) {
    try {
        const response = await axios.post(`${URL}/admin/add-image`,
            imgData,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                }
            }
        )

        return response.data


    } catch (err) {
        return {
            status: 400,
            message: 'Error, Try again',
            err: err
        } 
    }
}

export async function fetch_image(id) {
    try {
        const response = await axios.get(`${URL}/blog/blog-image/${id}`, {}, {
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                }
        })
        return response.data;
    } catch (err) {
        return {
            status: 400,
            message: 'Error, Try again',
            err: err
        }
    }
}