import fetch from 'node-fetch';

const BACKEND_ROUTE = 'http://localhost:4000/api/forms'

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
        let res = await fetch(`${BACKEND_ROUTE}/${id}`);
        return await checkResponseStatus(res)
    } catch (err) {
        throw new Error(err)
    }
}

// GET forms by event code id
async function getFormsByEventCode(eventCode) {
    let res = await fetch(`${BACKEND_ROUTE}/byEvent/${eventCode}`)
    return await checkResponseStatus(res)
}

export {
    getFormByID,
    getFormsByEventCode
}