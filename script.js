function getShiftValue(secret) {
    return secret ? secret.length % 26 : 1; // Shift based on secret length
  }

  function shiftCipher(text, shift) {
    return text
      .split("")
      .map((char) => {
        if (char.match(/[a-zA-Z]/)) {
          let code = char.charCodeAt(0);
          if (char >= "A" && char <= "Z") {
            return String.fromCharCode(
              ((code - 65 + shift + 26) % 26) + 65
            );
          } else if (char >= "a" && char <= "z") {
            return String.fromCharCode(
              ((code - 97 + shift + 26) % 26) + 97
            );
          }
        }
        return char;
      })
      .join("");
  }

  function encodeText() {
    let input = document.getElementById("inputText");
    let secret = document.getElementById("secretWord").value.trim();
    if (!secret) {
      alert("Please enter a secret word for encoding!");
      return;
    }
    let shiftValue = getShiftValue(secret);
    input.value = shiftCipher(input.value, shiftValue);
  }

  function decodeText() {
    let input = document.getElementById("inputText");
    let secret = document.getElementById("secretWord").value.trim();
    if (!secret) {
      alert("Please enter the secret word to decode!");
      return;
    }
    let shiftValue = getShiftValue(secret);
    input.value = shiftCipher(input.value, -shiftValue);
  }

  function animation() {
    setTimeout(function () {
      let icon = document.getElementById("copybutton");
      if (icon){
          icon.innerText = "👍";
          setTimeout(()=>{
            icon.innerText = "📋";
          },1000)
      }
    },500);
  }
  function copyText() {
    let input = document.getElementById("inputText");
    input.select();
    document.execCommand("copy");
    animation();
  }