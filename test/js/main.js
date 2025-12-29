// 主逻辑文件

// 文本处理功能
function toUpperCase() {
  const input = document.getElementById("textInput").value;
  document.getElementById("textResult").textContent = input.toUpperCase();
}

function toLowerCase() {
  const input = document.getElementById("textInput").value;
  document.getElementById("textResult").textContent = input.toLowerCase();
}

function reverseText() {
  const input = document.getElementById("textInput").value;
  document.getElementById("textResult").textContent = input
    .split("")
    .reverse()
    .join("");
}

function clearText() {
  document.getElementById("textInput").value = "";
  document.getElementById("textResult").textContent = "";
}

// 初始化组件实例
let counter, colorPicker, progressBar, clock, calculator;

// 页面加载完成后的初始化
document.addEventListener("DOMContentLoaded", function () {
  // 初始化组件
  counter = new window.components.Counter();
  colorPicker = new window.components.ColorPicker();
  progressBar = new window.components.ProgressBar();
  clock = new window.components.Clock();
  calculator = new window.components.Calculator();

  // 添加动画延迟
  const sections = document.querySelectorAll(".section");
  sections.forEach((section, index) => {
    section.style.animationDelay = index * 0.1 + "s";
  });

  // 初始化进度条
  progressBar.setProgress(0);
});

// 全局函数（供HTML调用）
window.toUpperCase = toUpperCase;
window.toLowerCase = toLowerCase;
window.reverseText = reverseText;
window.clearText = clearText;

window.increment = () => counter.increment();
window.decrement = () => counter.decrement();
window.resetCounter = () => counter.reset();

window.changeBackground = (color) => colorPicker.changeBackground(color);
window.setProgress = (percent) => progressBar.setProgress(percent);
window.calculate = (operation) => calculator.calculate(operation);
