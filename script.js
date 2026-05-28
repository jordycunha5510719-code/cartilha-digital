const btn = document.getElementById('btnSaibaMais');
const info = document.getElementById('infoSeguranca');

btn.addEventListener('click', () => {
    if (info.style.display === 'none') {
        info.style.display = 'block';
        btn.textContent = 'Esconder Informações';
    } else {
        info.style.display = 'none';
        btn.textContent = 'Dicas de Segurança';
    }
});
