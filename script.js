const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(theme) {
	const isDarkTheme = theme === "dark";

	document.documentElement.dataset.theme = theme;
	themeToggle.textContent = isDarkTheme ? "Modo claro" : "Modo oscuro";
	themeToggle.setAttribute("aria-pressed", String(isDarkTheme));
	localStorage.setItem("theme", theme);
}

setTheme(savedTheme || (prefersDarkTheme ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
	const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
	setTheme(nextTheme);
});

document.getElementById("year").textContent = new Date().getFullYear();