
// Server-client interface for Staff Endpoints 

BACKEND_ROUTE = "http://localhost:4000";


const fetch = require('node-fetch');

function checkResponseStatus(res) {
    if (res.ok) {
        console.log(json);
        return res.JSON();
    }

    else {
        throw new Error(`The HTTP status of the response: ${res.status} (${res.statusText})`);
    }
}


// GET all Staff documents
/* staffRouter.get('/', async(_req, res) => {
    try {
        let allStaff = await getAllStaff();
        res.status(200).send(allStaff);
    } catch (err) {
        res.status(404).send(err);
    }
}) */

async function getStaff () {

    try {
   response = await fetch(`${BACKEND_ROUTE}/api/users/staff`);
   await checkResponseStatus(response);

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
    response = await fetch(`${BACKEND_ROUTE}/api/users/staff`, {
    method: 'POST',
    body: JSON.stringify(newStaff),
    headers: {'Content-Type' : 'application/json'}
    })
    await checkResponseStatus(response);
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
        response = await fetch(`${BACKEND_ROUTE}/api/users/staff/active`);
        await checkResponseStatus(response);
    }

    catch(error) {
        console.log(error);
    }
}


async function getInactiveStaff () {

    try {
        response = await fetch (`${BACKEND_ROUTE}/api/users/staff/inactive`);
        await checkResponseStatus(response);
    }

    catch (error) {
        console.log(error);
    }
}


async function getStaffByEmail (email) {
    try {
        response = await fetch(`${BACKEND_ROUTE}/api/users/staff/?byEmail=${email}`)
        await checkResponseStatus(response);
    }
    catch (error) {
        console.log(error);
    }
}

async function getStaffbyProgram (program) {
    try {
        response = await fetch (`${BACKEND_ROUTE}/api/users/staff/?byProgram=${program}`)
        await checkResponseStatus(response);
    }

    catch (error) {
        console.log(error);
    }
}


async function getStaffByID (fireID) {

    try {
        response = await fetch(`${BACKEND_ROUTE}/api/users/staff/?byID=${fireID}`)
        await checkResponseStatus(response);
    }

    catch (error) {
        console.log(error);
    }
}

async function activateStaffWithID (fireID) {
    
    try {
        response = await fetch(`${BACKEND_ROUTE}/api/users/staff/?activate=${fireID}`, {
        method: 'PUT',
        headers: {'Content Type': 'application/json' }
    })
    await checkResponseStatus(response)
}

catch (error) {
    console.log(error)
}

}

async function deactiveStaffWithID (fireID) {

    try {
        response = await fetch(`${BACKEND_ROUTE}/api/users/staff/?deactivate=${fireID}`, {
        method: 'PUT',
        headers: {'Content Type': 'application/json' }
    })
    await checkResponseStatus(response)
}

catch (error) {
    console.log(error)
}
}



async function createEvent (event) {
    try {
        response = await fetch(`${BACKEND_ROUTE}/api/users/events`, {
        method: 'POST',
        body: JSON.stringify(event)
        })
        await checkResponseStatus(response);
    }

    catch(error) {
        console.log(error);
    }
} 

async function addStaffToEvent (eventCode, staff) {
    try {
        response = await fetch(`${BACKEND_ROUTE}/api/users/events/?addStaff=${eventCode}`,{
        method: 'PUT',
        body: JSON.stringify(staff)
        })
        await checkResponseStatus(response)
    }

    catch (error) {
        console.log(error)
    }
}