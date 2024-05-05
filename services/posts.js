import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts"

export async function getPosts(perPage) {
    const response = await axios.get(`${baseUrl}?_start=0&_limit=${perPage}`)

    return response.data
}

// loads post and comments for it by id
export async function getPostById(id) {
    const responsePost = await axios.get(`${baseUrl}/${id}`)
    const responseComments = await axios.get(`${baseUrl}/${id}/comments`)

    return {post: responsePost.data, comments: responseComments.data}
}
