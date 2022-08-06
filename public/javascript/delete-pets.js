async function deletePetHandler(event) {
    event.preventDefault();
    console.log("delete button clicked")
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/pets/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  
  document.querySelector('.delete-pet-btn').addEventListener('click', deletePetHandler);