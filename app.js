function countWords() {
  const sentece = document.getElementById("textInput").value;
  let words = sentece.trim().split(" ");
  let wordCount = 0;
  
  for (var i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      wordCount++;
    }
  }
  
  document.getElementById("wordCount").innerText = "Word count: " + wordCount;
}
const textInput = document.getElementById("textInput");
textInput.addEventListener("keydown", countWords);
