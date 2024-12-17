function checkVowels() {
    let inputText = document.getElementById('inputText');
    let paraDiv = document.getElementById("para");
    let resultDiv = document.getElementById('result');
    let errorDiv = document.getElementById('error');
    resultDiv.textContent = '';
    paraDiv.textContent = '';
    errorDiv.textContent = '';


    if (!inputText.value) {
      errorDiv.textContent = 'Please enter some text.';
      errorDiv.style.color = "red";
      return;
    }
    
    

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;

    for (let i = 0; i < inputText.value.length; i++) {
      if (vowels.includes(inputText.value[i])) {
        count++;
      }
    }
    paraDiv.textContent = inputText.value
    resultDiv.textContent = 'Number of vowels :'   + count;
    inputText.value = "";
    inputText.focus();

    

  }
