const textarea = document.querySelector(".textarea");
const button = document.querySelector(".copyButton");
const alertSuccess = document.querySelector(".alert--success");
const alertFail = document.querySelector(".alert--fail");
const closeButtons = document.querySelectorAll(".alert--logo__close");

const replaceLetter = (text) => {
  return text
    .replaceAll("U'", "Ú")
    .replaceAll("U’", "Ú")
    .replaceAll("A'", "Á")
    .replaceAll("A’", "Á")
    .replaceAll("O'", "Ó")
    .replaceAll("O’", "Ó")
    .replaceAll("N'", "Ń")
    .replaceAll("N’", "Ń")
    .replaceAll("I'", "Í")
    .replaceAll("I’", "Í")
    .replaceAll("g'", "ǵ")
    .replaceAll("g’", "ǵ")
    .replaceAll("o'", "ó")
    .replaceAll("o’", "ó")
    .replaceAll("n'", "ń")
    .replaceAll("n’", "ń")
    .replaceAll("u'", "ú")
    .replaceAll("u’", "ú")
    .replaceAll("a'", "á")
    .replaceAll("a’", "á")
    .replaceAll("i'", "ı")
    .replaceAll("i’", "ı");
};

const copyContent = async () => {
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(replaceLetter(textarea.value)).then(() => {
    if (textarea.value) {
      alertSuccess.style.display = "flex";
      setTimeout(() => {
        alertSuccess.style.display = "none";
      }, 5000);
    } else {
      alertFail.style.display = "flex";
      setTimeout(() => {
        alertFail.style.display = "none";
      }, 5000);
    }

    textarea.value = "";
  });
};

button.addEventListener("click", () => {
  copyContent();
});

textarea.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "Enter") {
    copyContent();
  }
});

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    const alert = closeButton.closest(".alert");
    alert.remove();
  });
});
