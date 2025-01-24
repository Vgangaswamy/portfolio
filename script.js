function toggleMenu() {
    const menu = document.querySelector(".menu_links");
    const icon = document.querySelector(".hamburger_icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (!firstName || !lastName || !email || !message) {
        alert("All fields are required.");
        return;
    }

    // logs for console
    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Email: ", email);
    console.log("Message: ", message);
    console.log("Attempting to send email...");

    // Send email via EmailJS
    emailjs.send("service_ln8zfgs", "template_4d3zowu", {
        firstName: firstName,
        lastName: lastName,
        message: message,
        email: email
    }, "jPkjplxWVHVzSdQUJ")
    .then(function(response) {
        console.log("Success!", response.status, response.text); 
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset(); 
    }, function(error) {
        console.log("Failed to send", error); 
        alert("Failed to send message. Please try again later.");
        document.getElementById("contactForm").reset(); 
    });
});


