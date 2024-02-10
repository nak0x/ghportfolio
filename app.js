document.addEventListener("DOMContentLoaded", function(event) { 
  const form = document.getElementById("contact-form");
  const Elements = {
    name: document.getElementById("name"),
    message: document.getElementById("message")
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.open(`mailto:pro.theolesage@gmail.com?subject=Contact de ${encodeURIComponent(Elements.name.value)}&body=${encodeURIComponent(Elements.message.value)}`);
  })
});
