let formName = document.getElementById('#form-name'), //name
    formEmail = document.getElementById('#form-email'), //email
    formPhone = document.getElementById '#form-phone'), //phone
formBtn = document.getElementById('#form-button'), //button
    formModalName = document.querySelector('.form-modal-text'), //modalParagraphUser
    closeBtn = document.getElementById('#btnClose'); //closeButton

// Заготовочка под информационный блок (userInfo.name.value - к примеру)
// let userInfo = {
//     name: document.getElementById('#form-name'),
//     phone: document.getElementById('#form-phone')
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