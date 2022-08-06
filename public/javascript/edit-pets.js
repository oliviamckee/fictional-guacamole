async function editFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const name = document.querySelector('input[name="name"]').value.trim();
  const species = document.querySelector('input[name="species"]').value.trim();
  const breed = document.querySelector('input[name="breed"]').value.trim();
  const sex = document.querySelector('input[name="sex"]').value.trim();
  const birthday = document
    .querySelector('input[name="birthday"]')
    .value.trim();
  const medical_history = document
    .querySelector('input[name="medical_history"]')
    .value.trim();
  const medications = document
    .querySelector('input[name="medications"]')
    .value.trim();
  const personality = document
    .querySelector('input[name="personality"]')
    .value.trim();
  const caution = document.querySelector('input[name="caution"]').value.trim();
  const vet = document.querySelector('input[name="vet"]').value.trim();
  const other = document.querySelector('input[name="other"]').value.trim();
  const response = await fetch(`/api/pets/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      name,
      species,
      breed,
      sex,
      birthday,
      medical_history,
      medications,
      personality,
      caution,
      vet,
      other,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-pet-form")
  .addEventListener("submit", editFormHandler);
