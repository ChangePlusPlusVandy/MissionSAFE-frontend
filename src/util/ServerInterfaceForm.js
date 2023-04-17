import fetch from 'node-fetch';

const BACKENDROUTE = 'http://localhost:4000/api/forms'

// Status checker   
async function checkResponseStatus(response) {
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    let parsedResponse = await response.json();
    return parsedResponse;
}

// GET Get Form with id
async function getFormByID(id) {
    try {
        let res = await fetch(`${BACKENDROUTE}/${id}`);
        return await checkResponseStatus(res)
    } catch (err) {
        throw new Error(err)
    }
}

export {
    getFormByID
}