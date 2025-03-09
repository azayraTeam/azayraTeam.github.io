const avaliableThemes = [Theme1, Theme2];
let indc = 0;

const themesButton = document.getElementById('ThemesButton');
function themesButtonClicked(){
    avaliableThemes[indc]();

    indc = (indc + 1) % avaliableThemes.length;
}

function Theme1() {
    ThemeColor('light');
}
function Theme2() {
    ThemeColor('dark');
}

