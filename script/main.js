// Enable strict mode to enforce stricter parsing and error handling
"use strict";

// Select the textarea element with the class textarea
const textarea = document.querySelector(".textarea");

// Select the button element with the class copyButton
const button = document.querySelector(".copyButton");

// Select the element with the classes alert and alert--success
const alertSuccess = document.querySelector(".alert--success");

// Select the element with the classes alert and alert--fail
const alertFail = document.querySelector(".alert--fail");

// Select all elements with the class alert--logo__close
const closeButtons = document.querySelectorAll(".alert--logo__close");

/**
 * Replaces certain characters in the input text with their accented versions.
 * @param {string} text - The input text to be processed.
 * @returns {string} The processed text with the specified characters replaced.
 */
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

/**
 * Copies the processed text from the textarea to the clipboard.
 */
const copyContent = async () => {
  // Select the textarea element and its content
  textarea.select();
  textarea.setSelectionRange(0, 99999);

  // Copy the processed text to the clipboard
  navigator.clipboard.writeText(replaceLetter(textarea.value)).then(() => {
    // If the textarea has content, display a success alert
    if (textarea.value) {
      alertSuccess.style.display = "flex";
      setTimeout(() => {
        alertSuccess.style.display = "none";
      }, 5000);
    } else {
      // Otherwise, display a failure alert
      alertFail.style.display = "flex";
      setTimeout(() => {
        alertFail.style.display = "none";
      }, 5000);
    }

    // Clear the textarea
    textarea.value = "";
  });
};

// Add an event listener to the button that listens for the click event
button.addEventListener("click", () => {
  // Call the copyContent function when the button is clicked
  copyContent();
});

// Add an event listener to the textarea that listens for the keydown event
textarea.addEventListener("keydown", (e) => {
  alertFail.style.display = "none";
  // If the user presses Ctrl + Enter
  if (e.ctrlKey && e.key === "Enter") {
    // Call the copyContent function
    copyContent();
  }
});

// For each close button
closeButtons.forEach((closeButton) => {
  // Add an event listener that listens for the click event
  closeButton.addEventListener("click", () => {
    // Find the closest ancestor element with the class alert
    const alert = closeButton.closest(".alert");
    // Remove the alert element from the DOM
    alert.remove();
  });
});
