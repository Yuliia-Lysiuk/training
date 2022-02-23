import axios from "axios";

axios.defaults.baseURL = "https://6209629f6df46f0017f4c4dd.mockapi.io/api/docs";

export async function getPublication() {
    const publication = await axios.get('/articles');
    return publication.data;
}

export async function createPublication(data) {
    const publication = await axios.post('/articles', data);
    return publication.data;
}

export async function deletePublication(id) {
    const publication = await axios.delete(`/articles/${id}`);
    return publication.data;
}