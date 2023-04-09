import fetch from 'node-fetch';
import UserContext from "../context/UserContext"

const BACKENDROUTE = 'localhost://4000/api/events'
const contextType = UserContext

// Status checker   
async function checkResponseStatus(response) {
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    let parsedResponse = await response.json();
    return parsedResponse;
}

async function createEvent (event) {
    try {
        let response = await fetch(`${BACKEND_ROUTE}`, {
        method: 'POST',
        body: JSON.stringify(event)
        })
        return await checkResponseStatus(response);
    } catch(error) {
        console.log(error)
        throw new Error(err)
    }
} 

async function addStaffToEvent (eventCode, staff) {
    try {
        let response = await fetch(`${BACKEND_ROUTE}/addStaff/${eventCode}`,{
        method: 'PUT',
        body: JSON.stringify(staff)
        })
        return await checkResponseStatus(response)
    } catch (error) {
        console.log(error)
        throw new Error(err)
    }
}

// PUT Add Youth to Event with eventCode
async function attendEvent(params) {
    try {         
        let res = await fetch(`${BACKENDROUTE}/attend/${params.eventCode}`, {
            method: 'PUT',
            body: JSON.stringify(params.Youth),
            headers: {
                'Authorization': `Bearer ${this.contextType.token}`
            }
        })
        return await checkResponseStatus(res)
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

// PUT Add Form to Event with eventCode
async function addFormToEvent(params) {
    try {    
        let res = await fetch(`${BACKENDROUTE}/form/${params.eventCode}`, {
            method: 'PUT',
            body: JSON.stringify(params.form),
            headers: {
                'Authorization': `Bearer ${this.contextType.token}`
            }
        })
        return await checkResponseStatus(res)
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

async function getEvent(eventCode) {
    try {
        let response = await fetch(`${BACKEND_ROUTE}/${eventCode}`)
        return await checkResponseStatus(response)
    } catch(err) {
        console.log(err)
        throw new Error(err)
    }
}

async function createEventForm(eventCode) {
    try {
        let response = await fetch(`${BACKEND_ROUTE}/forms/${eventCode}`)
        return await checkResponseStatus(response)
    } catch(err) {
        console.log(err)
        throw new Error(err)
    }
}

async function getStaffForEvent(eventCode) {
    try {
        let response = await fetch(`${BACKENDROUTE}/staff/${eventCode}`)
        return await checkResponseStatus(response)
    } catch(err) {
        console.log(err)
        throw new Error(err)
    }
}

export default {
    createEvent,
    addStaffToEvent,
    attendEvent,
    addFormToEvent,
    getEvent,
    createEventForm,
    getStaffForEvent
}