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

const copyContent = async (text) => {
  if (text) {
    navigator.clipboard
      .writeText(replaceLetter(textarea.value))
      .then(() => {
        alert(`Kóshirildi: ${text.slice(0, 12)}...`);
      })
      .catch(() => {
        alert(`Qátelik boldı`);
      });
  } else {
    alert("Tekst jazıń");
  }
};

button.addEventListener("click", () => {
  copyContent(textarea.value);
  textarea.value = "";
});
