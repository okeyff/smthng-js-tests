let formName = document.querySelector('#form-name'), //name
    formEmail = document.querySelector('#form-email'), //email
    formPhone = document.querySelector('#form-phone'), //phone
    formBtn = document.querySelector('#form-button'), //button
    formModalName = document.querySelector('.form-modal-text'), //modalParagraphUser
    closeBtn = document.querySelector('#btnClose'); //closeButton

// Заготовочка под информацию (userInfo.name.value - к примеру)
// let userInfo = {
//     name: document.querySelector('#form-name'),
//     phone: document.querySelector('#form-phone')
// } 

formBtn.onclick = function() {
    if (formName.value !== '' && formEmail.value !== '' && formPhone.value !== '') {
        formModalName.innerText = `${formName.value}, Ваше сообщение отправлено. Проверьте почтовый ящик: ${formEmail.value}.`;
        document.querySelector('.form-modal').style.display = "flex";
    } else {
        alert('Заполните все поля!');
    }
};

closeBtn.onclick = function() {
    document.querySelector('.form').style.display = "none";
};