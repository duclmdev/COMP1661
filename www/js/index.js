window.storage.store();
if (window.storage) {
    $("#title").html("WORKED!!!");
} else {
    $("#title").html("OH NO!!!");
}
