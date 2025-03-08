// const URL = `https://suge-sever.onrender.com`
// const URL = `http://localhost:8000`
const URL = `https://suge-sever.vercel.app`

// const URL = `https://suge-sever-destinys-projects-34a882c6.vercel.app`

export async function fetchBlogs() {
    const response = await fetch(`${URL}/blog`, {
        method: 'GET'
    })


    const res = await response.json()

    return res;
}


export async function fetchBlogContent (Id) {
    const response = await fetch(`${URL}/blog/${Id}`, {
        method: 'GET'
    })

    const res = await response.json()

    return res;
}

export async function adminLogin (data) {
    const request = await fetch(`${URL}/admin/login`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer login' 
        },
        body: JSON.stringify({
            email: data?.email,
            password: data?.password
        }),
        // withCredentials: true,
    })

    console.log(request)

    const res = await request.json()

    var date = new Date();
    date.setTime(date.getTime() + (24*60*60*1000));
    let expires = "; expires=" + date.toUTCString();

    document.cookie = 'admin_auth_token' + "=" + (res?.auth || "")  + expires + "; path=/";

    // console.log(res)

    return res
}

export async function editBlogs(id, data){

    const cookie = getCookie()

    const response = await fetch(`${URL}/admin/${id}`, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'include',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookie
        },
        body: JSON.stringify(data)
    })
    
    return response.json()
}

export async function addBlog(data){

    const cookie = getCookie()

    const response = await fetch(`${URL}/admin`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookie
        },
        body: JSON.stringify(data)
    })

    return response.json()
}

export async function deleteBlogs(id){
    
    const cookie = getCookie()

    const response = await fetch(`${URL}/admin/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        mode: 'cors',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookie
        }
    })

    return response.json()
}

export async function profileChecker () {
    
    const cookie = getCookie()

    const response = await fetch(`${URL}/admin/profile`, {
        mode: 'cors',
        method: 'GET',
        credentials: 'include',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookie
        }
    })

    const res = await response.json()

    return res;
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