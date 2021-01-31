window.addEventListener('load', () => {
    const output=document.querySelector('#some-output');
    const inputField = document.querySelector('#input-chars');
        inputField.addEventListener('input', event => {
            output.innerHTML=inputField.value.length;       
    });

})