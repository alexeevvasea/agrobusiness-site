const translations = {
  ru: "ru.json",
  ro: "ro.json",
  en: "en.json"
};

function loadLanguage(lang) {
  fetch(translations[lang])
    .then(response => response.json())
    .then(data => {
      document.querySelector(".hero h1").textContent = data.welcome;
      document.querySelector(".hero p").textContent = data.description;
      document.querySelector(".btn").textContent = data.contact_us;
      document.querySelector(".features h2").textContent = data.features;
      document.querySelectorAll(".feature").forEach((feature, index) => {
        feature.querySelector("h3").textContent = data.feature_titles[index];
        feature.querySelector("p").textContent = data.feature_descriptions[index];
      });
      document.querySelector(".products h2").textContent = data.products;
      document.querySelector(".services h2").textContent = data.services;
      document.querySelector(".about h2").textContent = data.about;
    })
    .catch(error => console.error("Ошибка загрузки перевода:", error));
}

document.querySelectorAll('.language-switcher a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.language-switcher a').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    const selectedLang = link.dataset.lang;
    loadLanguage(selectedLang);
    localStorage.setItem("selectedLang", selectedLang);
  });
});

const savedLang = localStorage.getItem("selectedLang") || "ru";
document.querySelector(`[data-lang="${savedLang}"]`).classList.add("active");
loadLanguage(savedLang);

