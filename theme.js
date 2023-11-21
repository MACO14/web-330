
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");


// check if dark mode is enabled
// if it's enabled, turn it off
// if it's disabled, turn it on

const enableDarkMode = () => {
    // 1. add the class darkmode to the body
    document.body.classList.add('darkmode');
    // 2. update darkmode in the local storage
    localStorage.setItem('darkMode', 'enabled');
    console.log(darkMode);
    
}

const disableDarkMode = () => {
    // 1. add the class darkmode to the body
    document.body.classList.remove('darkmode');
    // 2. update darkmode in the local storage
    localStorage.setItem('darkMode', null);
    
};

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener ("click, () => {
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
    darkModeToggle.addEventListener("click", () => {
        if (darkMode !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
});