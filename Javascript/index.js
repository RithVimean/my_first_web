$(document).ready(function () {
    const date = new Date();
    const hours = date.getHours();
    let message = "";
    if (hours < 12) {
        message = '"Good Morning"';
    }
    else if (hours >= 12 && hours < 17) {
        message = '"Good Afternoon"'
    }
    else if (hours >= 17 && hours < 23) {
        message = '"Good Evening"';
    }
    else {
        message = '"Good Night"';
    }
    $('#headingText').empty().append(message + " From Rith Vimean");
})