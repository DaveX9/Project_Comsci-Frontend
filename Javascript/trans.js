// Language switch logic
document.getElementById('th-btn').addEventListener('click', function () {
    switchLanguage('th');
});

document.getElementById('en-btn').addEventListener('click', function () {
    switchLanguage('en');
});

function switchLanguage(lang) {
    document.querySelectorAll('[data-lang-en]').forEach(function (element) {
        const text = element.getAttribute(`data-lang-${lang}`);
        element.textContent = text;
    });
}
