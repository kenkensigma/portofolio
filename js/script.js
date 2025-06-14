const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.navlist');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

  window.addEventListener("load", () => {
    document.querySelectorAll(".progress").forEach((progressEl) => {
      const target = parseInt(progressEl.dataset.value);
      let current = 0;

      const interval = setInterval(() => {
        if (current >= target) {
          clearInterval(interval);
        } else {
          current++;
          progressEl.style.width = current + "%";
          progressEl.querySelector(".progress-text").textContent = current + "%";
        }
      }, 20); // Semakin kecil semakin cepat (20ms antar step)
    });
  });

const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1
  });

  reveals.forEach(section => {
    observer.observe(section);
  });
