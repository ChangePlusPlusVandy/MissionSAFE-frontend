
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

async function getStaffByID (fireID) {
    let response = await fetch(`${BACKEND_ROUTE}/api/users/staff/byID/${fireID}`);
    return await checkResponseStatus(response);
}

async function createStaff(newStaff) {
    let response = await fetch(`${BACKEND_ROUTE}/api/users/staff`, {
        method: 'POST',
        body: JSON.stringify(newStaff),
        headers: {'Content-Type' : 'application/json'}
    });
    return await checkResponseStatus(response);
}

async function createEvent(event) {
    let response = await fetch(`${BACKEND_ROUTE}/api/events`, {
        method: 'POST',
        body: JSON.stringify(event),
        headers: {'Content-Type' : 'application/json'}
    });
    return await checkResponseStatus(response);
} 

async function attendEvent(options) {
    let response = await fetch(`${BACKEND_ROUTE}/api/events/attend/${options.eventCode}`, {
        method: 'PUT',
        body: JSON.stringify(options.email),
        headers: {'Content-Type' : 'application/json'}
    })
    return response.ok;
}


/*async function getStaff () {

    try {
   let response = await fetch(`${BACKEND_ROUTE}/api/users/staff`);
   return await checkResponseStatus(response);

    }

    catch(error){ 
        console.log(error);
    }
}

async function postStaff (newStaff) {

    try {
        let response = await fetch(`${BACKEND_ROUTE}/api/users/staff`, {
    method: 'POST',
    body: JSON.stringify(newStaff),
    headers: {'Content-Type' : 'application/json'}
    })
    return await checkResponseStatus(response);
    }

    catch(error) {
    console.log(error);
    }
}

async function getActiveStaff () {

    try { 
        let response = await fetch(`${BACKEND_ROUTE}/api/users/staff/active`);
        return await checkResponseStatus(response);
    }

    catch(error) {
        console.log(error);
    }
}


async function getInactiveStaff () {

    try {
        let response = await fetch (`${BACKEND_ROUTE}/api/users/staff/inactive`);
        return await checkResponseStatus(response);
    }

    catch (error) {
        console.log(error);
    }
}


async function getStaffByEmail (email) {
    try {
        let response = await fetch(`${BACKEND_ROUTE}/api/users/staff/?byEmail=${email}`)
        return await checkResponseStatus(response);
    }
    catch (error) {
        console.log(error);
    }
}

async function getStaffbyProgram (program) {
    try {
        let response = await fetch (`${BACKEND_ROUTE}/api/users/staff/?byProgram=${program}`)
        return await checkResponseStatus(response);
    }

    catch (error) {
        console.log(error);
    }
}

async function activateStaffWithID (fireID) {
    
    try {
        let response = await fetch(`${BACKEND_ROUTE}/api/users/staff/?activate=${fireID}`, {
        method: 'PUT',
        headers: {'Content Type': 'application/json' }
    })
    return await checkResponseStatus(response)
}

catch (error) {
    console.log(error)
}

}

async function deactiveStaffWithID (fireID) {

    try {
        let response = await fetch(`${BACKEND_ROUTE}/api/users/staff/?deactivate=${fireID}`, {
        method: 'PUT',
        headers: {'Content Type': 'application/json' }
    })
    return await checkResponseStatus(response)
}

catch (error) {
    console.log(error)
}
}




async function addStaffToEvent (eventCode, staff) {
    try {
        let response = await fetch(`${BACKEND_ROUTE}/api/users/events/?addStaff=${eventCode}`,{
        method: 'PUT',
        body: JSON.stringify(staff)
        })
        return await checkResponseStatus(response)
    }

    catch (error) {
        console.log(error)
    }
}*/

export {
    getStaffByID,
    createStaff,
    createEvent,
    attendEvent,
}