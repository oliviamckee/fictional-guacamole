async function signupFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('#full-name').value.trim();
  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const phone = document.querySelector("#phone").value.trim();

  if (name && username && email && password && phone) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        name,
        username,
        email,
        password,
        phone
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    //check the response status
    if (response.ok) {
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".sign-up-form").addEventListener("submit", signupFormHandler);
