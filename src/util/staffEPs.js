
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

async function getStaff () {

    try {
   let response = await fetch(`${BACKEND_ROUTE}/api/users/staff`);
   return await checkResponseStatus(response);

    }

    catch(error){ 
        console.log(error);
    }
}


/* staffRouter.post("/", async (req, res) => {
    try {
        let newStaff = await createStaff(req.body);
        res.status(201).send(newStaff);
    } catch (err) {
        res.status(500).send(err);
    }
}) */

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

/* // GET active Staff
staffRouter.get('/active', async(_req, res) => {
    try {
        let activeStaff = await getStaffByActive(true);
        res.status(200).send(activeStaff);
    } catch (err) {
        res.status(404).send(err);
    }
}) */

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



async function createEvent (event) {
    try {
        let response = await fetch(`${BACKEND_ROUTE}/api/users/events`, {
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
        let response = await fetch(`${BACKEND_ROUTE}/api/users/events/?addStaff=${eventCode}`,{
        method: 'PUT',
        body: JSON.stringify(staff)
        })
        return await checkResponseStatus(response)
    }

    catch (error) {
        console.log(error)
    }
}

export {
    getStaffByID
}