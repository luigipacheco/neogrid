const copyCodeButtons = document.querySelectorAll('.copy-code-button');

copyCodeButtons.forEach((copyCodeButton, index) => {
  // This selects the specific 'rouge-code' class within the code block that the button is meant to copy.
  // Assuming 'rouge-code' is nested within '.highlighter-rouge' and that is the correct structure.
  const codeBlock = document.querySelectorAll('.highlighter-rouge .rouge-code')[index]; 

  copyCodeButton.addEventListener('click', () => {
    if (codeBlock) {
      // Directly copy the text from 'rouge-code' class elements
      const code = codeBlock.innerText;

      window.navigator.clipboard.writeText(code);

      // Provide visual feedback that the code has been copied
      const originalText = copyCodeButton.innerText;
      copyCodeButton.innerText = 'Copied!';
      copyCodeButton.classList.add('copied');

      // Reset the button text and remove the 'copied' class after 2 seconds
      setTimeout(() => {
        copyCodeButton.innerText = originalText;
        copyCodeButton.classList.remove('copied');
      }, 2000);
    }
  });
});
