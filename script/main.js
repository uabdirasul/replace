const textarea = document.querySelector(".text");
const button = document.querySelector(".copyButton");

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
  let copyText = document.querySelector(".text");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard
    .writeText(replaceLetter(copyText.value))
    .then(() => {
      alert(`Kóshirildi: ${copyText.value.slice(0, 12)}...`);
      copyText.value = "";
    })
    .catch(() => {
      alert(`Qátelik boldı`);
    });
};

button.addEventListener("click", () => {
  copyContent();
});
