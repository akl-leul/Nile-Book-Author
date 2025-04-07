/*main js for responsiveness*/
 
  // Get the form element
  const form = document.getElementById('messageForm');

  // Listen for the submit event
  form.addEventListener('submit', function(event) {
    // Prevent form submission if there are validation errors
    event.preventDefault();

    // Check if the form is valid
    if (form.checkValidity() === false) {
      event.stopPropagation(); // Prevent form submission if not valid
    } else {
      alert("🔔Message sent successfully!");
    }

    // Add Bootstrap validation classes
    form.classList.add('was-validated');
  });
 

 