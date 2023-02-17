// Show/hide hourly and daily weather sections

const hourlyTab = document.getElementById("hourly-tab");
const dailyTab = document.getElementById("daily-tab");
const hourlyWeather = document.getElementById("hourly-weather");
const dailyWeather = document.getElementById("daily-weather");

hourlyTab.addEventListener("click", function() {
	if (!hourlyTab.classList.contains("active")) {
		hourlyTab.classList.add("active");
		dailyTab.classList.remove("active");
		hourlyWeather.style.display = "block";
		dailyWeather.style.display = "none";
	}
});

dailyTab.addEventListener("click", function() {
	if (!dailyTab.classList.contains("active")) {
		dailyTab.classList.add("active");
		hourlyTab.classList.remove("active");
		dailyWeather.style.display = "block";
		hourlyWeather.style.display = "none";
	}
});
