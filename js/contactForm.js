function redirectToWhatsApp(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.querySelector('input[name="form_name"]').value.trim();
    const email = document.querySelector('input[name="form_email"]').value.trim();
    const message = document.querySelector('textarea[name="form_message"]').value.trim();
    
    // Validate form
    if (!name || !email || !message) {
        alert("Please fill all required fields");
        return false;
    }
    
    // Format the message for WhatsApp
    const whatsappMessage = `Hey, my name is ${name} and email ${email}. ${message}`;
    
    // Replace with your actual WhatsApp number (international format)
    const phoneNumber = "97470110558"; // Replace with your number
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
}