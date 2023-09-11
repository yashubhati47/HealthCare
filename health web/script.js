console.log("hello")

function button() {
    const button = document.getElementById('dropdown-flag');

    if (button.style.display === 'none') {
        button.style.display = 'flex';
    } else {
        button.style.display = 'none';
    }

}