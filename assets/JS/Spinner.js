//Spinner on loading page
function SpinnerLoad() {
    var spinner = document.querySelector('.spinner-box');
    spinner.style.display = 'block';
    setInterval(() => {
        spinner.style.display = 'none';
    }, 5000);
};