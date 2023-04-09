import fetch from 'node-fetch';
import UserContext from "../context/UserContext"

const BACKENDROUTE = 'localhost://4000/api/events'
const contextType = UserContext

// Status checker   
async function checkResponseStatus(res) {
    if(res.ok){
        return res.JSON()
    } else {
        throw new Error(`The HTTP status of the response: ${res.status} (${res.statusText})`);
    }
}

async function createEvent (event) {
    try {
        response = await fetch(`${BACKEND_ROUTE}/api/users/events`, {
        method: 'POST',
        body: JSON.stringify(event)
        })
        return await checkResponseStatus(response);
    }

    catch(error) {
        console.log(error);
    }
} 

async function addStaffToEvent (eventCode, staff) {
    try {
        response = await fetch(`${BACKEND_ROUTE}/api/users/events/addStaff/${eventCode}`,{
        method: 'PUT',
        body: JSON.stringify(staff)
        })
        return await checkResponseStatus(response)
    }

    catch (error) {
        console.log(error)
    }
}

// PUT Add Youth to Event with eventCode
async function attendEvent(params) {
    try {         
        res = await fetch(`${BACKENDROUTE}/attend/${params.eventCode}`, {
            method: 'PUT',
            body: JSON.stringify(params.Youth),
            headers: {
                'Authorization': `Bearer ${this.contextType.token}`
            }
        })
        await checkResponseStatus(res)
    } catch (err) {
        res.send(err)
    }
}

// PUT Add Form to Event with eventCode
async function addFormToEvent(params) {
    try {    
        res = await fetch(`${BACKENDROUTE}/form/${params.eventCode}`, {
            method: 'PUT',
            body: JSON.stringify(params.form),
            headers: {
                'Authorization': `Bearer ${this.contextType.token}`
            }
        })
        await checkResponseStatus(res)
    } catch (err) {
        res.send(err)
    }
}

export default {
    attendEvent,
    addFormToEvent
}