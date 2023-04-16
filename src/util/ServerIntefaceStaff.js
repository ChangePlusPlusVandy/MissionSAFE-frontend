// Server-client interface for /api/users/staff
const BACKEND_ROUTE = "http://localhost:4000/api/users/staff";

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

// GET all staff
async function getStaff() {
    let response = await fetch(`${BACKEND_ROUTE}`);
    return await checkJSONResponseStatus(response);
}

// POST new staff
async function createStaff(body) {
    let response = await fetch(`${BACKEND_ROUTE}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type' : 'application/json'}
    });
    return await checkJSONResponseStatus(response);
}

// GET all active staff
async function getActiveStaff () {
    let response = await fetch(`${BACKEND_ROUTE}/active`);
    return await checkJSONResponseStatus(response);
}

// GET all inactive staff
async function getInactiveStaff () {
    let response = await fetch (`${BACKEND_ROUTE}/inactive`);
    return await checkJSONResponseStatus(response);
}

// GET staff with @email
async function getStaffByEmail (email) {
    let response = await fetch(`${BACKEND_ROUTE}/byEmail/${email}`);
    return await checkJSONResponseStatus(response);
}

// GET all staff with @program
async function getStaffByProgram (program) {
    let response = await fetch (`${BACKEND_ROUTE}/byProgram/${program}`);
    return await checkJSONResponseStatus(response);
}

// GET staff with @fireID
async function getStaffByID (fireID) {
    let response = await fetch(`${BACKEND_ROUTE}/byID/${fireID}`);
    return await checkJSONResponseStatus(response);
}

// PUT activate staff 
async function activateStaff (fireID) {
    let response = await fetch(`${BACKEND_ROUTE}/activate/${fireID}`, {
        method: 'PUT',
    });
    return await checkMiscResponseStatus(response);
}

// PUT deactivate staff 
async function deactivateStaff (fireID) {
    let response = await fetch(`${BACKEND_ROUTE}/deactivate/${fireID}`, {
        method: 'PUT',
    });
    return await checkMiscResponseStatus(response);
}

// PUT set staff as counselor
async function setStaffAsCounselor (fireID) {
    let response = await fetch(`${BACKEND_ROUTE}/giveCounselor/${fireID}`, {
        method: 'PUT',
    });
    return await checkMiscResponseStatus(response);
}

// PUT set staff as non-counselor
async function removeStaffAsCounselor (fireID) {
    let response = await fetch(`${BACKEND_ROUTE}/removeCounselor/${fireID}`, {
        method: 'PUT',
    });
    return await checkMiscResponseStatus(response);
}

// PUT set staff as admin
async function setStaffAsAdmin (fireID) {
    let response = await fetch(`${BACKEND_ROUTE}/giveAdmin/${fireID}`, {
        method: 'PUT',
    });
    return await checkMiscResponseStatus(response);
}

// PUT set staff as non-admin
async function removeStaffAsAdmin (fireID) {
    let response = await fetch(`${BACKEND_ROUTE}/removeAdmin/${fireID}`, {
        method: 'PUT',
    });
    return await checkMiscResponseStatus(response);
}

export {
    getStaff,
    createStaff,
    getActiveStaff,
    getInactiveStaff,
    getStaffByEmail,
    getStaffByProgram,
    getStaffByID,
    activateStaff,
    deactivateStaff,
    setStaffAsCounselor,
    removeStaffAsCounselor,
    setStaffAsAdmin,
    removeStaffAsAdmin,
}