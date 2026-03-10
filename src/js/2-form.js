const form = document.querySelector(".feedback-form")
const localStorageKey = "feedback-form-state";

const formData = JSON.parse(localStorage.getItem(localStorageKey)) || {
  email: "",
  message: "",
};

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener("input", saver);

function saver(event){
    event.preventDefault();
    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

form.addEventListener("submit", send);

function send(event){
    event.preventDefault();
    if (event.target.email.value === "" || event.target.message.value === "") {
        alert("Fill please all fields");
    }
    else{
        console.log(formData);
        localStorage.removeItem(localStorageKey);
        form.reset();
    }
}