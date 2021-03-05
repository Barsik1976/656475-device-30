const link = document.querySelector(".about-wrap-write");
const popup = document.querySelector(".modal-write-us");
const close = popup.querySelector(".modal-close");
const form = popup.querySelector("form");
const login = popup.querySelector("[name=name]");
const mail = popup.querySelector("[name=e-mail]");

/*
const isStorageSupport = true;
const storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}
*/

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    mail.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});



window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
