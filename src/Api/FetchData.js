import axios from 'axios'
// const URL = `https://suge-sever.onrender.com`
const URL = `http://localhost:8000`
// const URL = `https://suge-sever.vercel.app`

// const URL = `https://suge-sever-destinys-projects-34a882c6.vercel.app`

export async function fetchBlogs() {
    const response = await axios.get(`${URL}/blog`)
    return response.data;
}


export async function fetchBlogContent (Id) {
    const response = await axios.get(`${URL}/blog/${Id}`)
    return response.data;
}

export async function adminLogin (data) {
    const response = await axios.post(`${URL}/admin/login`, {
        email: data?.email, password: data?.password
    })

    console.log(response)

    var date = new Date();
    date.setTime(date.getTime() + (24*60*60*1000));
    let expires = "; expires=" + date.toUTCString();

    document.cookie = 'admin_auth_token' + "=" + (response.data?.auth || "")  + expires + "; path=/";


    return response.data;
}

export async function editBlogs(id, data){

    const cookie = getCookie()

    const response = await axios.put(`${URL}/admin/${id}`, 
        { ...data },
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookie
            },
            withCredentials: true
        }
    )
    
    return response.data
}

export async function addBlog(data){

    const cookie = getCookie()


    const response = await axios.post(`${URL}/admin`, 
        { ...data },
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookie
            },
            withCredentials: true
        }
    )

    console.log(response)

    return response.data
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
            withCredentials: true
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
            withCredentials: true
        }
    )

    return response.data;
}


export function getCookie() {
    // try {

        if (!document.cookie) return;

        const allCookies = document.cookie.split(' ')

        if (allCookies.length == 0) return;

        const authCookie = allCookies.find(item => item.includes('admin_auth_token'))
        
        if (!authCookie) return

        return authCookie.split('=')[1]
  
}

export function cookieChecker() {
    const allCookies = document.cookie.split(' ')

    const authCookie = allCookies.find(item => item.includes('admin_auth_token'))
   
    return authCookie.split('=')[1]
}