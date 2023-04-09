
// Server-client interface for Staff Endpoints 

BACKEND_ROUTE = "http://localhost:4000";


const fetch = require('node-fetch');

function checkResponseStatus(res) {
    if (res.ok) {
        console.log(json);
        return res.JSON();
    } else {
        throw new Error(`The HTTP status of the response: ${res.status} (${res.statusText})`);
    }
}

async function getStaff () {
    try {
        response = await fetch(`${BACKEND_ROUTE}/api/users/staff`);
        return await checkResponseStatus(response);
    } catch(error) { 
        console.log(error);
    }
}


async function postStaff (newStaff) {
    try {
        response = await fetch(`${BACKEND_ROUTE}/api/users/staff`, {
            method: 'POST',
            body: JSON.stringify(newStaff),
            headers: {'Content-Type' : 'application/json'}
        })
        return await checkResponseStatus(response);
    } catch(error) {
        console.log(error);
    }
}

async function getActiveStaff () {
    try { 
        response = await fetch(`${BACKEND_ROUTE}/api/users/staff/active`);
        return await checkResponseStatus(response);
    } catch(error) {
        console.log(error);
    }
}


async function getInactiveStaff () {
    try {
        response = await fetch (`${BACKEND_ROUTE}/api/users/staff/inactive`);
        return await checkResponseStatus(response);
    } catch (error) {
        console.log(error);
    }
}

async function getStaffByEmail (email) {
    try {
        response = await fetch(`${BACKEND_ROUTE}/api/users/staff/byEmail/${email}`)
        return await checkResponseStatus(response);
    }
    catch (error) {
        console.log(error);
    }
}

async function getStaffbyProgram (program) {
    try {
        response = await fetch (`${BACKEND_ROUTE}/api/users/staff/byProgram/${program}`)
        return await checkResponseStatus(response);
    } catch (error) {
        console.log(error);
    }
}


async function getStaffByID (fireID) {
    try {
        response = await fetch(`${BACKEND_ROUTE}/api/users/staff/byID/${fireID}`)
        return await checkResponseStatus(response);
    } catch (error) {
        console.log(error);
    }
}

async function activateStaffWithID (fireID) {
    try {
        response = await fetch(`${BACKEND_ROUTE}/api/users/staff/activate/${fireID}`, {
            method: 'PUT',
            headers: {'Content Type': 'application/json' }
        })
        return await checkResponseStatus(response)
    } catch (error) {
        console.log(error)
    }
}

async function deactiveStaffWithID (fireID) {
    try {
        response = await fetch(`${BACKEND_ROUTE}/api/users/staff/deactivate/${fireID}`, {
            method: 'PUT',
            headers: {'Content Type': 'application/json' }
        })
        return await checkResponseStatus(response)
    } catch (error) {
        console.log(error)
    }
}