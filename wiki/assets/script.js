function toggleDropdown(event) {
    if(event.target.tagName === "LI") return;
    event.currentTarget.classList.toggle('active');
  }

  function copyCode() {
    const code = document.querySelector('pre').innerText;
    navigator.clipboard.writeText(code).then(() => {
      alert('Code Copied!');
    });
  }

  window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add('fade-in');
      }
    });
  });