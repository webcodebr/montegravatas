function expandImage(image) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("expandedImage");

    modal.style.display = "block";
    modalImage.src = image.src;
}

function closeImage(event) {
    // Prevent closing if clicking on the image itself
    if (event && event.target.id === "expandedImage") return;

    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
