function verification() {

    let name = document.getElementById('name').value.trim();
    let comment = document.getElementById('comment').value.trim();

    if (name.length > 0 && comment.length > 0) {
        document.getElementById('save_button').disabled = false;
    } else {
        document.getElementById('save_button').disabled = true;
    }
}