import fetch from 'node-fetch';
import UserContext from "../context/UserContext"

const BACKENDROUTE = 'http://localhost:4000/api/users/youth'
const contextType = UserContext

// Status checker
async function checkResponseStatus(res) {
    if (res.ok) {
        return res.JSON()
    } else {
        throw new Error(`The HTTP status of the response: ${res.status} (${res.statusText})`);
    }
}

// GET Get all Youth
async function getAllYouth() {
    try {
        let res = await fetch(`${BACKENDROUTE}`, {
            headers: {
                'Authorization': `Bearer ${this.context.token}`
            }
        })
        return await checkResponseStatus(res)
    } catch (err) {
        res.send(err)
    }
}

// POST Create Youth
async function createYouth(newYouth) {
    try {    
        let res = await fetch(`${BACKENDROUTE}`, {
            method: 'POST',
            body: JSON.stringify(newYouth),
            headers: { 'Content-Type': 'application/json' }
        })
        return await checkResponseStatus(res)
    } catch (err) {
        res.send(err)
    }   
}

// GET Get all active Youth
async function getAllActiveYouth() {
    try {
        let res = await fetch(`${BACKENDROUTE}/active`, {
            headers: {
                'Authorization': `Bearer ${this.context.token}`
            }
        })
        return await checkResponseStatus(res)
    } catch (err) {
        res.send(err)
    }
}

// GET Get all inactive Youth
async function getAllInactiveYouth() {
    try {
        let res = await fetch(`${BACKENDROUTE}/inactive`, {
            headers: {
                'Authorization': `Bearer ${this.context.token}`
            }
        })
        return await checkResponseStatus(res)
    } catch (err) {
        res.send(err)
    }
}

// GET Get Youth with email
async function getYouthByEmail(email) {
    try {
        let res = await fetch(`${BACKENDROUTE}/byEmail/${email}`, {
            headers: {
                'Authorization': `Bearer ${this.context.token}`
            }
        })
        return await checkResponseStatus(res)
    } catch (err) {
        res.send(err)
    }
}


// GET Get all Youth in program
async function getAllYouthInProgram(program) {
    try {
        let res = await fetch(`${BACKENDROUTE}/byProgram/${program}`, {
            headers: {
                'Authorization': `Bearer ${this.context.token}`
            }
        })
        return await checkResponseStatus(res)
    } catch (err) {
        res.send(err)
    }
}

// GET Get Youth with fireID
async function getYouthByFireID(fireID) {
    try {
        let res = await fetch(`${BACKENDROUTE}/byID/${fireID}`, {
            headers: {
                'Authorization': `Bearer ${this.context.token}`
            }
        })
        return await checkResponseStatus(res)
    } catch (err) {
        res.send(err)
    }
}

// GET Get Forms for Youth with fireID
async function getFormsByFireID(fireID) {
    try {
        let res = await fetch(`${BACKENDROUTE}/forms/${fireID}`, {
            headers: {
                'Authorization': `Bearer ${this.context.token}`
            }
        })
        return await checkResponseStatus(res)
    } catch (err) {
        res.send(err)
    }
}

// GET Get Events for Youth with fireID
async function getEventsByFireID(fireID) {
    try {
        let res = await fetch(`${BACKENDROUTE}/events/${fireID}`, {
            headers: {
                'Authorization': `Bearer ${this.context.token}`
            }
        })
        return await checkResponseStatus(res)
    } catch (err) {
        res.send(err)
    }
}

// PUT Activate Youth with fireID
async function activateYouth(fireID) { 
    try {    
        let res = await fetch(`${BACKENDROUTE}/activate/${fireID}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${this.context.token}`
            }
        })
        return await checkResponseStatus(res)
    } catch (err) {
        res.send(err)
    }
}

// PUT Deactivate Youth with fireID
async function deactivateYouth(fireID) { 
    try {    
        let res = await fetch(`${BACKENDROUTE}/deactivate/${fireID}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${this.context.token}`
            }
        })
        return await checkResponseStatus(res)
    } catch (err) {
        res.send(err)
    }
}

// PUT Add Form to Youth with fireID
async function addFormToYouth(params) {
    try {
        let res = await fetch(`${BACKENDROUTE}/form/${params.fireID}`, {
            method: 'PUT',
            body: JSON.stringify(params.Form),
            headers: {
                'Authorization': `Bearer ${this.context.token}`
            }
        })
        return await checkResponseStatus(res)
    } catch (err) {
        res.send(err)
    }
}

export {
    getAllYouth,
    createYouth,
    getAllActiveYouth,
    getAllInactiveYouth,
    getYouthByEmail,
    getAllYouthInProgram,
    getYouthByFireID,
    getFormsByFireID,
    getEventsByFireID,
    activateYouth,
    deactivateYouth,
    addFormToYouth
}