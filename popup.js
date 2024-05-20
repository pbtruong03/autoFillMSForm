
document.addEventListener('DOMContentLoaded', () =>{
    //
    document.getElementById('fillButton').addEventListener('click', () => {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
          const formData = JSON.parse(event.target.result);
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              func: fillForm,
              args: [formData]
            });
          });
        };
        reader.readAsText(file);
    });


    //   Auto Fill Form
    function fillForm(formData) {
      const questionContainers = document.querySelectorAll('[data-automation-id="questionItem"]');
      questionContainers.forEach((questionContainer) => {
        const questionTextElement = questionContainer.querySelector('[data-automation-id="questionTitle"] span[role="heading"] span.text-format-content');
        if (questionTextElement) {
          const questionText = questionTextElement.innerText;
          const choices = questionContainer.querySelectorAll('[data-automation-id="choiceItem"] input[type="radio"]');
          const answer = formData[questionText];
            // Select Correct Choice !!
          choices.forEach((choice) => {
            if (choice.value === answer) {
              choice.checked = true;
              choice.ariaChecked = true;
              choice.dispatchEvent(new Event('change', { bubbles: true }));
              choice.dispatchEvent(new Event('click', { bubbles: true }));
            }
          });
        }
      });
    }
});
