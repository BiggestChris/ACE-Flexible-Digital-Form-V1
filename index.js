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
const uploadBtn = document.getElementById("upload-btn"); // Look at removing this eventually

// Come back later and put above into an array
// Find out how to read strings based on numbers so this is pulled in for any number of fields
// Likely need to store number of fields as a variable and loop that in, may need a function to count number of fields

uploadBtn.addEventListener("click", function() {
    let field1Value = field1.value;
    let input1Value = input1.value;
    let field2Value = field2.value;
    let input2Value = input2.value;
    let field3Value = field3.value;
    let input3Value = input3.value;
    let field4Value = field4.value;
    let input4Value = input4.value;

    // Again, look at array for above and looping to cover all
    
    push(databaseInfo, {
        field1Value: input1Value,
        field2Value: input2Value,
        field3Value: input3Value,
        field4Value: input4Value
    });

})