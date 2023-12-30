const form = document.querySelector(".feedback-form");

form.addEventListener("input", handleFormInput);
form.addEventListener("submit", onFormSubmit);

const STORAGE_KEY = "feedback-form-state";

function handleFormInput(event) {
    const formData = {
    email: (form.elements.email.value).trim(),
    message: (form.elements.message.value).trim(),
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
    const emailValue = form.elements.email.value;
    const messageValue = form.elements.message.value;

    if (!emailValue || "") {
        alert ("fill in all fields, please");
        return;
    } else if (!messageValue || "") {
        alert ("fill in all fields, please");
        return;
    }

    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset()
}

populateForm();

function populateForm() {    
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData !== null) {
        const parsedSavedData = JSON.parse(savedData);
        form.elements.email.value = parsedSavedData.email ?? "";
        form.elements.message.value = parsedSavedData.message ?? "";
   }      
}
