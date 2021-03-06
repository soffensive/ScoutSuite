const DARK_BOOTSTRAP_THEME = "inc-bootstrap/css/bootstrap-dark.min.css";
const LIGHT_BOOTSTRAP_THEME = "inc-bootstrap/css/bootstrap-light.min.css";

const DARK_SCOUT_THEME = "inc-scoutsuite/css/scoutsuite-dark.css";
const LIGHT_SCOUT_THEME = "inc-scoutsuite/css/scoutsuite-light.css";

$(document).ready(() => {
    if (isDarkThemeEnabled()) {
        document.getElementById("theme_checkbox").checked = true;
    }
});

function loadLastTheme() {
    if (isDarkThemeEnabled()) {
        setBootstrapTheme(DARK_BOOTSTRAP_THEME);
        setScoutTheme(DARK_SCOUT_THEME);
    }
}

/**
 * Toggles between light and dark themes
 */
function toggleTheme() {
    localStorage.setItem("dark_theme_enabled", document.getElementById("theme_checkbox").checked);
    if (document.getElementById("theme_checkbox").checked) {
        this.setBootstrapTheme(DARK_BOOTSTRAP_THEME)
        this.setScoutTheme(DARK_SCOUT_THEME)
    }
    else {
        this.setBootstrapTheme(LIGHT_BOOTSTRAP_THEME)
        this.setScoutTheme(LIGHT_SCOUT_THEME)
    }
};

/**
 * Toggles between light and dark themes
 */
function toggleTheme() {
    const darkThemeEnabled = document.getElementById("theme_checkbox").checked
    saveIsDarkThemeEnabled(darkThemeEnabled);

    if (darkThemeEnabled) {
        this.setBootstrapTheme(DARK_BOOTSTRAP_THEME)
        this.setScoutTheme(DARK_SCOUT_THEME)
    }
    else {
        this.setBootstrapTheme(LIGHT_BOOTSTRAP_THEME)
        this.setScoutTheme(LIGHT_SCOUT_THEME)
    }
};

/**
 * Sets the css file location received as the bootstrap theme
 * @param file
 */
function setBootstrapTheme(file) {
    document.getElementById("bootstrap-theme").href = file;
}

/**
 * Sets the css file location received as the scout theme
 * @param file
 */
function setScoutTheme(file) {
    document.getElementById("scout-theme").href = file;
}

function isDarkThemeEnabled() {
    return localStorage.getItem("dark_theme_enabled") == "true";
}

function saveIsDarkThemeEnabled(isDarkThemeEnabled) {
    localStorage.setItem("dark_theme_enabled", isDarkThemeEnabled);
}