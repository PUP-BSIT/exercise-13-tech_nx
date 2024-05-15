document.getElementById("name").addEventListener
        ("input", toggleCommentButton);
document.getElementById("comment").addEventListener
        ("input", toggleCommentButton);

function toggleCommentButton() {
  let nameInput = document.getElementById("name").value.trim();
  let commentInput = document.getElementById("comment").value.trim();
  let commentBtn = document.getElementById("comment_btn");

  if (nameInput && commentInput) {
    commentBtn.removeAttribute("disabled");
  } else {
    commentBtn.setAttribute("disabled", "disabled");
  }
}