document.addEventListener('DOMContentLoaded', function() {
    const svgElement = document.getElementById('Layer');
    const modalWinMenu = document.querySelector('.modal_win_menu');
    const Elmain = document.querySelector('.main');
    
    svgElement.addEventListener('click', function() {
        if (modalWinMenu.style.top === '-150px') {
            modalWinMenu.style.top = '0';
            modalWinMenu.style.zIndex = '1';
            Elmain.style.top === '-100px';
            Elmain.style.top = '0';
        } else {
            modalWinMenu.style.top = '-150px';
            modalWinMenu.style.zIndex = '1';
            Elmain.style.top = '-100px';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const addButtMail = document.querySelector('.add_butt_mail button');
    const modalAddButtMail = document.querySelector('.modal_add_butt_mail');

    addButtMail.addEventListener('click', function() {
        if (modalAddButtMail.style.display === 'none') {
            modalAddButtMail.style.display = 'block';
        } else {
            modalAddButtMail.style.display = 'none';
        }
    });
});
