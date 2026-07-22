const acordeonButton = document.querySelectorAll('.acordeon .btn-idioma');

acordeonButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        const acordeon = button.parentElement;
        const isOpen = acordeon.classList.contains('open')

        if (isOpen) {
            acordeon.classList.remove("open");
        } else{
            acordeon.classList.add("open");
        }
    })
})
