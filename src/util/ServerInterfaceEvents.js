// Server-client interface for /api/events
const BACKEND_ROUTE = "http://localhost:4000/api/events";

// JSON response checker
async function checkJSONResponseStatus(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  let parsedResponse = await response.json();
  return parsedResponse;
}

// Miscellaneous response checker
async function checkMiscResponseStatus(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return true;
}

// POST new event
async function createEvent(body) {
  let response = await fetch(`${BACKEND_ROUTE}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  return await checkJSONResponseStatus(response);
}

// PUT mark attendance
async function attendEvent(eventCode, body) {
  let response = await fetch(`${BACKEND_ROUTE}/attend/${eventCode}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  return await checkMiscResponseStatus(response);
}

// PUT new form form event
async function createEventForm(eventCode, body) {
  let response = await fetch(`${BACKEND_ROUTE}/form/${eventCode}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  return await checkMiscResponseStatus(response);
}

// GET event with @eventCode
async function getEvent(eventCode) {
  let response = await fetch(`${BACKEND_ROUTE}/${eventCode}`);
  return await checkJSONResponseStatus(response);
}

// GET all events
async function getAllEvents() {
  let response = await fetch(`${BACKEND_ROUTE}`);
  return await checkJSONResponseStatus(response);
}

export { createEvent, attendEvent, getEvent, createEventForm, getAllEvents };
