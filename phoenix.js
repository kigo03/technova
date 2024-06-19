document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value; 
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        fetch('connect.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            console.log(data); 
            alert(`Thank you, ${name}. Your message has been sent!`);
            document.getElementById('contact-form').reset(); 
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while sending the message. Please try again later.');
        });
    } else {
        alert('Please fill out all fields.');
    }
});
