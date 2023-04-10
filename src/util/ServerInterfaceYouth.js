// Server-client interface for /api/users/youth
const BACKEND_ROUTE = "http://localhost:4000/api/users/youth";

// JSON response checker   
async function checkJSONResponseStatus(response) {
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    let parsedResponse = await response.json();
    return parsedResponse;
}

// Miscellaneous response checker
async function checkMiscResponseStatus(response) {
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    return true;
}

// GET all Youth
async function getAllYouth() {
    let response = await fetch(`${BACKEND_ROUTE}`);
    return await checkJSONResponseStatus(response);
}

// POST create Youth
async function createYouth(body) {
    let response = await fetch(`${BACKEND_ROUTE}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type' : 'application/json'}
    });
    return await checkJSONResponseStatus(response);
}


// GET all active youth
async function getAllActiveYouth() {
    let response = await fetch(`${BACKEND_ROUTE}/active`);
    return await checkJSONResponseStatus(response);
}

// GET all inactive youth
async function getAllInactiveYouth() {
    let response = await fetch(`${BACKEND_ROUTE}/inactive`);
    return await checkJSONResponseStatus(response);
}

// GET youth with @email
async function getYouthByEmail(email) {
    let response = await fetch(`${BACKEND_ROUTE}/byEmail/${email}`);
    return await checkJSONResponseStatus(response);
}


// GET all youth in @program
async function getAllYouthInProgram(program) {
    let response = await fetch(`${BACKEND_ROUTE}/byProgram/${program}`);
    return await checkJSONResponseStatus(response);
}

// GET youth with @fireID
async function getYouthByFireID(fireID) {
    let response = await fetch(`${BACKEND_ROUTE}/byID/${fireID}`);
    return await checkJSONResponseStatus(response);
}

// GET get Forms for youth with @fireID
async function getFormsByFireID(fireID) {
    let response = await fetch(`${BACKEND_ROUTE}/forms/${fireID}`);
    return await checkJSONResponseStatus(response);
}

// GET get Events for youth with @fireID
async function getEventsByFireID(fireID) {
    let response = await fetch(`${BACKEND_ROUTE}/events/${fireID}`);
    return await checkJSONResponseStatus(response);
}

// PUT activate youth with @fireID
async function activateYouth(fireID) { 
    let response = await fetch(`${BACKEND_ROUTE}/activate/${fireID}`, {
        method: 'PUT',
    });
    return await checkMiscResponseStatus(response);
}

// PUT deactivate youth with @fireID
async function deactivateYouth(fireID) { 
    let response = await fetch(`${BACKEND_ROUTE}/deactivate/${fireID}`, {
        method: 'PUT',
    });
    return await checkMiscResponseStatus(response);
}

// PUT add form to youth with @fireID
async function createYouthForm(fireID, body) {
    let res = await fetch(`${BACKEND_ROUTE}/form/${fireID}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {'Content-Type' : 'application/json'}
    })
    return await checkMiscResponseStatus(res)
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
    createYouthForm
}