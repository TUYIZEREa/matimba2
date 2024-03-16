document.getElementById("myForm").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
      event.preventDefault(); // Prevent form submission
      alert("Please enter a valid email address (must include '@').");
    }
  });