setTimeout(() => {
    document.querySelector(".senddEmail").addEventListener("click", emailHandling)
}, 1000);

function emailHandling(e) {
    e.preventDefault()
    if (validateForm(selectInputs())) {
        sendEmail()
        document.querySelector("#form").reset()
    }
}


function validateForm(params) {
    let info = true
    if (params.from_name == "") {
        info = false
        errorInput(document.querySelector("#name"))
    }
    if (!params.phone_number.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
        info == false
        errorInput(document.querySelector("#phoneNumber"))
    }
    if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(String(params.email_id).toLowerCase())) {
        info = false
        errorInput(document.querySelector("#email"))
    }
    if (params.message == "") {
        info = false
        errorInput(document.querySelector("#description"))
    }
    return info
}

function errorInput(location) {
    location.style.border = "1px solid red"

    setTimeout(() => {
        location.style.border = "none"
    }, 3000);
}

function selectInputs() {
    return params = {
        from_name: document.querySelector("#name").value,
        email_id: document.querySelector("#email").value,
        phone_number: document.querySelector("#phoneNumber").value,
        message: document.querySelector("#description").value
    }
}

function emailInit() {
    emailjs.init({
        publicKey: "raiG_njWVlcTamchv",
    });
}

function sendEmail() {
    emailInit()
    emailjs.send("service_6jdhxdp", "template_r6gwoeo", selectInputs()).then(function (res) { })
}