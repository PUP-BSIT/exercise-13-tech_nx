let comments = [];

function addComment() {
  console.log("Add comment");
  let name = document.querySelector("#fname").value;
  let commentText = document.querySelector("#comment").value;
  let date = new Date().toLocaleDateString();

  let comment = { name, comment: commentText, date };

  comments.push(comment);
  sortComments();
  displayComments();

  document.querySelector("#fname").value = "";
  document.querySelector("#comment").value = "";
  document.querySelector("#com-b").disabled = true;
}

function displayComments() {
  let commentList = document.querySelector("#commentsSection");
  commentList.innerHTML = "";

  comments.forEach((comment) => {
    let li = document.createElement("li");
    li.innerHTML = `${comment.comment} - ${comment.name} - ${comment.date}`;
    commentList.appendChild(li);
  });
}

function sortComments(order) {
  if (order === "asc") {
    comments.sort((a, b) => a.name.localeCompare(b.name));
  } else if (order === "desc") {
    comments.sort((a, b) => b.name.localeCompare(a.name));
  }
}

document.querySelector("#commentForm").addEventListener("submit", function 
          (event) {
  console.log("Form submitted");
  event.preventDefault();
  addComment();
});

document.querySelector("#fname").addEventListener("input", comment_btn);
document.querySelector("#comment").addEventListener("input", comment_btn);

function comment_btn() {
  let name = document.getElementById("fname");
  let comment = document.getElementById("comment");
  let button = document.getElementById("com-b");

  if (name.value.length && comment.value.length) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

document.querySelector("#comment-form").addEventListener("input", comment_btn);

document.querySelector("#asc_btn").addEventListener("click", function () {
  sortComments("asc");
  displayComments();
});

document.querySelector("#desc_btn").addEventListener("click", function () {
  sortComments("desc");
  displayComments();
});

displayComments();
