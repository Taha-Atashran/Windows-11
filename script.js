f = 0;

function startmenu() {
  // alert(f);
  if (f == 0) {
    start.style.height = "600px";
    start.style.border = "1px solid #ccc";
    bottom.style.border = "1px solid #ccc";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    f = 1;
  } else if (f == 1) {
    start.style.height = "0px";
    start.style.border = "none";
    bottom.style.border = "none";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    power.style.height = "0";
    power.style.border = "none";
    f = 0;
  }
}
var i = 0;
function Shutdown() {
  if (i == 0) {
    power.style.height = "150px";
    power.style.border = "1px solid #ccc";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";

    i = 1;
  } else if (i == 1) {
    power.style.height = "0";
    power.style.border = "none";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    i = 0;
  }
}
function Thispc() {
  mycomputer.style.display = "block";
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}
function closes() {
  mycomputer.style.display = "none";
  thisPcFooter.style.display = "none";
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}

function resize() {
  if (i == 0) {
    mycomputer.style.width = "100%";
    mycomputer.style.height = "100%";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";

    i = 1;
  } else if (i == 1) {
    mycomputer.style.width = "700px";
    mycomputer.style.height = "600px";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";

    i = 0;
  }
}

function widgets() {
  if (i == 0) {
    widgetsMenu.style.width = "600px";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    i = 1;
  } else if (i == 1) {
    widgetsMenu.style.width = "0";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    // widgetsMenu.style.background = "transparent";
    i = 0;
  }
}

function calculator() {
  machin.style.display = "grid";
  start.style.height = "0";
  start.style.border = "none";
  bottom.style.border = "none";
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}
function mark() {
  machin.style.display = "none";
  calculatorFooter.style.display = "none";
}
clickR.oncontextmenu = function (e) {
  rightClick.style.top = e.pageY + "px";
  rightClick.style.left = e.pageX + "px";
  rightClick.style.display = "block";
  rightDelete.style.display = "none";

  return false;
};
clickR.onclick = function () {
  rightClick.style.display = "none";
  rightDelete.style.display = "none";

  // start.style.height = "0px";
};

document.onkeydown = function (e) {
  if (e.key == "Enter") {
    if (pass.value == "123") {
      loginpage.style.display = "none";
      desktoppage.style.display = "block";
    } else {
      alert("Password incorroct");
    }
  } else {
    return;
  }
};

function off() {
  loginpage.style.display = "block";
  // start.style.display = "none";
  desktoppage.style.display = "none";
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}

function wordd() {
  word.style.display = "flex";
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}
function shut() {
  word.style.display = "none";
  wordFooter.style.display = "none";
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}

function size() {
  if (i == 0) {
    word.style.width = "100%";
    word.style.height = "95%";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";

    i = 1;
  } else if (i == 1) {
    word.style.width = "700px";
    word.style.height = "600px";
    rightDelete.style.display = "none";
    rightClick.style.display = "none";

    i = 0;
  }
}

function newWord() {
  word.style.display = "none";
  word_page.style.display = "block";
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}
function word_close() {
  word_page.style.display = "none";
  wordFooter.style.display = "none";
}

function selWord() {
  word.style.display = "flex";
  word_page.style.display = "none";
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}

var fontChangeStyle = function (font) {
  document.getElementById("textStyle").style.fontFamily = font.value;
};
var fontChangeSize = function (font) {
  document.getElementById("textStyle").style.fontSize = font.value + "px";
};

function boldStyle() {
  if (i == 0) {
    textStyle.style.fontWeight = "900";
    i = 1;
  } else if (i == 1) {
    textStyle.style.fontWeight = "100";
    i = 0;
  }
}

function orib() {
  if (i == 0) {
    textStyle.style.fontStyle = "italic";
    i = 1;
  } else if (i == 1) {
    textStyle.style.fontStyle = "normal";
    i = 0;
  }
}

function underline() {
  if (i == 0) {
    textStyle.style.textDecoration = "underline";
    i = 1;
  } else if (i == 1) {
    textStyle.style.textDecoration = "none";
    i = 0;
  }
}

function throth() {
  if (i == 0) {
    textStyle.style.textDecoration = "line-through";
    i = 1;
  } else if (i == 1) {
    textStyle.style.textDecoration = "none";
    i = 0;
  }
}

function shadow() {
  if (i == 0) {
    textStyle.className = "shadow";
    i = 1;
  } else if (i == 1) {
    textStyle.className = "";
    i = 0;
  }
}

function light() {
  if (i == 0) {
    textStyle.className = "lighter";
    i = 1;
  } else if (i == 1) {
    textStyle.className = "";
    i = 0;
  }
}

function showColorPicker() {
  var colorInput = document.createElement("input");
  colorInput.type = "color";

  colorInput.addEventListener("input", function () {
    // This function will be called when the user selects a color
    var selectedColor = colorInput.value;
    document.getElementById("textStyle").style.color = selectedColor;
  });

  colorInput.click();
}

function left() {
  textStyle.style.textAlign = "start";
}
function right() {
  textStyle.style.textAlign = "end";
}
function center() {
  textStyle.style.textAlign = "center";
}

textInput.oncontextmenu = function (e) {
  rightWord.style.top = e.pageY + "px";
  rightWord.style.left = e.pageX + "px";
  rightWord.style.display = "flex";

  return false;
};
textInput.onclick = function () {
  rightWord.style.display = "none";
};

function refreshPage() {
  location.reload(true);
}

let display = document.getElementById("display");
let currentInput = "";

function appendToDisplay(value) {
  currentInput += value;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.textContent = "";
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    display.textContent = currentInput;
  } catch (error) {
    display.textContent = "Error";
  }
}

let activeDragElement = null;

function dragStart(event) {
  activeDragElement = event.target;
  const rect = activeDragElement.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;

  document.addEventListener("mousemove", dragMove);
  document.addEventListener("mouseup", dragEnd);

  function dragMove(event) {
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;

    activeDragElement.style.left = x + "px";
    activeDragElement.style.top = y + "px";
  }

  function dragEnd() {
    document.removeEventListener("mousemove", dragMove);
    document.removeEventListener("mouseup", dragEnd);
    activeDragElement = null;
  }
}

const draggableElements = document.querySelectorAll(".draggable");

draggableElements.forEach((element) => {
  element.addEventListener("mousedown", dragStart);
});

////

function closePer() {
  personalize.style.display = "none";
  personalizeFooter.style.display = "none";
}
function openPer() {
  personalize.style.display = "flex";
  rightClick.style.display = "none";
}

///
p = 0;

function miniPer() {
  if (p == 0) {
    personalize.style.height = "100%";
    personalize.style.width = "100%";
    p = 1;
  } else if (p == 1) {
    personalize.style.height = "600px";
    personalize.style.width = "700px";
    p = 0;
  }
}

////

// function show(x) {
//   document.body.backgroundImage = "./img/Wallpapaer/0" + x + ".jpg";
// }

function changeBackground(imageUrl) {
  document.body.style.backgroundImage = `url(${imageUrl})`;
}

/////

function closeRecycleBin() {
  recycleBin.style.display = "none";
  recycleBinFooter.style.display = "none";
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}
function openRecycleBin() {
  recycleBin.style.display = "block";
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}

function resizeRecycleBin() {
  if (p == 0) {
    recycleBin.style.height = "100%";
    recycleBin.style.width = "100%";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    p = 1;
  } else if (p == 1) {
    recycleBin.style.height = "600px";
    recycleBin.style.width = "700px";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    p = 0;
  }
}
/////

function closeRestore() {
  restore.style.display = "none";
}
////
function deleteFolderR() {
  rightDelete.style.display = "block";
  rightClick.style.display = "none";
}

////

// Optional: Disable the default context menu on the entire document
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
////

function newFolder() {
  parentDelete.style.display = "flex";
  rightClick.style.display = "none";
}
///

function deleteItemsRecycle() {
  itemsRecycle.style.display = "flex";
  rightDelete.style.display = "none";
  parentDelete.style.display = "none";
  recycleBinImg.src = "./img/icon/icons8-recycle-bin-48 (3).png";
  resycleBinImgFooter.src = "./img/icon/icons8-recycle-bin-48 (3).png";
}

////

function restoreClick() {
  restore.style.display = "block";
}

///

function finalRestore() {
  parentDelete.style.display = "flex";
  itemsRecycle.style.display = "none";
  restore.style.display = "none";
  recycleBinImg.src = "./img/icon/icons8-recycle-bin-48 (2).png";
  resycleBinImgFooter.src = "./img/icon/icons8-recycle-bin-48 (2).png";
}
///

function minusThisPC() {
  mycomputer.style.display = "none";
  thisPcFooter.style.display = "block";
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}

function openFooterThisPc() {
  if (p == 0) {
    mycomputer.style.display = "block";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    p = 1;
  } else if (p == 1) {
    mycomputer.style.display = "none";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    p = 0;
  }
}

////

function minusRecycleBin() {
  recycleBin.style.display = "none";
  recycleBinFooter.style.display = "block";
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}

function openFooterrecycleBin() {
  if (p == 0) {
    recycleBin.style.display = "block";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    p = 1;
  } else if (p == 1) {
    recycleBin.style.display = "none";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    p = 0;
  }
}

////

function minusWord() {
  word.style.display = "none";
  wordFooter.style.display = "block";
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}

function openFooterWord() {
  if (p == 0) {
    word.style.display = "flex";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    p = 1;
  } else if (p == 1) {
    word.style.display = "none";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    p = 0;
  }
}

function minusWorsPage() {
  word_page.style.display = "none";
  wordFooter.style.display = "block";
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}
////

function minusCalculator() {
  machin.style.display = "none";
  calculatorFooter.style.display = "block";
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}

function openFootercalculator() {
  if (p == 0) {
    machin.style.display = "grid";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    p = 1;
  } else if (p == 1) {
    machin.style.display = "none";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    p = 0;
  }
}

///

function minusPersonalize() {
  personalize.style.display = "none";
  personalizeFooter.style.display = "block";
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}

function openFooterPersonalize() {
  if (p == 0) {
    personalize.style.display = "flex";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    p = 1;
  } else if (p == 1) {
    personalize.style.display = "none";
    rightClick.style.display = "none";
    rightDelete.style.display = "none";
    p = 0;
  }
}

///

function closeClick() {
  rightClick.style.display = "none";
  rightDelete.style.display = "none";
}

///

////
