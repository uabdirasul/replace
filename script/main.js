const textarea = document.querySelector(".text");
const button = document.querySelector(".copyButton");

const replaceLetter = (text) => {
  return text.value
    .replaceAll("U'", "Ú")
    .replaceAll("A'", "Á")
    .replaceAll("O'", "Ó")
    .replaceAll("N'", "Ń")
    .replaceAll("I'", "Í")
    .replaceAll("g'", "ǵ")
    .replaceAll("o'", "ó")
    .replaceAll("n'", "ń")
    .replaceAll("u'", "ú")
    .replaceAll("a'", "á")
    .replaceAll("i'", "ı");
};

const copyContent = async (text) => {
  if (text.value) {
    navigator.clipboard.writeText(replaceLetter(textarea));
    alert(`Kóshirildi: ${text.value.slice(0, 12)}...`);
  } else {
    alert("Tekst jazıń");
  }
};

button.addEventListener("click", () => {
  copyContent(textarea);
  textarea.value = "";
});
