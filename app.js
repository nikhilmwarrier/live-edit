saveBtn = document.querySelector("#save");
wrapper = document.querySelector("#wrapper");

document.querySelector(".editor #html-code").addEventListener("keyup", run);
document.querySelector(".editor #html-code").addEventListener("change", run);
document.querySelector(".editor #html-code").addEventListener("paste", run);

document.querySelector(".editor #css-code").addEventListener("keyup", run);
document.querySelector(".editor #css-code").addEventListener("change", run);
document.querySelector(".editor #css-code").addEventListener("paste", run);

document.querySelector(".editor #js-code").addEventListener("keyup", run);
document.querySelector(".editor #js-code").addEventListener("change", run);
document.querySelector(".editor #js-code").addEventListener("paste", run);

document.querySelector("textarea").addEventListener("keydown", (event) => {
  console.log(event);
  if (event.keyCode === 9) {
    event.preventDefault();
    alert(`Sorry, tabs are not supported right now. Use spaces instead!`);
  }
});

saveBtn.addEventListener("click", () => {
  let htmlCode = document.querySelector("#html-code").value;
  let cssCode =
    "<style>" + document.querySelector("#css-code").value + "</style>";
  let jsCode = document.querySelector("#js-code").value;

  let outputCode = htmlCode + cssCode + jsCode;

  var blob = new Blob([outputCode], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob, "index.html");
});

function run() {
  let htmlCode = document.querySelector("#html-code").value;
  let cssCode =
    "<style>" + document.querySelector("#css-code").value + "</style>";
  let jsCode = document.querySelector("#js-code").value;
  let output = document.querySelector("#output");
  //console.log(htmlCode,cssCode,jsCode,output);
  output.contentDocument.body.innerHTML = htmlCode + cssCode;
  output.contentWindow.eval(jsCode);
}

function toggleFullscreenEditor() {
  wrapper.classList.toggle("flex");
}
