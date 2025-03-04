const URL = `https://suge-sever.onrender.com`
// const URL = `http://localhost:8000`

export async function fetchBlogs() {
    const response = await fetch(`${URL}`, {
        method: 'GET'
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
        credentials: 'include',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data?.email,
            password: data?.password
        }),
        // withCredentials: true,
    })


    return request.json()
}

export async function editBlogs(){

}

export async function addBlog(data){
    const response = await fetch(`${URL}/admin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response.json()
}

export async function deleteBlogs(id){
    const response = await fetch(`${URL}/admin/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
    })

    return response.json()
}

export async function profileChecker () {
    const response = await fetch(`${URL}/admin/profile`, {
        method: 'GET',
        credentials: 'include'
    })


    const res = await response.json()

    return res;
}

export function convertImageToBase64(e) {
    var reader = new FileReader();
    // console.log(e.target.files)
    let url;
    reader.readAsDataURL(e.target.files[0]);
    try {
        reader.onload = () => {
            url = reader.result
        };
        return url;
    } catch (err) {
        // return ("err", err)
    }
    reader.onerror = () => {
        console.log("Error : ", error)
    }

    return url
}