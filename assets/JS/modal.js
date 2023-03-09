var titleLabel = document.querySelectorAll('#title-label')
var messageLabel = document.querySelector('#message-label')

function labelAnimation(target) {
    for (let index = 0; index < titleLabel.length; index++) {
        if (titleLabel[index] == target) {
           const title = titleLabel[index];
        title.style.bottom = '30px' 
        }
    }
}

function messageAnimation() {
    messageLabel.style.top = '-25px'
}

function resetMail() {
    setInterval(() => {
        var emailField = document.querySelectorAll('#email-field')
        var messageField = document.querySelector('#message-field')

        for (let index = 0; index < emailField.length; index++) {
            emailField[index].value =''
        }
        messageField.value =''
    }, 3000);
}