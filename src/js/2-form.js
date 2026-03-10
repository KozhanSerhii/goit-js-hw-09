const form = document.querySelector(".feedback-form")
const localStorageKey = "feedback-form-state";


let formData = { email: "", message: "" };

try {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    formData = JSON.parse(savedData);
  }
} catch (error) {
  console.error("Помилка при читанні з localStorage:", error);
}

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
        formData.email = "";
        formData.message = "";
        console.log(formData);
    }
}