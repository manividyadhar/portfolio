(function() {
  emailjs.init("Gax-au7dT5NzaK4Ul");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm("service_2byikw6", "template_awlhhkc", this)
    .then(function() {
      document.getElementById("form-status").innerText = "✅ Message Sent Successfully!";
      document.getElementById("form-status").style.color = "lime";
      document.getElementById("contact-form").reset();
    }, function(error) {
      document.getElementById("form-status").innerText =
        "❌ Failed to send. Error: " + JSON.stringify(error);
      document.getElementById("form-status").style.color = "red";
    });
});
