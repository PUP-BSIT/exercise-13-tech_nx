const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const commentInput = document.getElementById("gcomment");
const commentList = document.getElementById("comment-list");
const sortAscButton = document.getElementById("sort-asc");
const sortDescButton = document.getElementById("sort-desc");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();
  const date = new Date();

  if (!name || !comment) {
    return;
  }

  const newComment = document.createElement("li");
  newComment.innerHTML = `<strong>${name}</strong> - ${comment} - <time datetime="${date}">${date.toLocaleString()}</time>`;

  const listItem = document.createElement("li");
  listItem.appendChild(newComment);
  commentList.appendChild(listItem);

  // Clear the input fields
  nameInput.value = "";
  commentInput.value = "";

  // Enable the submit button
  form.querySelector('button[type="submit"]').disabled = false;
});

function comment() {
  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();

  if (name || comment) {
    form.querySelector('button[type="submit"]').disabled = false;
  } else {
    form.querySelector('button[type="submit"]').disabled = true;
  }
}

function name() {
  comment();
}

function sortComments(ascending) {
  const comments = Array.from(commentList.children)
    .map((li) => li.firstElementChild)
    .filter((comment) => comment !== null);

  comments.sort((a, b) => {
    const aDate = new Date(a.querySelector("time").getAttribute("datetime"));
    const bDate = new Date(b.querySelector("time").getAttribute("datetime"));

    return ascending ? aDate - bDate : bDate - aDate;
  });

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => fragment.appendChild(comment.parentElement));
  commentList.innerHTML = "";
  commentList.appendChild(fragment);
}

sortAscButton.addEventListener("click", () => sortComments(true));
sortDescButton.addEventListener("click", () => sortComments(false));

