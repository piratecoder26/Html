// Simple login form validation
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return false;
    }

    // In a real scenario, you would send this data to a server for validation
    alert("Login successful!");
    return true;
}
