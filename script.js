const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-theme");
  toggleBtn.textContent = "☀️ Modo Claro";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const isDark = body.classList.contains("dark-theme");

  toggleBtn.textContent = isDark ? "☀️ Modo Claro" : "🌙 Modo Escuro";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
