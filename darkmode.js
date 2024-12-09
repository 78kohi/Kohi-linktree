let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");
const banner = document.getElementById("banner");

const bannerWhite = "./assets/bannerWhite.png";
const bannerBlack = "./assets/bannerBlack.png";

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  banner.style.backgroundImage = `url('${bannerBlack}')`;
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  banner.style.backgroundImage = `url('${bannerWhite}')`;
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
