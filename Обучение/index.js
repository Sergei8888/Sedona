'use strict';
let formSumbitBtn = document.getElementById("form__sumbit-btn"),
    formAlert = document.getElementById("form_alert");
formSumbitBtn.onclick = () => formAlert.style.display = "inline";