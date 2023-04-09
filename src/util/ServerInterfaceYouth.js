import fetch from 'node-fetch';

const BACKENDROUTE = 'http://localhost:4000/api/users/youth'

async function checkResponseStatus(response) {
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    let parsedResponse = await response.json();
    return parsedResponse;
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
        console.log(err)
        throw new Error(err)
    }
}

// POST Create Youth
async function createYouth(newYouth) {
    try {let response = await fetch(`${BACKENDROUTE}`, {
        method: 'POST',
        body: JSON.stringify(newYouth),
        headers: { 'Content-Type': 'application/json' }
    });
    return await checkResponseStatus(response);
    } catch(err) {
        console.log(err)
        throw new Error(err)
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
        console.log(err)
        throw new Error(err)
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
        console.log(err)
        throw new Error(err)
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
        console.log(err)
        throw new Error(err)
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
        console.log(err)
        throw new Error(err)
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
        console.log(err)
        throw new Error(err)
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
        console.log(err)
        throw new Error(err)
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
        console.log(err)
        throw new Error(err)
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
        console.log(err)
        throw new Error(err)
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
        console.log(err)
        throw new Error(err)
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
        console.log(err)
        throw new Error(err)
    }
}

export {
    createYouth,
    getAllYouth,
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