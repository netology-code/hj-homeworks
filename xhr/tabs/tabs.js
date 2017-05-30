let emailContent = new XMLHttpRequest();
let smsContent = new XMLHttpRequest();

let anchors = document.getElementsByTagName('a');
let pressEmail = anchors[0];
let pressSms = anchors[1];

let preloader = document.getElementById('preloader');

function onLoadStart() {
  preloader.classList.remove("hidden");
}
function onLoadEnd() {
  preloader.classList.add("hidden");
}

let content = document.getElementById('content');

function onLoadContent() {
  if (this.status === 200) {
    content.innerHTML = `${this.responseText}`;
  }
}

[emailContent, smsContent].forEach(v => {
  v.addEventListener("loadstart", onLoadStart);
  v.addEventListener("loadend", onLoadEnd);
  v.addEventListener("load", onLoadContent);
});

emailContent.open('GET', pressEmail.href, true);
emailContent.send();

pressEmail.addEventListener("click", onClickEmail);
function onClickEmail(event) {
  event.preventDefault();

  pressSms.classList.remove("active");
  this.classList.add("active");

  emailContent.open('GET', this.href, true);
  emailContent.send();
}

pressSms.addEventListener("click", onClickSms);
function onClickSms(event) {
  event.preventDefault();

  pressEmail.classList.remove("active");
  this.classList.add("active");

  smsContent.open('GET', this.href, true);
  smsContent.send();
}
