const url = 'http://localhost:2600',
    inputMessage = document.getElementById("messageInput");

let newMessage = null


$("#messageInput").keyup(function(e) {
    if (e.keyCode === 13) {
        addMessage()
    }
});

function addMessage() {
    newMessage = inputMessage.value
    inputMessage.value = ""
}

async function updating() {
    let getRequest = $.get(url + "/data.json")
    getRequest.done((data) => {
        let i = 0
        while (i != data.messages.length) {
            if (data.messages[i].rendered == "false") {
                data.messages[i].rendered = false
            } else {
                data.messages[i].rendered = true
            }
            i += 1
        }
        i = 0
        while (i != data.messages.length) {
            if (newMessage != null) {
                data.messages.push({ "text": newMessage, "rendered": false })
                console.log(data)
                newMessage = null
            }
            if (data.messages[i].rendered) {
                if ($(".message")[i] == undefined) {
                    $("#dialog").append("<div class='message'>" + data.messages[i].text + "</div>")
                }
                if (data.messages[i].text != $(".message")[i].innerText) {
                    $(".message")[i].innerText = data.messages[i].text
                }
            } else {
                $("#dialog").append("<div class='message'>" + data.messages[i].text + "</div>")
                data.messages[i].rendered = true
            }
            if (i == data.messages.length - 1) {
                let postRequest = $.post(url + "/dataPost", { data })
                postRequest.done((data) => {
                    console.log("JSON sent")
                })
            }
            i += 1
        }
    })
}

updating() //Первая отрисовка

let updateTimer = setInterval(updating, 100)