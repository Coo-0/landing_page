document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const thankYouMessage = document.getElementById("thank-you");

    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(contactForm);

        // Simulate form submission using JSONPlaceholder
        try {
            // JSONPlaceholder does not actually process data; it's for testing purposes
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    message: formData.get("message")
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                // Form submission successful
                thankYouMessage.style.display = "block";
                contactForm.reset();
            } else {
                // Handle error
                console.error("Form submission failed.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    });
});
