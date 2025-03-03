

export async function fetchBlogs() {
    const response = await fetch('https://forms.googleapis.com/v1/forms/13yTV9z7E6w3GA0gMdurFIY6wNbvWvlJOp9byKW9nxKs/responses', {
        method: 'GET',
        headers: {
        "Content-Type":"application/json",
        "Authorization": "Bearer ya29.a0AeXRPp6xKCbU5vgNfa44cbcRmJ7UporbkYBPlauw7ziZOt5sd_i7FNnQ7ocGz8lA7yuOVJw9O9nY7LCXgOm9zJP8zESCl7hDFYBMWeU4OZQtDl-7Pusg9AfuYNww6Lm_ycRtTpF0Wyo_gsYwp1p_TVuL98HpIqln4WTMu4BBaCgYKAcMSARMSFQHGX2MiCTOwnusuBAoMXM1V_ts0uQ0175"
        }
    })


    const res = await response.json()

    return res;
}


export async function fetchBlogContent(responseId) {
    const response = await fetch(`https://forms.googleapis.com/v1/forms/13yTV9z7E6w3GA0gMdurFIY6wNbvWvlJOp9byKW9nxKs/responses/${responseId}`, {
        method: 'GET',
        headers: {
        "Content-Type":"application/json",
        "Authorization": "Bearer ya29.a0AeXRPp6xKCbU5vgNfa44cbcRmJ7UporbkYBPlauw7ziZOt5sd_i7FNnQ7ocGz8lA7yuOVJw9O9nY7LCXgOm9zJP8zESCl7hDFYBMWeU4OZQtDl-7Pusg9AfuYNww6Lm_ycRtTpF0Wyo_gsYwp1p_TVuL98HpIqln4WTMu4BBaCgYKAcMSARMSFQHGX2MiCTOwnusuBAoMXM1V_ts0uQ0175"
        }
    })


    const res = await response.json()

    return res;
}