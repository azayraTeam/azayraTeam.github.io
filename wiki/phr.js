const userLang = navigator.language || navigator.userLanguage;

let i = 0;

function after() {
    if (userLang.startsWith('pt') || userLang.startsWith('br')) {
        goPT();
    } else {
        goEN();
    }
}

//setTimeout(after, 2000)

function goPT() {
    window.location.href = './EN/'; 
}

function goEN() {
    window.location.href = './EN/'; 
}
