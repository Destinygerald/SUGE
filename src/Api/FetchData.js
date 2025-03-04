const URL = `https://suge-sever.onrender.com`

export async function fetchBlogs() {
    const response = await fetch(`${URL}`, {
        method: 'GET',
        withCredentials: true
    })


    const res = await response.json()

    return res;
}


export async function fetchBlogContent (Id) {
    const response = await fetch(`${URL}/${Id}`, {
        method: 'GET'
    })

    const res = await response.json()

    return res;
}

export async function adminLogin (data) {
    const request = await fetch(`${URL}/admin/login`, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data?.email,
            password: data?.password
        }),
        // credentials: 'include'
        withCredentials: true
    })

    return request.json()
}

export async function editBlogs(){

}

export async function createBlogs(){
    
}

export async function deleteBlogs(){
    
}