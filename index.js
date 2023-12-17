import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, query, orderByChild } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://raf-ace-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const databaseInfo = ref(database, "Flight-info");

const field1 = document.getElementById("field-1");
const input1 = document.getElementById("input-1");
const field2 = document.getElementById("field-2");
const input2 = document.getElementById("input-2");
const field3 = document.getElementById("field-3");
const input3 = document.getElementById("input-3");
const field4 = document.getElementById("field-4");
const input4 = document.getElementById("input-4");
const uploadBtn = document.getElementById("upload-btn");

// Come back later and put above into an array
// Find out how to read strings based on numbers so this is pulled in for any number of fields
// Likely need to store number of fields as a variable and loop that in, may need a function to count number of fields