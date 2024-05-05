import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts"

export async function getPosts(perPage) {
    const response = await axios.get(`${baseUrl}?_start=0&_limit=${perPage}`)

    return response.data
}
export async function getPostById(id) {
    const response = await axios.get(`${baseUrl}/${id}`)

    return response.data
}
