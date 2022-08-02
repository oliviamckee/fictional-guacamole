async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector("").value.trim();
    const email = document.querySelector("").value.trim();
    const password = document.querySelector("").value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
            username,
            email,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });
        //check the response status
        if (response.ok) {
          console.log("success");
        }else{
          alert(response.statusText);
        }
      }
    };
