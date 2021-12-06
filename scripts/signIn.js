const email = document.querySelector("#email");
const password = document.querySelector("#password");


function showAlert() {
    const alertDiv = document.getElementById('alert-container');
    alertDiv.innerHTML = `<div class="alert alert-dismissible fade show" role="alert" style="background: #F16535">
    Fields marked with an * are required.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
}

const button = document.querySelector("#alert-button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    if (!email.value || !password.value) {
        showAlert();
        return;
    }

    alert("you are logged in.")
})