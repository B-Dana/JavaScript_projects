function displayProfession(proff) {
    var profType = proff.getAttribute("data-profession");
    alert(profType + " works at the "+ proff.innerHTML);
}