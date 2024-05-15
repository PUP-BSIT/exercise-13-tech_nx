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

document.getElementById("commentForm").addEventListener("input", comment_btn);