let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    
}

document.querySelector("button").addEventListener("click", () =>{
    speech.text =  document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});