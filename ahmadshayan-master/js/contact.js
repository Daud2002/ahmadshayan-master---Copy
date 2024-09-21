let form = document.getElementById('contactform');
let submit = document.getElementById('submitz');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let message = document.getElementById('contactmessage').value;
    let subject = document.getElementById('subject').value;
    let names = document.getElementById('contactname').value;
    let mobile = document.getElementById('phone').value;
    const mailtoLink = `mailto:expertshayan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Hi, I am ' + names + ' and my mobile number is ' + mobile + '\n\n' + message)}`;

    window.location.href = mailtoLink;
    message.innervalue = '';
    document.getElementById('contactform').reset();
})
submit.addEventListener('submit', function(event) {
    event.preventDefault();
    let message = document.getElementById('contactmessage').value;
    let subject = document.getElementById('subject').value;
    let names = document.getElementById('contactname').value;
    let mobile = document.getElementById('phone').value;
    const mailtoLink = `mailto:expertshayan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Hi, I am ' + names + ' and my mobile number is ' + mobile + '\n\n' + message)}`;
    window.location.href = mailtoLink;
    message.innervalue = '';
    document.getElementById('contactform').reset();
})