async function signupFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const phone = document.querySelector("#phone-signup").value.trim();

  if (name && username && email && password && phone) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        name,
        username,
        email,
        password,
        phone,
      }),
      headers: { "Content-Type": "application/json" },
    });
    //check the response status
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  } else {
    alert("Please fill out all relevant fields.")
  }
}

document
  .querySelector(".sign-up-form")
  .addEventListener("submit", signupFormHandler);
