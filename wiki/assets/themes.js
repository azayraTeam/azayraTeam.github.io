function setAndApplyTheme(theme) {
    setTheme(theme);
    applyTheme(theme);
}

// save -> Localstorage
function setTheme(theme) {
  localStorage.setItem('currentTheme', theme);
}

//  localstorage -> theme
function getTheme() {
  return localStorage.getItem('currentTheme') || 'light';
  
}
function applyThemeOnLoad() {
  const savedTheme = getTheme();
  setAndApplyTheme(savedTheme);
}

applyThemeOnLoad();
function ThemeColor(color) {
console.log('Current Theme:', color);
}

applyThemeOnLoad();

function applyTheme(theme) {
switch (theme) {
// LIGHT-ONE
  case 'light':
  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = 'rgb(255, 255, 255)';
  document.getElementById('header').style.backgroundColor = 'rgb(255, 122, 201)';
  document.getElementById('sidebar').style.backgroundColor = 'rgb(255, 255, 255)';
  document.getElementById('dropdown').style.backgroundColor = 'rgb(242, 162, 200)';
  document.getElementById('content').style.backgroundColor = 'rgb(247, 247, 247)';
  document.getElementById('content').style.color = 'rgb(51, 51, 51)';

  ThemeColor('light');
    break;
// DARK-ONE
case 'dark':
  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = 'rgb(32, 32, 32);';
  document.getElementById('header').style.backgroundColor = 'rgb(255, 122, 201)';
  document.getElementById('sidebar').style.backgroundColor = 'rgb(51, 51, 51)';
  document.getElementById('dropdown').style.backgroundColor = 'rgb(51, 51, 51)';
  document.getElementById('content').style.backgroundColor = 'rgb(51, 51, 51)';
  document.getElementById('content').style.color = 'rgb(252, 252, 252)';

  ThemeColor('dark');
default:
  ThemeColor('light');
break;
}}

