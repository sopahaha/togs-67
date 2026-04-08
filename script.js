const decisionTime = 2000;

const sendButton = document.getElementById("sendButton");
const resultOverlay = document.getElementById("resultOverlay");
const resultText = document.getElementById("resultText");
const closeButton = document.getElementById("closeButton");

sendButton.addEventListener("click", () => {
  const op1 = document.getElementById("option1").value;
  const op2 = document.getElementById("option2").value;

  if (!op1 || !op2) {
    alert("Preencha ambas as opções para que o 67 decida seu destino...");
    return;
  }

  document.querySelectorAll(".hand-container").forEach((item) => {
    item.style.animationDuration = "0.2s";
    setTimeout(() => {
      item.style.animationDuration = "2s";
    }, decisionTime);
  });

  setTimeout(() => {
    const resposta = Math.random() > 0.5 ? op1 : op2;
    resultText.innerText = resposta;
    resultOverlay.classList.remove("hidden");
    resultOverlay.classList.add("active");
  }, decisionTime);

  console.log("O 67 está decidindo...");
});

closeButton.addEventListener("click", () => {
  resultOverlay.classList.remove("active");
  setTimeout(() => {
    resultOverlay.classList.add("hidden");
  }, 500);
});