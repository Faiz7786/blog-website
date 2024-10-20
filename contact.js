function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill out all fields");
        return false;
    } else {
        document.getElementById('contactForm').style.display = "none";
        document.getElementById('successMessage').style.display = "block";
        return false; // Prevent form submission for demo
    }
}
