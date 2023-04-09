
// Server-client interface for Staff Endpoints 
const BACKEND_ROUTE = "http://localhost:4000";
const fetch = require('node-fetch');

async function checkResponseStatus(response) {
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    let parsedResponse = await response.json();
    return parsedResponse;
}

async function getStaff() {
    try {
        let response = await fetch(`${BACKEND_ROUTE}/api/users/staff`);
        return await checkResponseStatus(response);
    } catch(error) { 
        console.log(error)
        throw new Error(err)
    }
}

async function createStaff(newStaff) {
    try {
        let response = await fetch(`${BACKEND_ROUTE}/api/users/staff`, {
            method: 'POST',
            body: JSON.stringify(newStaff),
            headers: {'Content-Type' : 'application/json'}
        })
        return await checkResponseStatus(response);
    } catch(error) {
        console.log(error)
        throw new Error(err)
    }
}

async function getActiveStaff () {
    try { 
        let response = await fetch(`${BACKEND_ROUTE}/api/users/staff/active`);
        return await checkResponseStatus(response);
    } catch(error) {
        console.log(error)
        throw new Error(err)
    }
}

async function getInactiveStaff () {
    try {
        let response = await fetch (`${BACKEND_ROUTE}/api/users/staff/inactive`);
        return await checkResponseStatus(response);
    } catch (error) {
        console.log(error)
        throw new Error(err)
    }
}

async function getStaffByEmail (email) {
    try {
        let response = await fetch(`${BACKEND_ROUTE}/api/users/staff/byEmail/${email}`)
        return await checkResponseStatus(response);
    }
    catch (error) {
        console.log(error)
        throw new Error(err)
    }
}

async function getStaffByProgram (program) {
    try {
        let response = await fetch (`${BACKEND_ROUTE}/api/users/staff/byProgram/${program}`)
        return await checkResponseStatus(response);
    } catch (error) {
        console.log(error)
        throw new Error(err)
    }
}


async function getStaffByID (fireID) {
    try {
        let response = await fetch(`${BACKEND_ROUTE}/api/users/staff/byID/${fireID}`)
        return await checkResponseStatus(response);
    } catch (error) {
        console.log(error)
        throw new Error(err)
    }
}

async function activateStaffWithID (fireID) {
    try {
        let response = await fetch(`${BACKEND_ROUTE}/api/users/staff/activate/${fireID}`, {
            method: 'PUT',
            headers: {'Content Type': 'application/json' }
        })
        return await checkResponseStatus(response)
    } catch (error) {
        console.log(error)
        throw new Error(err)
    }
}

async function deactivateStaffWithID (fireID) {
    try {
        let response = await fetch(`${BACKEND_ROUTE}/api/users/staff/deactivate/${fireID}`, {
            method: 'PUT',
            headers: {'Content Type': 'application/json' }
        })
        return await checkResponseStatus(response)
    } catch (error) {
        console.log(error)
        throw new Error(err)
    }
}

export {
    getStaff,
    createStaff,
    getActiveStaff,
    getInactiveStaff,
    getStaffByEmail,
    getStaffByProgram,
    getStaffByID,
    activateStaffWithID,
    deactivateStaffWithID,
}