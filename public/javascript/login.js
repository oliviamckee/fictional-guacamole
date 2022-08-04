async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector("").value.trim();
    const password = document.querySelector("").value.trim();

    if (email && password) {
        const response = await fetch("/api/users/login", {
            method: "post",
            body: JSON.stringify({
                email,
                password
            }),
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
            document.location.replace("/");
        }else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);