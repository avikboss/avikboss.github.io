function hideElement(name) {
    let e = document.getElementById(name);
    if (e.style.display === "none") {
        e.style.display = "block";
    } else {
        e.style.display = "none";
    }
}

function clearSearch() {
    document.getElementById("search").value="";
    portfolioList.search("");
}