function mycomment() {
  let name = document.getElementById("name");
  let comment = document.getElementById("ycomment");
  let submitButton = document.getElementById("button_comment");

  if (name.value.length > 0 && comment.value.length > 0) {
      submitButton.disabled = false;
  } else {
      submitButton.disabled = true;
  }
}