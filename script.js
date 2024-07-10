const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
};

const form = document.querySelector('form');
const confirm = document.querySelector(".confirm");
const nameInput = document.querySelector('input[name="full-name"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');
const messageInput = document.querySelector('textarea[name="message"]');

const inputs = [nameInput, emailInput, phoneInput, messageInput];

let isFormValid = false;
let isValidationOn = false;

const resetInput = (elm) => {
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden");
};

const invalidateInput = (elm) => {
    elm.classList.add("invalid");
    elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
    if (!isValidationOn) return;

    isFormValid = true;
    inputs.forEach(resetInput);

    if (!nameInput.value) {
        isFormValid = false;
        invalidateInput(nameInput);
    }
    if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
        invalidateInput(emailInput);
    }
    if (!isValidPhone(phoneInput.value)) {
        isFormValid = false;
        invalidateInput(phoneInput);
    }
    if (messageInput.value.length < 64) {
        isFormValid = false;
        invalidateInput(messageInput);
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    if (isFormValid) {
        form.remove();
        confirm.classList.remove("hidden");
    }
});

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        validateInputs();
    });
});

// Collapsible menu Scripts
document.body.addEventListener("click", (ev) => {
    const isCollapsible = ev.target.closest(".collapsible-title-section");
    const collapsible = ev.target.closest(".collapsible");

    if(!isCollapsible) {
        return;
    }

    collapsible.classList.toggle("collapsible-open");

});