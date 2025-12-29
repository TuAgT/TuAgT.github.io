// 组件功能

// 计数器功能
class Counter {
  constructor() {
    this.count = 0;
    this.displayElement = document.getElementById("count");
  }

  increment() {
    this.count++;
    this.updateDisplay();
  }

  decrement() {
    this.count--;
    this.updateDisplay();
  }

  reset() {
    this.count = 0;
    this.updateDisplay();
  }

  updateDisplay() {
    if (this.displayElement) {
      this.displayElement.textContent = this.count;
      this.displayElement.style.color =
        this.count > 0 ? "#27ae60" : this.count < 0 ? "#e74c3c" : "#3498db";
    }
  }
}

// 颜色选择器功能
class ColorPicker {
  constructor() {
    this.currentColor = "#667eea";
  }

  changeBackground(color) {
    document.body.style.background = `linear-gradient(135deg, ${color} 0%, ${window.utils.darkenColor(
      color,
      20
    )} 100%)`;
    this.currentColor = color;

    // 更新激活状态
    document.querySelectorAll(".color-option").forEach((option) => {
      option.classList.remove("active");
    });
    event.target.classList.add("active");

    // 更新显示
    const currentColorElement = document.getElementById("currentColor");
    if (currentColorElement) {
      currentColorElement.textContent = color;
    }
  }
}

// 进度条功能
class ProgressBar {
  constructor() {
    this.progressElement = document.getElementById("progressBar");
  }

  setProgress(percent) {
    if (this.progressElement) {
      this.progressElement.style.width = percent + "%";
    }
  }
}

// 时钟功能
class Clock {
  constructor() {
    this.clockElement = document.getElementById("clock");
    this.start();
  }

  update() {
    if (this.clockElement) {
      this.clockElement.textContent = window.utils.formatTime(new Date());
    }
  }

  start() {
    this.update();
    setInterval(() => this.update(), 1000);
  }
}

// 计算器功能
class Calculator {
  calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        result = num2 !== 0 ? num1 / num2 : "错误：除数不能为0";
        break;
      default:
        result = "未知操作";
    }

    const resultElement = document.getElementById("calcResult");
    if (resultElement) {
      resultElement.textContent = `结果: ${result}`;
    }
  }
}

// 导出组件类
window.components = {
  Counter,
  ColorPicker,
  ProgressBar,
  Clock,
  Calculator,
};
