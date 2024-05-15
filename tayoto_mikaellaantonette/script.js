function comment() {
  let comment = document.getElementById("gcomment");
  if (comment.value.length > 0) {
    document.getElementById("comment_button").disabled = false;
  } else {
    document.getElementById("comment_button").disabled = true;
  }
}

function name() {
  let name = document.getElementById("name");
  if (name.value.length > 0) {
    document.getElementById("comment_button").disabled = false;
  } else {
    document.getElementById("comment_button").disabled = true;
  }
}
