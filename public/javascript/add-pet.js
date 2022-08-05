async function addPetFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const species = document.querySelector('input[name="species"]').value;
  const breed = document.querySelector('input[name="breed"]').value;
  const sex = document.querySelector('input[name="sex"]').value;
  const birthday = document.querySelector('input[name="birthday"]').value;
  const medical_history = document.querySelector(
    'input[name="medical_history"]'
  ).value;
  const medications = document.querySelector('input[name="medications"]').value;
  const personality = document.querySelector('input[name="personality"]').value;
  const caution = document.querySelector('select[name="caution"]').value;
  const vet = document.querySelector('input[name="vet"]').value;
  const other = document.querySelector('input[name="other"]').value;

  const response = await fetch("/api/pets", {
    method: "POST",
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
  .querySelector(".new-pet-form")
  .addEventListener("submit", addPetFormHandler);
